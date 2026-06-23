# Treatise: Prehistory

> The sixty years from the perceptron to the Transformer were not a mere chronicle of technology — they were a causal chain explaining "why it was ultimately the Transformer that came to rule the world." Each technical advance answered the question left by its predecessor, while simultaneously creating the problem the next step would need to solve. This was no accident; it was the inevitability of six decades of accumulation.

---

## I. Overview

The scope of the LLM Chronicle begins in June 2017 — the month "Attention Is All You Need" was published. But the Transformer did not spring from a vacuum. It stood on the shoulders of sixty years of neural network research, every brick laid by those who came before: the perceptron defined the basic unit of "learning," backpropagation made it possible to train multi-layer networks, LSTM solved the problem of sequential memory, Word2Vec proved the power of distributed representations, AlexNet demonstrated the feasibility of GPU training, and Seq2Seq together with the attention mechanism paved the way for the encoder-decoder architecture.

This treatise records the important prehistory that preceded our scope. It is not a technical checklist — it is a story about "why, after sixty years, it was ultimately the Transformer that won."

---

## II. The Perceptron (1958) → The First AI Winter

In 1958, psychologist Frank Rosenblatt proposed the **Perceptron** at Cornell University.[^1] It was a single-layer neural network that mimicked the way biological neurons work: receiving multiple input signals, performing a weighted summation, and passing the result through an activation function. Rosenblatt declared in *The New York Times* that this machine "will be able to walk, talk, see, write, reproduce itself and be conscious of its own existence."

The core innovation of the perceptron was **learnable weights** — improving outputs by adjusting the weights of input signals. This was a revolutionary idea at the time: a machine could learn on its own, rather than being explicitly programmed. The U.S. Navy funded the research, and Rosenblatt simulated a perceptron with 400 photosensitive units on an IBM 704 computer, capable of recognizing simple geometric shapes.

But the perceptron had a fatal limitation: it could only solve **linearly separable** problems. In 1969, Marvin Minsky and Seymour Papert proved mathematically in their book *Perceptrons* that a single-layer perceptron could not solve the XOR problem — a simple logic problem.[^2] The book was so influential that it directly caused the first AI winter: funding dried up, research stalled, and neural networks were cast into the wilderness for nearly twenty years.

**Why it mattered**: The perceptron defined the basic unit of the neural network — weighted summation plus an activation function. This structure still exists in the Transformer sixty years later (the feed-forward network layers). Its failure was not because the direction was wrong, but because it was too simple — the world is not linearly separable. Multi-layer networks were needed to solve complex problems, but at the time no one knew how to train them.

**Impact on what followed**: The rise and fall of the perceptron left the AI field with a profound lesson: the gap between public expectations and technical reality can destroy a line of research. This lesson would replay repeatedly in subsequent AI winters. More importantly, it posed an unsolved question: how do you train multi-layer networks? This question would not be answered until 1986.

---

## III. Backpropagation (1986) → Training Multi-Layer Networks Becomes Possible

In 1986, David Rumelhart, Geoffrey Hinton, and Ronald Williams published "Learning Representations by Back-Propagating Errors" in *Nature*.[^3] This paper reinvented and popularized the **backpropagation algorithm**, solving the problem left by the perceptron: how to train multi-layer neural networks.

The core idea of backpropagation is the **chain rule**: computing the gradient of the loss function with respect to each weight, propagating the error signal backward from the output layer to the input layer, and then updating the weights using gradient descent. This enabled multi-layer networks (with hidden layers) to learn complex, non-linear representations.

The 1986 paper demonstrated the capabilities of multi-layer networks through two classic experiments: learning the XOR function and learning distributed representations of words. The XOR experiment directly responded to Minsky's critique — multi-layer networks could solve problems that single-layer perceptrons could not. The word representation experiment proved even more far-reaching: the network learned to represent word meanings as vectors, with similar words having similar vectors. This idea would become Word2Vec twenty-seven years later.

