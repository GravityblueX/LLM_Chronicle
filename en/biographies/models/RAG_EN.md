# The Biography of RAG

> RAG (Retrieval-Augmented Generation) is not a single model — it is a methodology that engraves "retrieve first, then generate" into the language model workflow. Its core logic is straightforward: a language model does not need to memorize everything, but if it can consult a knowledge base before generating a response, the answer will be more accurate and more traceable. From its first systematic formulation in 2020 to its emergence as infrastructure for large model products after 2024, RAG has traveled a path from "scarce novelty" to "standard component."

---

## I. Technical Background

Language models face an inherent dilemma: knowledge resides in parameters, but parameters do not update automatically.

After GPT-3's release, people were amazed at its few-shot abilities but also discovered its fragility: it would confidently fabricate nonexistent facts, knew nothing about events after its training cutoff date, and could not tell users where its answers came from specifically. Fine-tuning could supplement some knowledge, but it was costly, slow, and made it difficult to separately manage old and new knowledge.

Before RAG was explicitly proposed, several precursors were laying the groundwork:

- **Open-book QA**: Having the model consult one or more relevant documents before answering a question, rather than relying solely on memory (e.g., DrQA, 2017)
- **Dense retrieval**: Using neural networks to embed queries and passages into the same space, where inner product or cosine similarity serves as the relevance score, replacing traditional TF-IDF or BM25 (e.g., DPR, 2020)
- **REALM**: Jointly training the retriever and the language model, encoding retrieved documents and feeding them to the language model for pre-training and fine-tuning (Guu et al., 2020)

These works demonstrated one thing: retrieval and generation should not be two independent stages but can be jointly optimized and mutually reinforcing.

---

## II. Core Innovation

### 2.1 Original RAG: making retrieval a differentiable generation front-end

In 2020, Lewis et al. (Facebook AI Research) published "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks," formally proposing RAG and naming the method with this acronym.[^1]

RAG's architecture is straightforward: a query comes in, first passes through a retriever (using DPR's dense retriever), which finds the top-k relevant document passages from Wikipedia; these passages are then concatenated with the input and fed to a seq2seq model (BART) to generate an answer.

The paper designed two variants:

- **RAG-Sequence**: Retrieved documents are treated as latent variables; each document independently generates a segment of the answer, and the final selection is made by the product of retrieval probability and generation probability.
- **RAG-Token**: Each token during generation can draw information from different documents; document contributions are dynamically determined at the token level.

Unlike REALM, which performs retrieval augmentation during the pre-training phase, RAG treats retrieval as a general-purpose generation front-end — applicable during both fine-tuning and inference, without requiring training from scratch.

The paper demonstrated RAG's advantages on multiple knowledge-intensive tasks (open-domain question answering, fact verification, Jeopardy question generation): not only did it achieve the best results on standard benchmarks at the time, but the generated content was more traceable and had less hallucination, because it directly cited retrieved documents.

RAG's historical role was to formally delineate the boundary between "parametric knowledge" and "external knowledge." A language model's parameters are responsible for language ability and general reasoning; the retrieval system is responsible for factual storage and freshness. The two have a clear division of labor, each performing its own function.

### 2.2 DPR and dense retrieval: making "finding the right document" a technology

RAG's retriever uses DPR (Dense Passage Retrieval). DPR itself is also a very important paper.[^2]

Karpukhin et al. proposed DPR in 2020: one BERT encodes the query, another BERT encodes the document, and their dot product gives the relevance score. The training objective is negative log-likelihood: the positive sample is the given correct document, and negative samples are randomly drawn from other documents. Compared to traditional methods like BM25, DPR is more sensitive to semantics — "capital" (首都) and "capital" (首府) may not match literally, but they are close in dense vector space.

The DPR paper demonstrated several important properties:

- "Random negatives" already work well, but "hard negatives" (documents that rank highly but are irrelevant to the question) work even better.
- Using FAISS for approximate nearest neighbor search provides speed sufficient for real-time inference.
- It significantly outperformed BM25 on open-domain QA benchmarks such as Natural Questions and TriviaQA.

The combination of DPR + RAG formed the basic paradigm of retrieval augmentation from 2020 to 2022: dense vector retrieval → top-k documents → concatenated into context → generate answer.

### 2.3 2023–2024: RAG moves from paper to engineering stack

