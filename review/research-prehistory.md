# 志·前史 素材搜集（1958–2017）

> 调研员：迷迭香 | 产出日期：2026-06-20
> 目的：为赫默撰写《志·前史》提供素材弹药，覆盖"通往 Transformer 之路上"的关键技术节点。

---

## 1. 感知机 Perceptron（1958）

- **年份**：1958（论文发表），硬件 Mark I Perceptron 于 1960 年 6 月 23 日首次公开演示
- **作者**：Frank Rosenblatt
- **机构**：Cornell Aeronautical Laboratory（康奈尔航空实验室）
- **技术贡献**：第一个人工神经网络算法——感知机是一个二分类线性分类器，通过权重与特征向量的线性组合进行预测，是"神经网络"概念的物理实现起点。
- **对 Transformer/大模型的影响**：感知机确立了"人工神经元 + 权重调整"的基本范式。虽然单层感知机无法解决异或问题（Minsky & Papert 1969 年的批评导致了第一次"AI 寒冬"），但这个范式直接催生了后续对多层网络的需求——最终导向反向传播。
- **出处**：
  - https://en.wikipedia.org/wiki/Perceptron
  - Rosenblatt, F. (1958). "The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain." *Psychological Review*, 65(6), 386–408.

---

## 2. 反向传播 Backpropagation（1986）

- **年份**：1986
- **作者**：David Rumelhart, Geoffrey Hinton, Ronald Williams
- **机构**：UC San Diego（Rumelhart）, Carnegie Mellon / UC San Diego（Hinton）, Northeastern University（Williams）
- **技术贡献**：将链式法则高效应用于神经网络的梯度计算——从输出层反向逐层传播导数，避免冗余计算。这是训练多层网络（即"深度"网络）的关键算法突破。
- **对 Transformer/大模型的影响**：没有反向传播，就无法训练多层网络。现代所有深度学习——包括 Transformer、GPT、BERT——的参数更新都依赖反向传播（或其变体如自动微分）。它是整个深度学习基础设施的"引擎"。
- **出处**：
  - https://en.wikipedia.org/wiki/Backpropagation
  - Rumelhart, D. E., Hinton, G. E., & Williams, R. J. (1986). "Learning representations by back-propagating errors." *Nature*, 323(6088), 533–536.

---

## 3. LeNet-5（1998）

- **年份**：1998（LeNet 系列从 1988 年开始，LeNet-5 是最终版）
- **作者**：Yann LeCun, Léon Bottou, Yoshua Bengio, Patrick Haffner
- **机构**：AT&T Bell Labs
- **技术贡献**：第一个成功的卷积神经网络（CNN）实际应用——用于手写数字识别（支票/邮政编码），在 ATM 系统中每天处理数百万张支票。LeNet-5 确立了 CNN 的基本架构模式：卷积层 → 池化层 → 全连接层。
- **对 Transformer/大模型的影响**：(1) 证明了神经网络可以在真实工业场景中大规模部署；(2) 卷积操作的"局部感受野 + 权重共享"思想影响了后续的特征提取范式；(3) 2012 年 AlexNet 的成功直接建立在 LeNet 的架构思想之上——只是更大、更深、用了 GPU。
- **出处**：
  - https://en.wikipedia.org/wiki/LeNet
  - LeCun, Y., Bottou, L., Bengio, Y., & Haffner, P. (1998). "Gradient-based learning applied to document recognition." *Proceedings of the IEEE*, 86(11), 2278–2324.

---

## 4. LSTM（1997）