**Why it mattered**: Backpropagation transformed neural networks from single-layer toys into multi-layer tools. Without it, there would be no deep learning. It solved a fundamental question: how do you make multi-layer networks learn? The answer: propagate error signals backward from output to input, adjusting weights layer by layer.

**Impact on what followed**: Backpropagation is the cornerstone of deep learning. All neural network training today — including the Transformer — relies on backpropagation. But the 1986 paper had another legacy: it introduced the concept of **distributed representations**. Word meanings are represented not by symbols but by vectors. This idea was validated at scale in 2013 with Word2Vec and became the foundation of modern NLP.

---

## IV. The Second AI Winter (1990s) → Connectionism vs. Symbolism

The 1990s were AI's second winter. Although backpropagation was technically viable, neural networks faced serious problems in practice: **insufficient computational resources**, **too little data**, and **unstable training**. Meanwhile, symbolic AI (systems based on rules and logic) achieved commercial success in expert systems, further squeezing the research space for neural networks.

The central debate of this era was **connectionism vs. symbolism**. Connectionists (represented by Hinton) believed intelligence emerged from the connections of simple units; symbolists (represented by Marvin Minsky) believed intelligence arose from symbol manipulation and logical reasoning. Funding and academic attention clearly favored symbolism — expert systems produced real-world value in medical diagnosis, financial analysis, and other domains.

Neural network research went underground during this period. Hinton persisted at Carnegie Mellon University and the University of Toronto, but his students struggled to find jobs. A famous anecdote: Hinton's student Yann LeCun developed convolutional neural networks at Bell Labs, but when he pitched a check-recognition system to banks, the bank manager asked, "What does this have to do with AI?" — because the term "AI" was pejorative at the time.

**Why it mattered**: The second AI winter was not a technical failure but the result of **expectations gap** and **paradigm competition**. Neural networks were theoretically viable but lacked two critical elements in the 1990s: sufficient data and sufficient compute. This lesson was thoroughly validated in 2012 — when data and compute were available, neural networks immediately crushed symbolic methods.

**Impact on what followed**: This era shaped the community structure of the AI field. The handful of researchers who persisted with neural networks (Hinton, Yann LeCun, Yoshua Bengio) later became known as the "Godfathers of Deep Learning." Their persistence paid off in 2012, but more importantly, they trained a generation of students who became the core workforce of the AI industry in the 2010s. The debate between symbolism and connectionism ultimately ended in connectionism's victory — but this victory was not because symbolism was wrong, rather because the world changed: the internet produced massive amounts of data, and GPUs provided cheap compute.

---

## V. LSTM (1997) → A Long-Term Solution for Sequence Modeling

In 1997, Sepp Hochreiter and Jürgen Schmidhuber proposed the **Long Short-Term Memory** (LSTM) network.[^4] It was a special kind of recurrent neural network (RNN) designed specifically to solve the **long-term dependency problem** of RNNs.

The problem with standard RNNs is the **vanishing gradient**: when sequences are long, the gradients from backpropagation decay exponentially across time steps, preventing the network from learning long-range dependencies. LSTM's solution was to introduce a **gating mechanism**: a forget gate, an input gate, and an output gate. These gates control the flow, retention, and output of information, enabling the network to selectively remember or forget information.

The core innovation of LSTM was the **Cell State** — an information highway running through the entire sequence. The forget gate decides which old information to discard, the input gate decides which new information to add, and the output gate decides which information to output. This design allowed LSTM to learn dependencies spanning hundreds of time steps.

**Why it mattered**: LSTM solved the fundamental deficiency of RNNs, making sequence modeling possible. Before LSTM, RNNs could only handle very short sequences (dozens of steps). After LSTM, breakthroughs followed in machine translation, speech recognition, text generation, and other sequential tasks.

