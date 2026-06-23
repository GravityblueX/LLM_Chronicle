# The Biography of Midjourney

> Midjourney was not the first text-to-image model, nor the most technically advanced. But it was the first product to make "AI-generated images" an **aesthetic experience.** While DALL·E 2 pursued prompt-matching precision and Stable Diffusion pursued open-source controllability, Midjourney took an entirely different path: closed-source, easy to use, focused on artistic style, community-driven. It proved that in the AI image generation domain, **productization** and **aesthetic quality** can become independent competitive advantages.

---

## I. Technical Background

In the first half of 2022, the AI image generation field was undergoing a collective leap.

In April 2022, OpenAI released DALL·E 2, achieving text-to-high-resolution-image generation using a CLIP + diffusion model architecture. [^1] In May of the same year, Google released Imagen, using the large language model T5-XXL as the text encoder, leading in human evaluations. [^2]

The common characteristic of both was being **closed-source.** DALL·E 2 had a waitlist; Imagen was not publicly released. Users could only access them through APIs or platform interfaces—no downloading the model, no running locally, no secondary development. Text-to-image capability was locked inside the servers of a few companies.

A change in the underlying technology occurred at the end of 2021. Rombach et al. published "High-Resolution Image Synthesis with Latent Diffusion Models" in December 2021, proposing the Latent Diffusion Model (LDM): instead of performing diffusion directly in pixel space, first compress the image into a low-dimensional latent space using a VAE, perform diffusion in the latent space, then decode back to pixels. [^3] This paper provided the technical foundation for both the subsequent Stable Diffusion and Midjourney.

---

## II. Core Events

### 2.1 Midjourney v1 (2022-07): the first public test on Discord

On **July 12, 2022**, Midjourney entered open beta. [^4]

Midjourney's founder was David Holz, co-founder of Leap Motion. Holz's background was not AI research but human-computer interaction—this background profoundly influenced Midjourney's product philosophy: **not making users learn AI, but making AI adapt to users.**

Midjourney's first major product decision was **choosing Discord as the interaction interface.** Users needed no software download, no dedicated account registration—just join Midjourney's Discord server, type the `/imagine` command with a text description, and generate images. [^4]

The elegance of this decision lay in:
- **Zero barrier**: Discord is one of the world's most popular social platforms; users need not learn new tools
- **Community-driven**: All generated images are displayed in public channels, where users can see, like, and comment on each other's work
- **Viral spread**: Beautiful AI-generated images spread rapidly both within Discord and on external social media

Midjourney v1's image quality was not outstanding—rough details, poor consistency, limited styles. But its **ease of use** and **community atmosphere** attracted a large early user base.

### 2.2 Midjourney v2–v3 (2022-08 to 2022-11): rapid iteration of aesthetic quality

In **August 2022**, Midjourney released v2, with significantly improved image quality. [^5]

In **November 2022**, Midjourney released v3, a milestone version. v3's images showed a qualitative leap in detail, consistency, and stylistic diversity—the distinctive "Midjourney style" aesthetic began to emerge: **high saturation, strong light-shadow contrast, cinematic composition.** [^5]

v3's success drove Midjourney's explosive spread on social media. "Made with Midjourney" tags proliferated across Twitter, Instagram, and Reddit. Midjourney-generated images were no longer "crude AI-generated pictures" but "visual works with artistic sensibility."

The key to this transformation lay in Midjourney's **training data strategy.** Unlike Stable Diffusion's use of LAION-5B, Midjourney's training data included large volumes of artwork, photography, and film stills—data that taught the model "what is beautiful," not merely "what is a cat." [^5]

### 2.3 Midjourney v4 (2022-11): the stylistic diversity breakthrough

In **November 2022**, Midjourney released v4. [^6]

v4's core breakthrough was **stylistic diversity.** Previous versions' generated images often had a distinctly "Midjourney style"; v4 began to produce multiple styles: photorealistic photography, oil painting, watercolor, anime, concept art, architectural rendering… Users could specify style in prompts, and the model followed reasonably well.