- **年份**：1997（原始论文），2000 年加入遗忘门（forget gate）
- **作者**：Sepp Hochreiter, Jürgen Schmidhuber
- **机构**：TU Munich（Hochreiter）, IDSIA（Schmidhuber）
- **技术贡献**：长短期记忆网络——通过引入"门控机制"（输入门、遗忘门、输出门）解决了传统 RNN 的梯度消失问题，使得网络能够学习长期依赖关系。LSTM 能在数千个时间步上保持记忆。
- **对 Transformer/大模型的影响**：LSTM 是 Transformer 之前序列建模的主力架构。(1) 2014 年的 Seq2Seq 模型直接使用 LSTM 作为编码器和解码器；(2) 2016 年 Google 翻译全面切换到基于 LSTM 的神经机器翻译（GNMT）；(3) Transformer 的自注意力机制正是为了解决 LSTM 的并行化困难和长距离依赖问题而设计的——LSTM 的局限性直接催生了 Transformer。
- **出处**：
  - https://en.wikipedia.org/wiki/Long_short-term_memory
  - Hochreiter, S., & Schmidhuber, J. (1997). "Long Short-Term Memory." *Neural Computation*, 9(8), 1735–1780.

---

## 5. Word2Vec（2013）

- **年份**：2013（论文发表于 NIPS 2013）
- **作者**：Tomas Mikolov, Kai Chen, Greg Corrado, Ilya Sutskever, Jeff Dean
- **机构**：Google
- **技术贡献**：将词映射为稠密向量（word embeddings），使语义相似的词在向量空间中距离接近。两种架构：CBOW（上下文预测中心词）和 Skip-gram（中心词预测上下文）。"king - man + woman = queen" 成为经典类比示例。
- **对 Transformer/大模型的影响**：(1) 确立了"分布式表示"（distributed representation）的范式——用稠密向量而非稀疏 one-hot 编码表示语义单元；(2) Transformer 的 token embedding 层直接继承了这一思想；(3) Mikolov 后来将类似思路用于 Seq2Seq 的翻译任务；(4) Word2Vec 的大规模无监督预训练 + 下游微调的范式，是后来 BERT/GPT 预训练范式的思想前身。
- **出处**：
  - https://en.wikipedia.org/wiki/Word2vec
  - Mikolov, T., Chen, K., Corrado, G., & Dean, J. (2013). "Efficient Estimation of Word Representations in Vector Space." *arXiv:1301.3781*.
  - Mikolov, T., Sutskever, I., Chen, K., Corrado, G., & Dean, J. (2013). "Distributed Representations of Words and Phrases and their Compositionality." *NIPS 2013*.

---

## 6. AlexNet（2012）

- **年份**：2012（ImageNet 竞赛 2012 年 9 月 30 日提交）
- **作者**：Alex Krizhevsky, Ilya Sutskever, Geoffrey Hinton
- **机构**：University of Toronto
- **技术贡献**：在 ImageNet 大规模视觉识别挑战赛中以 15.3% 的 top-5 错误率夺冠，比第二名低 10.8 个百分点。6000 万参数、65 万神经元的深度 CNN，首次大规模使用 GPU 训练、ReLU 激活函数和 Dropout 正则化。
- **对 Transformer/大模型的影响**：(1) 这是深度学习的"Big Bang"时刻——证明了深度网络 + 大数据 + GPU 计算的三要素组合可以大幅超越传统方法，引发整个学术界和工业界的范式转移；(2) 确立了 GPU 作为深度学习训练核心硬件的地位（后来的 A100/H100 都沿着这条路）；(3) 深度（depth）至关重要的结论直接推动了后续更深层次网络（VGG → GoogLeNet → ResNet）的发展。
- **出处**：
  - https://en.wikipedia.org/wiki/AlexNet
  - Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). "ImageNet Classification with Deep Convolutional Neural Networks." *NIPS 2012*.

---

## 7. GAN 生成对抗网络（2014）

- **年份**：2014（论文发表于 NeurIPS 2014）
- **作者**：Ian Goodfellow, Jean Pouget-Abadie, Mehdi Mirza, Bing Xu, David Warde-Farley, Sherjil Ozair, Aaron Courville, Yoshua Bengio
- **机构**：Université de Montréal
- **技术贡献**：提出生成对抗框架——两个神经网络（生成器 vs 判别器）通过零和博弈进行训练：生成器学习生成以假乱真的数据，判别器学习区分真假。这是一种无监督/半监督学习的突破性范式。
- **对 Transformer/大模型的影响**：(1) GAN 开创了"生成式 AI"的概念——AI 不只是分类/判别，还可以创造；(2) GAN 推动了对生成模型的研究热潮，包括后来的 VAE、扩散模型、以及 LLM 的生成式预训练；(3) GAN 的对抗训练思想影响了 RLHF（人类反馈强化学习）中的奖励模型设计；(4) Deepfake 技术直接源于 GAN，引发了 AI 伦理讨论的先声。
- **出处**：
  - https://en.wikipedia.org/wiki/Generative_adversarial_network
  - Goodfellow, I. et al. (2014). "Generative Adversarial Nets." *NeurIPS 2014*.