**Impact on what followed**: LSTM became the standard tool for NLP in the 2010s. Google used LSTM for machine translation, Apple used LSTM for Siri's speech recognition, and Baidu used LSTM for voice search. But LSTM also had limitations: it still processed sequences sequentially and could not perform parallel computation. This limitation was resolved in 2017 by the Transformer — which replaced the recurrent structure with self-attention, achieving full parallelization. LSTM was the most important sequence modeling tool before the Transformer, and also the direct target the Transformer was designed to replace.

---

## VI. LeNet-5 (1998) → CNNs for Vision

In 1998, Yann LeCun published "Gradient-Based Learning Applied to Document Recognition" at Bell Labs.[^5] This paper proposed **LeNet-5**, a convolutional neural network (CNN) for handwritten digit recognition. LeNet-5 was the first CNN to be successfully deployed in a commercial system — the U.S. Postal Service used it to recognize zip codes on envelopes.

LeNet-5's architecture comprised seven layers: two convolutional layers, two pooling layers, and three fully connected layers. Convolutional layers extracted local features through **local receptive fields** and **weight sharing**, pooling layers reduced computation through downsampling, and fully connected layers performed classification. This architecture later became the standard paradigm for computer vision.

**Why it mattered**: LeNet-5 proved the effectiveness of CNNs on visual tasks. Although it was small (about 60K parameters), it demonstrated the core idea of convolutional networks: efficiently extracting spatial features through local connectivity and weight sharing. This was counterintuitive at the time — most researchers believed neural networks should be fully connected, not locally connected.

**Impact on what followed**: LeNet-5 was the pioneering work for convolutional neural networks. Although it did not make a splash in 1998 (because datasets were too small and compute insufficient), its ideas were validated at massive scale in 2012 with AlexNet. AlexNet's architecture was essentially a scaled-up version of LeNet-5 — more layers, more parameters, more data, GPU training. From LeNet-5 to AlexNet was the same idea realized at scale.

---

## VII. Word2Vec (2013) → The Triumph of Distributed Representations

In 2013, Tomas Mikolov and colleagues at Google released **Word2Vec**.[^6] It was not a model but a method for training word vectors. The core idea of Word2Vec was: the meaning of a word is determined by its context ("you know a person by the company they keep"). By training on large-scale text, Word2Vec could map each word to a high-dimensional vector space, such that semantically similar words were close together in the vector space.

Word2Vec's two variants — CBOW (predicting a center word from context) and Skip-gram (predicting context from a center word) — both demonstrated astonishing semantic arithmetic: "king − man + woman = queen." This result stunned the NLP community: word meanings could be captured by vector operations.

**Why it mattered**: Word2Vec validated the effectiveness of distributed representations at scale. Before Word2Vec, word representations were primarily one-hot encoding — each word was a sparse vector with a dimension equal to vocabulary size, with only the target word set to 1 and everything else 0. Word2Vec mapped words to dense vectors (typically 300-dimensional), capturing the continuity and similarity of word meanings.

**Impact on what followed**: Word2Vec became a cornerstone of modern NLP. It was used in machine translation, text classification, sentiment analysis, and virtually every NLP task. More importantly, it established a paradigm: **pre-trained word vectors + fine-tuning for downstream tasks**. This paradigm was carried forward in ELMo, BERT, and GPT — only upgraded from word vectors to contextual representations. Word2Vec was the most important infrastructure in NLP before the Transformer.

---

## VIII. AlexNet (2012) → The Feasibility of GPU Training for Deep Networks

In 2012, Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton won the ImageNet Large Scale Visual Recognition Challenge (ILSVRC) with **AlexNet**.[^7] AlexNet achieved a top-5 error rate of 15.3%, beating the runner-up by 10.8 percentage points — an overwhelming victory.

AlexNet's architecture was a scaled-up version of LeNet-5: eight layers (five convolutional layers, three fully connected layers), approximately 60 million parameters. But the real innovation was not the architecture but the **training method**: training in parallel on two NVIDIA GTX 580 GPUs for one week. This was the first time GPUs were used to train deep networks at scale.