v4 also brought Midjourney acceptance in **professional fields.** Architects used it for concept art, game designers for character design, advertising agencies for creative assets. Midjourney transformed from "a novelty toy on social media" into "a practical tool for the creative industry."

### 2.4 Midjourney v5 (2023-03): photorealism

In **March 2023**, Midjourney released v5. [^7]

v5 was another milestone: **photorealism.** v5-generated images reached near-photograph levels in detail, lighting, and material—skin textures, individual hairs, light reflections, and depth of field were all highly realistic.

v5's release sparked the debate about "whether AI-generated images can fool humans." A v5-generated image of "the Pope wearing a white puffer jacket" went viral on social media, with many believing it was a real photograph. [^7] This event marked AI image generation's transition from "obviously AI-made" to "may require careful scrutiny."

v5 also drove Midjourney's further penetration into the commercial sphere. Advertising agencies began using it for formal creative assets, magazines for cover images, and film companies for concept art. Midjourney's subscription price ($10–60/month) was entirely acceptable for professional users.

### 2.5 Midjourney v6 (2024): text rendering and multimodality

In **2024**, Midjourney released v6. [^8]

v6's core breakthrough was **text rendering.** Previous versions' generated images often contained garbled or incomplete text; v6 could produce clear, accurate text—critical for posters, logos, packaging design, and other applications.

v6 also introduced **multimodal capability**: users could upload reference images and have Midjourney generate new images based on them. This feature expanded Midjourney from "text-to-image" to "image-to-image," further broadening its application scenarios.

v6's release solidified Midjourney's position in the **design field.** Designers could use it to rapidly generate multiple design options and select the most satisfying one for refinement. Midjourney evolved from "generating the final image" into "a step in the design process."

### 2.6 Competitive landscape

Midjourney's success drew industry attention and imitation.

**Stable Diffusion** (open-sourced August 2022) took an entirely different path: open-source, controllable, low-cost, requiring technical skill. [^9] Stable Diffusion's users were creators and developers who needed control and flexibility; Midjourney's users were ordinary users and designers who needed ease of use and aesthetic quality.

**DALL·E 3** (September 2023) natively integrated with ChatGPT, allowing users to generate images through conversation. [^10] DALL·E 3's advantage was prompt comprehension—it could understand more natural descriptions without users carefully crafting prompts.

By 2024, text-to-image had formed a three-way competitive landscape: DALL·E backed by the ChatGPT ecosystem, Midjourney dominating the artistic creation market, and Stable Diffusion commanding the open-source community. Each had its strengths, collectively driving AI image generation from the tech sphere to the mainstream.

---

## III. Impact and Legacy

### 3.1 Impact on the creative industry

Midjourney's impact on the creative industry was profound.

**Positive impacts:**
- **Efficiency gains**: Designers could rapidly generate multiple design options, saving substantial time
- **Cost reduction**: Small studios and individual creators could generate professional-grade assets without hiring specialized illustrators
- **Creative inspiration**: Midjourney's generated images often contained unexpected creative combinations, sparking designers' inspiration

**Negative impacts:**
- **Livelihood threats**: Illustrators, concept designers, advertising photographers, and other professions faced the risk of AI replacement
- **Copyright disputes**: The copyright ownership of Midjourney-generated images was unclear; artists' works may have been used to train models without authorization
- **Aesthetic convergence**: Widespread use of Midjourney could lead to visual style homogeneity, losing diversity

These controversies remain hotly debated to this day. Midjourney itself has been adjusting its strategy—for example, allowing artists to request removal of their works from training data.

### 3.2 The community-driven Discord model

Midjourney's Discord interaction model was one of its key success factors.

All Midjourney users were on the same Discord server, with generated images displayed in public channels. This model brought several unique advantages:
- **Viral spread**: Beautiful AI-generated images spread rapidly within Discord and across external social media
- **Community learning**: Users could see each other's prompts and results, learning to write better prompts
- **Feedback loop**: The Midjourney team could directly observe user behavior and feedback, iterating the product rapidly