After ChatGPT's release at the end of 2022, demand for RAG suddenly shifted from academic tasks to product requirements. Enterprises wanted to use their own internal documents, customer service knowledge bases, and product manuals to enhance model responses without fine-tuning the model. RAG fit perfectly: chunk documents, convert to vectors, store in a vector database, retrieve the most relevant passages when users ask questions, and feed them to the model for generation.

Key productization changes during this phase:

- **Orchestration frameworks with LangChain + LlamaIndex**: Chaining document loading, chunking, embedding, vector storage, retrieval, and generation into a pipeline.
- **Vector database explosion**: Specialized vector databases like Pinecone, Weaviate, Milvus, and Qdrant attracted significant funding and adoption.
- **RAG evaluation metrics emerged**: Frameworks like RAGAS and TruLens provided evaluation metrics such as faithfulness, relevance, and recall.

But this wave of engineering also exposed several bottlenecks in original RAG:

- Chunks that are too coarse yield inaccurate retrieval; chunks that are too fine result in incomplete context.
- How many documents should be retrieved? Too few may miss critical information; too many may overflow the context window.
- User questions are often not good retrieval queries — asking in colloquial language "What's that blue product you guys had that went on sale last month" is very difficult to search for.

### 2.4 Advanced RAG: self-correction, graph retrieval, multi-step reasoning

During 2023–2024, RAG research turned toward "making retrieval smarter":

**Self-RAG** (Asai et al., 2023): Let the model itself decide when retrieval is needed and when it is not; after retrieval, it evaluates whether documents are relevant and supportive of the answer — if not, it retrieves again.[^3]

**Corrective RAG (CRAG)**: After retrieval, first evaluate document quality; if insufficient, supplement with web search, then regenerate. This effectively adds self-checking and error-correction mechanisms to RAG.

**GraphRAG**: Rather than treating documents as isolated chunks, first build a knowledge graph — nodes are entities, edges are relationships — and perform multi-hop queries on the graph during retrieval. Microsoft open-sourced GraphRAG in 2024, emphasizing that it handles multi-entity, multi-hop complex questions better than traditional RAG.[^4]

**Multi-step RAG**: Rather than generating an answer from a single retrieval, the process iterates: retrieve → generate → retrieve again based on generation results → regenerate. Similar in spirit to ReAct or Toolformer, but specialized for knowledge retrieval.

The common direction of these advanced RAG approaches is to transform retrieval from "a simple preprocessing step before generation" into "a multi-step, multi-strategy, self-correcting active process during generation."

### 2.5 RAG vs. long context: competition or complementarity

During 2023–2024, large model context windows rapidly expanded: GPT-4 Turbo 128K, Claude 200K, Gemini 1M, Llama 3.1 128K. As contexts grew longer, a voice emerged: Can all documents simply be stuffed into the context, eliminating retrieval?

Practice gave a more nuanced answer than slogans:

- Putting hundreds of pages of documents into the context increases inference cost, VRAM, and latency, and the model "gets lost" in stacked information (the lost-in-the-middle effect)[^5]
- RAG's retrieval is a selective trade-off — feeding only the most relevant passages — balancing cost and effectiveness
- Long context is better suited for tasks that require complete context to process (e.g., summarizing an entire book, reviewing a long codebase); RAG is better suited for finding specific information from massive document collections
- The two are not either/or but a combination: use RAG to filter relevant passages, then use long context to accommodate the entire filtered result

The mainstream approach in products after 2024 is essentially a mix of RAG + long context. Models can handle longer inputs, but retrieval is still responsible for selecting the truly important portions from massive document collections.

### 2.6 Key data

| Date | Work | Core contribution | Historical role |
|------|------|-------------------|-----------------|
| 2020-04 | DPR | Dual-encoder dense retrieval, surpassing BM25 | Provided a high-performance retriever for RAG |
| 2020-05 | REALM | Retrieval augmentation during pre-training | Broke the boundary of "retrieval only at inference time" |
| 2020-12 | RAG (Lewis et al.) | Retrieval + seq2seq generation, joint probability modeling | Formally proposed, named, and defined the RAG paradigm |
| 2023 | Self-RAG | Model itself judges when to retrieve and whether results are relevant | Internalized retrieval from external fixed rules to model decisions |
| 2024 | GraphRAG | Knowledge graph + multi-hop retrieval + LLM generation | Addressed the blind spot of multi-entity complex queries in traditional RAG |
| 2024 | Long context + RAG fusion | Retrieval for filtering, long context for accommodation | Became the dominant RAG engineering pattern after 2024 |