**Why it mattered**: AlexNet proved two things: first, deep networks on sufficiently large datasets could massively outperform traditional methods; second, GPUs were the right hardware for training deep networks. The ImageNet dataset contained 1.2 million images, and GPUs provided sufficient parallel compute. The combination of the two inaugurated the golden age of deep learning.

**Impact on what followed**: AlexNet was the starting point of the deep learning revolution. After it, the entire computer vision field rapidly shifted to deep learning. More importantly, it triggered a **compute arms race**: researchers began to realize that bigger models, more data, and more powerful GPUs could yield better performance. This logic was pushed to its extreme in GPT-3 and GPT-4. AlexNet also altered the talent flow in the AI industry: Hinton's two students (Sutskever and Krizhevsky) later joined Google and Google Brain, respectively, becoming central figures in the industrialization of deep learning.

---

## IX. GAN (2014) → A New Paradigm for Generative Models

In 2014, Ian Goodfellow and colleagues proposed **Generative Adversarial Networks** (GANs).[^8] The core idea of GANs was **adversarial training**: two networks — a generator and a discriminator — competing against each other in a zero-sum game. The generator tried to produce realistic data to fool the discriminator, while the discriminator tried to distinguish real data from generated data. Through this adversarial process, the generator gradually learned to produce increasingly realistic data.

The elegance of the GAN lay in its simplicity: there was no need to explicitly define the data distribution — only a discriminator was needed. The generator implicitly learned the data distribution through adversarial training. Goodfellow reportedly conceived the idea in a bar, sketching it on a napkin.

**Why it mattered**: GANs opened a new paradigm for generative models. Before GANs, generative models were mainly variational autoencoders (VAEs) and Boltzmann machines, which produced blurry images. GAN-generated images achieved surprising clarity as early as 2014. More importantly, the GAN idea — learning through adversarial training — influenced many subsequent works, including image inpainting, style transfer, and data augmentation.

**Impact on what followed**: GANs became a symbol of deep learning's creativity. They spawned a series of applications: StyleGAN (generating realistic human faces), CycleGAN (image style transfer), and Pix2Pix (image-to-image translation), among others. But GANs also had limitations: unstable training, mode collapse, and difficulty of evaluation. These limitations were overcome in 2020 by Diffusion Models. GANs were an important milestone in generative modeling, but not the endpoint.

---

## X. Seq2Seq + Attention (2014) → Encoder-Decoder + Attention

In 2014, Ilya Sutskever and colleagues at Google Brain published "Sequence to Sequence Learning with Neural Networks."[^9] This paper proposed the **Seq2Seq** architecture: an encoder compresses the input sequence into a fixed-length vector, and a decoder generates the output sequence from that vector. This architecture was applied to machine translation and achieved breakthrough results.

That same year, Dmitry Bahdanau and colleagues published "Neural Machine Translation by Jointly Learning to Align and Translate."[^10] This paper introduced the **attention mechanism** on top of Seq2Seq. Attention allowed the decoder to "attend to" different parts of the input sequence when generating each word, rather than relying solely on a fixed vector. This solved Seq2Seq's information bottleneck problem.

**Why it mattered**: Seq2Seq + Attention defined the encoder-decoder architecture, the direct precursor to the Transformer. Attention is the core innovation of the Transformer, but in 2014 it was still attached to RNN/LSTM. Seq2Seq demonstrated the feasibility of end-to-end sequence learning, and attention resolved the information bottleneck for long sequences.

**Impact on what followed**: Seq2Seq + Attention represented a paradigm shift in NLP. It drove significant progress in machine translation, text summarization, dialogue systems, and more. Most importantly, it raised a critical question: can the attention mechanism work independently of RNNs? This question was answered by the Transformer in 2017 — the answer was "yes," and it worked even better.

---