---

## 8. Sequence-to-Sequence（2014）

- **年份**：2014
- **作者**：Ilya Sutskever, Oriol Vinyals, Quoc V. Le
- **机构**：Google Brain
- **技术贡献**：提出编码器-解码器（Encoder-Decoder）架构用于序列到序列的转换——编码器将输入序列压缩为固定长度向量，解码器从该向量生成输出序列。原始实现中编码器和解码器均为 LSTM。该框架被应用于机器翻译、图像描述、对话系统等。
- **对 Transformer/大模型的影响**：(1) Seq2Seq 是 Transformer 架构的直接前身——Transformer 的编码器-解码器结构完全继承了这一框架；(2) Seq2Seq 的"瓶颈问题"（固定长度向量丢失长序列信息）直接催生了注意力机制的发明；(3) 2016 年 Google 翻译全面切换到基于 Seq2Seq 的神经机器翻译（GNMT），标志着工业级 NLP 的范式转移。
- **出处**：
  - https://en.wikipedia.org/wiki/Seq2seq
  - Sutskever, I., Vinyals, O., & Le, Q. V. (2014). "Sequence to Sequence Learning with Neural Networks." *NeurIPS 2014*.
  - Cho, K. et al. (2014). "Learning Phrase Representations using RNN Encoder-Decoder for Statistical Machine Translation." *arXiv:1406.1078*.

---

## 9. Attention 机制（2014）

- **年份**：2014
- **作者**：Dzmitry Bahdanau, KyungHyun Cho, Yoshua Bengio
- **机构**：Université de Montréal / Jacobs University
- **技术贡献**：在 Seq2Seq 框架中引入注意力机制——解码器不再只依赖固定长度的编码向量，而是可以"注意"输入序列的不同部分，动态计算加权上下文向量。论文标题直译："通过联合学习对齐和翻译来实现神经机器翻译"。他们称自己的模型为 RNNsearch。
- **对 Transformer/大模型的影响**：这是通往 Transformer 的**最关键一步**。(1) 注意力机制解决了 Seq2Seq 的瓶颈问题，使模型能处理长序列；(2) 2017 年的 "Attention Is All You Need" 论文直接将注意力机制提升为唯一的核心机制——去掉了 RNN/LSTM，只用自注意力，这就是 Transformer；(3) 注意力权重的可解释性（可以可视化"模型在看哪里"）成为后续 XAI 研究的基础。
- **出处**：
  - https://en.wikipedia.org/wiki/Attention_(machine_learning)
  - Bahdanau, D., Cho, K., & Bengio, Y. (2014). "Neural Machine Translation by Jointly Learning to Align and Translate." *arXiv:1409.0473*.

---

## 10. ResNet 残差网络（2015）

- **年份**：2015（ImageNet 2015 竞赛夺冠）
- **作者**：Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun
- **机构**：Microsoft Research
- **技术贡献**：提出残差连接（residual connection）——在网络中添加跳跃连接（skip connection），使层的输出为 F(x) + x 而非 F(x)。这使得训练数百甚至上千层的网络成为可能，解决了深度网络的退化问题（不是梯度消失，而是更深的网络反而性能更差的问题）。
- **对 Transformer/大模型的影响**：残差连接是现代 Transformer 架构的**标准组件**。(1) Transformer 的每一层（无论是编码器还是解码器）都包含残差连接 + 层归一化（Layer Normalization），即 "x + SubLayer(x)" 的模式；(2) GPT、BERT、以及所有后续大模型都内置了残差连接；(3) 没有残差连接，就无法训练数十亿参数的大模型——它是深度可扩展性的关键技术保障。
- **出处**：
  - https://en.wikipedia.org/wiki/Residual_neural_network
  - He, K., Zhang, X., Ren, S., & Sun, J. (2015). "Deep Residual Learning for Image Recognition." *arXiv:1512.03385*.