This community-driven model influenced other AI products as well. Some AI companies began experimenting with similar community interaction approaches, letting users share and discuss AI-generated content on public platforms.

### 3.3 The triumph of the productization route

Midjourney's success proved that **productization** can become an independent competitive advantage.

Before Midjourney, competition in the text-to-image domain focused primarily on **technical metrics**: whose model had more parameters, whose benchmark scores were higher, whose paper was more cited. Midjourney demonstrated value through a different approach: **user experience**, **aesthetic quality**, and **community atmosphere.**

This discovery's impact was profound. It changed the industry's definition of "what makes a good model"—not just technical metrics, but product experience. A model with average technical metrics, if it has good product experience and high aesthetic quality, can also achieve enormous commercial success.

### 3.4 The divergence from Stable Diffusion

Midjourney and Stable Diffusion formed the two poles of the text-to-image domain:

- **Midjourney** took the productization route—closed-source, easy to use, high quality, pay-per-use. Users pay; the platform delivers aesthetic quality.
- **Stable Diffusion** took the democratization route—open-source, controllable, low-cost, requiring technical skill. Anyone can download, modify, fine-tune, and use commercially.

These were not competing—they served different user bases. Midjourney's users were ordinary users and designers who needed ease of use and aesthetic quality; Stable Diffusion's users were creators and developers who needed control and flexibility. Together, these two routes defined the AI image generation landscape after 2022.

---

## Commentary

Midjourney's contribution was transforming "AI-generated images" from a technical demonstration into an **aesthetic experience.**

Before Midjourney, text-to-image was the specialized domain of computer vision researchers; after Midjourney, anyone could generate artistically compelling images with a single sentence. The impact of this transformation was no less than DALL·E's impact on text-to-image—it turned a specialized capability into a mass tool, and an aesthetically refined one at that.

From a technical evolution perspective, Midjourney's route was "product first"—not pursuing the highest technical metrics, but pursuing the best user experience. David Holz's Leap Motion background profoundly influenced this choice: what he cared about was not how strong the model was, but how comfortable it was for users. This choice may have left Midjourney technically behind DALL·E 3 or Stable Diffusion on certain metrics, but it built a unique moat in user experience and aesthetic quality.

Midjourney's most profound impact may be this: it proved that in the AI era, **aesthetics** can become an independent competitive advantage. When everyone was pursuing larger models and higher benchmark scores, Midjourney created value through a different approach—making AI-generated images not just "usable" but "beautiful." This discovery changed the entire industry's definition of "what makes good AI."

---

*This entry was compiled by the Endfield Industrial Chronicle team: Zhuang Fangyi (chronicle lead author).*

---

[^1]: Ramesh et al., "Hierarchical Text-Conditional Image Generation with CLIP Latents", arXiv:2204.06125, 2022-04-06. https://arxiv.org/abs/2204.06125
[^2]: Saharia et al., "Photorealistic Text-to-Image Diffusion Models with Deep Language Understanding", NeurIPS 2022 / arXiv:2205.11487. https://arxiv.org/abs/2205.11487
[^3]: Rombach et al., "High-Resolution Image Synthesis with Latent Diffusion Models", CVPR 2022 / arXiv:2112.10752, 2021-12-20. https://arxiv.org/abs/2112.10752
[^4]: Midjourney official documentation. https://docs.midjourney.com/
[^5]: Midjourney version iteration information compiled from official documentation and community reports.
[^6]: Midjourney v4 release information compiled from official announcements and community discussions.
[^7]: Midjourney v5 release information and the "Pope puffer jacket" incident compiled from social media reports.
[^8]: Midjourney v6 release information compiled from official announcements and community discussions.
[^9]: Stability AI, "Stable Diffusion Public Release", 2022-08-22. https://stability.ai/news/stable-diffusion-public-release
[^10]: OpenAI Blog, "DALL·E 3", 2023-09-20. https://openai.com/index/dall-e-3/