## XI. ResNet (2015) → A Breakthrough in Depth

In 2015, Kaiming He and colleagues at Microsoft Research Asia proposed the **Residual Network** (ResNet).[^11] ResNet solved the **degradation problem** in deep network training: when the number of layers increased, performance actually decreased. ResNet's solution was to introduce **residual connections** (skip connections): allowing the input to bypass certain layers and be added directly to the output.

ResNet-152 had 152 layers and achieved a 3.57% top-5 error rate on ImageNet, surpassing human-level performance (5.1%) for the first time. This result stunned the computer vision community: deep networks could be trained to hundreds of layers, and deeper networks performed better.

**Why it mattered**: ResNet solved the fundamental barrier to training deep networks. Before ResNet, deep networks rarely exceeded 20 layers. After ResNet, network depth was no longer a limitation. Residual connections allowed gradients to propagate smoothly backward, avoiding the vanishing gradient problem.

**Impact on what followed**: ResNet was a milestone in deep learning engineering. Residual connections were widely adopted in virtually all deep network architectures, including the Transformer. The Transformer's "residual connection + layer normalization" comes directly from ResNet's ideas. ResNet also changed how researchers thought: not "how to design better layers" but "how to let information flow better."

---

## XII. AlphaGo (2016) → AI's Public Awakening Moment

In March 2016, Google DeepMind's **AlphaGo** defeated world Go champion Lee Sedol 4–1 in Seoul.[^12] The match was broadcast globally, with an estimated 200 million viewers. AlphaGo's victory was not merely technical — it was AI's "public awakening moment."

AlphaGo combined **Monte Carlo Tree Search** (MCTS) with **deep neural networks**. A policy network predicted probable next moves, and a value network evaluated the win probability of board positions. Through self-play, AlphaGo continuously improved its strategies. AlphaGo Zero, in 2017, went further: it learned entirely from scratch through self-play, without using any human game records, surpassing all humans and all previous AlphaGo versions.

**Why it mattered**: AlphaGo proved that AI could surpass humans in complex decision-making tasks. The search space of Go contains more configurations than there are atoms in the universe, making exhaustive search completely infeasible. AlphaGo used neural networks to guide search, demonstrating that the combination of "intuition + search" could solve problems previously considered impossible.

**Impact on what followed**: AlphaGo changed the public perception of AI. Before AlphaGo, AI was something from science fiction for most people. After AlphaGo, AI became a real, powerful, and sometimes frightening technology. This shift in public perception laid the socio-psychological foundation for the later explosion of ChatGPT. Technically, AlphaGo demonstrated the enormous potential of combining reinforcement learning with deep learning, directly influencing the later development of RLHF (Reinforcement Learning from Human Feedback) — the core technology behind ChatGPT's alignment.

---

## XIII. "Attention Is All You Need" (2017) → An Ending and a Beginning

In June 2017, Ashish Vaswani and colleagues at Google published "Attention Is All You Need."[^13] This paper proposed the **Transformer** architecture, which abandoned RNNs and LSTMs entirely, using only self-attention to process sequential data.

The Transformer's core innovation was **Multi-Head Self-Attention**: every word directly "talks to" every other word in the sentence, computing all pairwise relationships at once. This enabled highly parallel training while naturally solving the long-range dependency problem.

**Why it mattered**: The Transformer solved two fatal flaws of RNNs: inability to parallelize and long-range forgetting. Through a subtractive insight — discard the RNN, use only attention — it created an architecture that was simpler, more powerful, and more scalable.

**Impact on what followed**: The Transformer was both an ending and a beginning. It was the ending of sixty years of neural network research — the perceptron, backpropagation, LSTM, CNNs, attention mechanisms — all these technologies converged in the Transformer. It was also the beginning of a new era — GPT, BERT, ChatGPT, GPT-4 — all these models are based on the Transformer. The Transformer is not a model; it is a key that opened the door to every large language model that followed.