---

## 11. AlphaGo（2016）

- **年份**：2016 年 3 月（对弈李世石），2015 年 10 月（首次击败职业棋手樊麾）
- **作者/团队**：David Silver, Aja Huang 等
- **机构**：DeepMind（Google 子公司）
- **技术贡献**：AI 首次在完整 19×19 棋盘上无让子击败围棋世界冠军（9 段职业棋手李世石，比分 4:1）。核心技术：蒙特卡洛树搜索（MCTS）+ 深度卷积神经网络（策略网络 + 价值网络）。2017 年的 AlphaGo Zero 更进一步——完全自我对弈训练，无需人类棋谱，以 100:0 击败原版 AlphaGo。
- **对 Transformer/大模型的影响**：(1) AlphaGo 证明了深度学习 + 强化学习 + 大规模计算可以在被认为"机器不可能赢"的复杂任务中超越人类，直接改变了公众和政策制定者对 AI 能力的认知；(2) DeepMind 后续的 AlphaFold（蛋白质折叠）使用了类似的技术路线，证明了这套方法论的通用性；(3) AlphaGo Zero 的"自我对弈"思想影响了后续的 RLHF 和 Constitutional AI 等对齐方法；(4) 围棋搜索树中的"注意力"思想（选择性地探索高价值分支）与 Transformer 的注意力机制有概念层面的呼应。
- **出处**：
  - https://en.wikipedia.org/wiki/AlphaGo
  - Silver, D. et al. (2016). "Mastering the game of Go with deep neural networks and tree search." *Nature*, 529(7587), 484–489.

---

## 节点间的叙事线索

```
感知机 (1958)
  ↓ 无法解决异或问题 → "AI 寒冬"
反向传播 (1986)
  ↓ 使多层网络可训练
LeNet-5 (1998) ← CNN 架构先驱
  ↓ 但受限于算力和数据
[沉寂期 ~2006–2011]
  ↓ GPU 算力 + 大数据
AlexNet (2012) ← "深度学习 Big Bang"
  ↓ 深度学习热潮
LSTM (1997, 但 2012 后大规模应用) ← 序列建模主力
  ↓ 
Word2Vec (2013) ← 分布式表示范式
  ↓
GAN (2014) ← 生成式 AI 开端
Seq2Seq (2014) ← 编码器-解码器架构
  ↓ 瓶颈问题
Attention (2014) ← 最关键一步
  ↓
ResNet (2015) ← 残差连接，深度可扩展性
  ↓
AlphaGo (2016) ← AI 能力的公众认知转折点
  ↓
[Transformer (2017)] ← "Attention Is All You Need"
```

---

## 可信度评估

| 节点 | 可信度 | 理由 |
|------|--------|------|
| 感知机 | 高 | 维基百科 + 原始论文，事实无争议 |
| 反向传播 | 高 | 维基百科 + Nature 论文，历史事实清晰 |
| LeNet-5 | 高 | 维基百科 + IEEE 论文，Bell Labs 文献完备 |
| LSTM | 高 | 维基百科 + Neural Computation 论文 |
| Word2Vec | 高 | 维基百科 + arXiv/NIPS 论文，Google 公开资料 |
| AlexNet | 高 | 维基百科 + NIPS 论文，ImageNet 竞赛记录公开 |
| GAN | 高 | 维基百科 + NeurIPS 论文 |
| Seq2Seq | 高 | 维基百科 + NeurIPS 论文，Google Brain 公开资料 |
| Attention | 高 | 维基百科 + arXiv 论文，历史脉络清晰 |
| ResNet | 高 | 维基百科 + arXiv/CVPR 论文 |
| AlphaGo | 高 | 维基百科 + Nature 论文，赛事记录公开 |