---

## III. Impact and Successors

### 3.1 The default recipe for enterprise AI deployment

By 2026, RAG had become a standard component in enterprise AI applications. Customer service chatbots, internal knowledge base Q&A, legal contract review, medical literature search, codebase Q&A — virtually any scenario requiring "model + proprietary knowledge" uses RAG as its first-iteration solution.

This is not because RAG is the most technically elegant approach, but because its engineering barrier is the lowest: no model fine-tuning needed, no annotated training data required — just organize the documents, vectorize them, and build the retrieval. Enterprises can get it running first, then decide which components need fine-tuning or reinforcement based on feedback.

### 3.2 RAG's new role in the agent era

Agent models have pushed RAG into a more active role. In workflows like ReAct, AutoGPT, and Claude Code, the model is not merely "fed retrieval results" — it "decides for itself what to look up."

This creates problems of multi-step retrieval, tool calling, and memory integration. The model sees a question → decides what to search → retrieves information from vector stores, web searches, code repositories, and databases separately → then synthesizes a generation. Each retrieval step is a RAG operation, but the entire process far exceeds the single-retrieval paradigm of original RAG.

### 3.3 Unresolved tensions

RAG also has long-standing tensions:

- **No universal optimal chunking strategy**: Different document types (legal, code, encyclopedia, conversation logs) require different splitting approaches; both over-chunking and under-chunking harm effectiveness.
- **Embedding model transferability**: General-purpose embeddings (such as text-embedding-3) may not be optimal for enterprise-specific documents, but fine-tuning embeddings requires annotated data.
- **Cross-lingual and cross-dialect retrieval quality**: Mixed Chinese-English documents, multilingual knowledge bases, and colloquial query retrieval remain weak areas.
- **RAG security and permissions**: Retrieved documents may contain sensitive information; how to implement access control between retrieval and generation has no unified solution yet.

### 3.4 Fading or being absorbed

RAG is unlikely to "disappear," but it is transitioning from "an independent technical direction" to "a foundational module in large model system design." Just as retrieval in the 2010s ceased to be an independent research direction and became a default component of search systems, RAG is being embedded into frameworks, platforms, and standard product offerings.

Its essence — keeping knowledge outside parameters and fetching it when needed — will never be reversed. Whenever anyone says "connect a large model to your own data," the most natural implementation is some form of RAG.

---

## Commentary

RAG's contribution was not inventing retrieval but making retrieval a standard step in language model generation.

Before RAG, people already knew that "looking things up before answering" was more reliable than "making things up" — search engines had been doing this for over twenty years. But RAG turned this step into a differentiable, jointly optimizable, engineerable module: the dense retriever and generator speak the same probabilistic language, and the intermediate documents are preserved as a traceable evidence chain.

RAG's development resembles a riverbed that keeps widening. In its early days it was merely a suffix to machine reading comprehension; after ChatGPT, it became the first choice for all "model + proprietary data" solutions; Self-RAG and GraphRAG added error correction and multi-hop reasoning. The arrival of long context windows did not kill it — instead, it transformed RAG from "forced retrieval" to "selective retrieval" — more precise, more economical, more controllable.

History will remember RAG not because it proposed some earth-shattering algorithm, but because it found the shortest, most practical bridge between model capability and human knowledge~

---

*This entry was compiled by the Endfield Industrial History Team: Mizuusei (Systems Modeling).*

---

[^1]: Lewis et al., "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", NeurIPS 2020 / arXiv:2005.11401. https://arxiv.org/abs/2005.11401
[^2]: Karpukhin et al., "Dense Passage Retrieval for Open-Domain Question Answering", EMNLP 2020 / arXiv:2004.04906. https://arxiv.org/abs/2004.04906
[^3]: Asai et al., "Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection", ICLR 2024 / arXiv:2310.11511. https://arxiv.org/abs/2310.11511
[^4]: Microsoft, "GraphRAG: Unlocking LLM discovery on narrative private data", 2024-07-02. https://www.microsoft.com/en-us/research/project/graphrag/
[^5]: Liu et al., "Lost in the Middle: How Language Models Use Long Contexts", TACL 2024 / arXiv:2307.03172. https://arxiv.org/abs/2307.03172