(See "Chronicle: June 2017"; for details, see "The Transformer Biographies" and "The Attention Biographies.")

---

## Commentary

Why was it ultimately the Transformer that won?

It was no accident but the inevitability of six decades of accumulation. The perceptron proposed the basic unit of "learning," but it was too simple. Backpropagation made it possible to train multi-layer networks, but data and compute were lacking. LSTM solved sequential memory, but could not parallelize. Word2Vec proved distributed representations, but only at the word level. AlexNet demonstrated the feasibility of GPU training, but only in the visual domain. Seq2Seq + Attention defined the encoder-decoder, but was still attached to RNNs. ResNet solved the depth problem, but only in CNNs. AlphaGo astonished the world, but only in games.

The Transformer won because it stood on the shoulders of all these prior works and, through a subtractive insight — discard the RNN, use only attention — solved every problem left by its predecessors: parallel computation, long-range dependencies, and scalability. It did not invent something new; it placed the right things in the right positions.

At a deeper level, the reason is this: the Transformer is a **universal sequence processor**. Text is a sequence; images are sequences (of patches); audio is a sequence; code is a sequence; even protein structures can be represented as sequences. The Transformer's self-attention mechanism is naturally suited to sequential data, whether the sequence consists of words, pixels, or musical notes. This universality allowed a single architecture to dominate NLP, computer vision, speech, code, and scientific computing — something no LSTM, CNN, or RNN could achieve.

Sixty years of AI research ultimately converged into an eight-page paper and an elegant architecture. This was not the triumph of technology — it was the **triumph of accumulation**. Every problem left by predecessors became a problem for the Transformer to solve; every foundation laid by predecessors became a shoulder on which the Transformer stood. When all the conditions were ripe, the emergence of the Transformer was not a surprise — it was an inevitability.

---

*Compiled by the Endfield Industrial Historian Team: Silence (Lead Writer).*

---

[^1]: Rosenblatt, "The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain", *Psychological Review*, 1958. https://doi.org/10.1037/h0042519
[^2]: Minsky & Papert, *Perceptrons: An Introduction to Computational Geometry*, MIT Press, 1969.
[^3]: Rumelhart, Hinton & Williams, "Learning representations by back-propagating errors", *Nature*, 1986. https://doi.org/10.1038/323533a0
[^4]: Hochreiter & Schmidhuber, "Long Short-Term Memory", *Neural Computation*, 1997. https://doi.org/10.1162/neco.1997.9.8.1735
[^5]: LeCun et al., "Gradient-based learning applied to document recognition", *Proceedings of the IEEE*, 1998. https://doi.org/10.1109/5.726791
[^6]: Mikolov et al., "Efficient Estimation of Word Representations in Vector Space", arXiv:1301.3781, 2013. https://arxiv.org/abs/1301.3781
[^7]: Krizhevsky, Sutskever & Hinton, "ImageNet Classification with Deep Convolutional Neural Networks", NeurIPS, 2012. https://doi.org/10.1145/3065386
[^8]: Goodfellow et al., "Generative Adversarial Nets", NeurIPS, 2014. https://arxiv.org/abs/1406.2661
[^9]: Sutskever et al., "Sequence to Sequence Learning with Neural Networks", NeurIPS, 2014. https://arxiv.org/abs/1409.3215
[^10]: Bahdanau et al., "Neural Machine Translation by Jointly Learning to Align and Translate", ICLR, 2015. https://arxiv.org/abs/1409.0473
[^11]: He et al., "Deep Residual Learning for Image Recognition", CVPR, 2016. https://arxiv.org/abs/1512.03385
[^12]: Silver et al., "Mastering the game of Go with deep neural networks and tree search", *Nature*, 2016. https://doi.org/10.1038/nature16961
[^13]: Vaswani et al., "Attention Is All You Need", NeurIPS, 2017. https://arxiv.org/abs/1706.03762
