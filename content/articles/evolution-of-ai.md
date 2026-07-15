---
title: "Evolution of AI: A Walk Up the AI Ladder from Regression to Transformers"
description: "AI did not evolve because researchers got bored. Each era exists because the one before it hit a wall. A walk up the ladder from linear regression to transformers, tracing what broke at every rung and what fixed it."
category: "AI"
date: "2025-09-15"
coverImage: "evolution-of-ai.png"
keywords: ["Machine Learning", "Deep Learning", "Transformers", "Neural Networks", "AI History", "Attention", "Generative AI"]
---

Most explanations of AI history read like a timeline: regression, then trees, then neural networks, then transformers, each one newer and therefore better. That framing is useless. It tells you what happened but not why, and it leaves you with the impression that the field advances by fashion.

It does not. Every architecture in modern AI exists because the previous one hit a specific, identifiable wall. Deep learning did not replace feature engineering because it was trendy; it replaced it because handcrafting features for a million images is not a thing humans can do. Transformers did not replace recurrent networks because attention sounds elegant; they replaced them because recurrence cannot be parallelized and GPUs punish anything sequential.

This article walks up that ladder rung by rung. Each section answers the same two questions: what broke, and what fixed it. By the end, the shape of modern AI stops looking like a sequence of lucky ideas and starts looking like what it is, a chain of engineering responses to concrete failures.

<div style="margin:1.75rem 0;padding:1.5rem;border:1px solid color-mix(in srgb, #D1D1C7 12%, transparent);border-radius:0.75rem;background:color-mix(in srgb, #D1D1C7 3%, transparent);overflow-x:auto;">
  <div style="display:flex;flex-direction:column;gap:0.4rem;font-family:var(--font-mono),ui-monospace,monospace;min-width:18rem;">
    <div style="display:flex;align-items:center;gap:0.75rem;">
      <div style="flex:0 0 9.5rem;padding:0.6rem 0.75rem;border:1px solid color-mix(in srgb, #D1D1C7 20%, transparent);border-radius:0.5rem;text-align:center;background:color-mix(in srgb, #D1D1C7 6%, transparent);font-size:0.8125rem;font-weight:700;color:#D1D1C7;">Regression</div>
      <div style="color:#A29E9A;font-size:1rem;">&rarr;</div>
      <div style="font-size:0.8125rem;color:#A29E9A;">cannot express categories</div>
    </div>
    <div style="display:flex;align-items:center;gap:0.75rem;">
      <div style="flex:0 0 9.5rem;padding:0.6rem 0.75rem;border:1px solid color-mix(in srgb, #D1D1C7 20%, transparent);border-radius:0.5rem;text-align:center;background:color-mix(in srgb, #D1D1C7 6%, transparent);font-size:0.8125rem;font-weight:700;color:#D1D1C7;">Classifiers</div>
      <div style="color:#A29E9A;font-size:1rem;">&rarr;</div>
      <div style="font-size:0.8125rem;color:#A29E9A;">only as good as their inputs</div>
    </div>
    <div style="display:flex;align-items:center;gap:0.75rem;">
      <div style="flex:0 0 9.5rem;padding:0.6rem 0.75rem;border:1px solid color-mix(in srgb, #D1D1C7 20%, transparent);border-radius:0.5rem;text-align:center;background:color-mix(in srgb, #D1D1C7 6%, transparent);font-size:0.8125rem;font-weight:700;color:#D1D1C7;">Feature engineering</div>
      <div style="color:#A29E9A;font-size:1rem;">&rarr;</div>
      <div style="font-size:0.8125rem;color:#A29E9A;">does not scale, needs an expert</div>
    </div>
    <div style="display:flex;align-items:center;gap:0.75rem;">
      <div style="flex:0 0 9.5rem;padding:0.6rem 0.75rem;border:1px solid color-mix(in srgb, #D1D1C7 20%, transparent);border-radius:0.5rem;text-align:center;background:color-mix(in srgb, #D1D1C7 6%, transparent);font-size:0.8125rem;font-weight:700;color:#D1D1C7;">Ensembles</div>
      <div style="color:#A29E9A;font-size:1rem;">&rarr;</div>
      <div style="font-size:0.8125rem;color:#A29E9A;">helpless on raw pixels and audio</div>
    </div>
    <div style="display:flex;align-items:center;gap:0.75rem;">
      <div style="flex:0 0 9.5rem;padding:0.6rem 0.75rem;border:1px solid color-mix(in srgb, #D1D1C7 20%, transparent);border-radius:0.5rem;text-align:center;background:color-mix(in srgb, #D1D1C7 6%, transparent);font-size:0.8125rem;font-weight:700;color:#D1D1C7;">Deep networks</div>
      <div style="color:#A29E9A;font-size:1rem;">&rarr;</div>
      <div style="font-size:0.8125rem;color:#A29E9A;">ignore the structure of the data</div>
    </div>
    <div style="display:flex;align-items:center;gap:0.75rem;">
      <div style="flex:0 0 9.5rem;padding:0.6rem 0.75rem;border:1px solid color-mix(in srgb, #D1D1C7 20%, transparent);border-radius:0.5rem;text-align:center;background:color-mix(in srgb, #D1D1C7 6%, transparent);font-size:0.8125rem;font-weight:700;color:#D1D1C7;">CNNs and RNNs</div>
      <div style="color:#A29E9A;font-size:1rem;">&rarr;</div>
      <div style="font-size:0.8125rem;color:#A29E9A;">forget, and refuse to parallelize</div>
    </div>
    <div style="display:flex;align-items:center;gap:0.75rem;">
      <div style="flex:0 0 9.5rem;padding:0.6rem 0.75rem;border:1px solid color-mix(in srgb, #D1D1C7 35%, transparent);border-radius:0.5rem;text-align:center;background:color-mix(in srgb, #D1D1C7 12%, transparent);font-size:0.8125rem;font-weight:700;color:#D1D1C7;">Transformers</div>
      <div style="color:#A29E9A;font-size:1rem;">&rarr;</div>
      <div style="font-size:0.8125rem;color:#A29E9A;">quadratic cost, and a data ceiling</div>
    </div>
  </div>
</div>

## Rung 1: Regression, and the Grammar of Learning

The first question anyone asked a machine was the simplest one: given some inputs, predict a number. Linear regression answers it by drawing the best straight line through a cloud of points. Hours studied against exam score. Square footage against house price.

It looks trivial, and it is, but it quietly establishes the vocabulary that every model above it inherits.

**A loss function** measures how wrong you are. Mean squared error takes each prediction, subtracts the truth, squares the result so errors do not cancel out, and averages. Predict a house at 55 lakh when it sold for 50, and you have eaten a penalty of 25. Square the error and large mistakes hurt disproportionately, which is a deliberate choice, not an accident of algebra.

**Optimization** is the process of making that number smaller. You can solve it in closed form with least squares, or you can walk downhill. Gradient descent is the walk: stand on the error surface, feel which direction slopes down, take a step, repeat. Blindfolded on a mountain, feeling for the valley.

**Overfitting** is the failure mode that never goes away. A model that is too simple misses the pattern. A model that is too flexible memorizes the noise, learning not "bigger houses cost more" but "that one two-bedroom with the swimming pool sold for a fortune." It scores beautifully on data it has seen and falls apart on data it has not.

**Regularization** is the correction. Add a penalty for large weights and the model is discouraged from contorting itself around outliers. L1 pushes weights to exactly zero, deleting features outright. L2 shrinks them all a little without eliminating any. Throwing out the junk versus packing it into smaller boxes.

Every one of these ideas survives intact all the way up to a trillion-parameter language model. They are the grammar.

### What broke

Regression predicts a number. An enormous share of real problems do not want a number, they want a decision. Spam or not spam. Malignant or benign. Fraud or legitimate. You can force a line through those labels, but a line does not know it is supposed to stop at zero and one, and it will happily predict that an email is 1.4 spam.

## Rung 2: Classification, and the Move to Decision Boundaries

The fix is to predict a probability instead of a value, then threshold it.

Logistic regression does exactly that. It computes the same weighted sum as linear regression and then squashes it through a sigmoid, which maps any real number into the interval between zero and one. Above 0.5, call it positive. Below, negative. The threshold is a business decision disguised as a mathematical one, which is why you move it when false positives cost more than false negatives.

Naive Bayes gets there differently, applying Bayes' theorem and assuming that features are independent given the class. The assumption is almost always false. It works anyway, which is one of the more instructive embarrassments in machine learning.

The deeper shift is conceptual. Statistics asks: what is the probability this patient survives? Machine learning asks a harder question: where do I draw the line so that I can classify the *next* patient, the one I have not seen yet? That act of drawing a boundary that generalizes is the learning part.

Different models draw different borders. Logistic regression draws a straight one, a hyperplane in higher dimensions. Naive Bayes draws curves shaped by the underlying distributions. Decision trees carve out rectangles. Neural networks draw whatever they like. Each is a cartographer surveying the same noisy terrain and committing to a map.

### What broke

Every one of these models is a function of its inputs, and it can only be as good as those inputs. Feed logistic regression a raw email as a string of characters and it has nothing to work with. Feed it the count of the word "free," the ratio of capital letters, and the number of exclamation marks, and it becomes a competent spam filter.

The model was never the bottleneck. The representation was.

## Rung 3: Feature Engineering, and the Human in the Loop

So for roughly two decades, the actual job of machine learning was inventing those representations by hand.

For text, that meant bag of words, TF-IDF scores that weight a term by how rare it is across the corpus, hand-built flags for suspicious tokens. For images, it meant SIFT and HOG, clever hand-designed operators that measured edges, gradients, and textures because nobody knew how else to turn a grid of pixels into something a classifier could chew on. For business data, it meant aggregations: average monthly spend, days since last purchase, fraction of income going to rent.

If raw data is ore, feature engineering is the smelting. You strip the slag, refine the chunks, and hand clean ingots to the algorithm, which forges them into predictions.

Three things followed from this, and all three still matter.

First, features decided everything. A logistic regression with brilliant features routinely beat a sophisticated model with mediocre ones. Second, the craft built intuition, because you cannot design a good feature without understanding what your data can and cannot say. Third, it forced reproducibility. Once your model depends on a chain of transformations, that chain has to run identically at training time and at inference time, and every feature store and data pipeline in existence descends from that requirement.

### What broke

It does not scale, and it does not transfer.

Handcrafted features work when a domain expert can articulate what matters. Nobody can articulate what makes a photograph contain a cat. There is no feature you can write down, no ratio, no threshold, no gradient histogram, that captures "cat" across every pose, lighting condition, breed, and occlusion. The moment the problem is perception rather than tabulation, the human in the loop becomes the ceiling.

## Rung 4: Ensembles, and the Wisdom of Many Weak Models

Before that ceiling forced a rethink, one more idea squeezed remarkable performance out of the handcrafted-feature world, and it is the reason a twenty-year-old technique still wins production bake-offs today.

A single decision tree is a flowchart. Is age above 50? Is income below 40k? Keep splitting until you reach a leaf, then predict. Trees are interpretable and handle nonlinearity for free, but a lone tree is fragile. Shift a few training rows and you get a completely different tree.

The insight is that you do not have to trust one tree. You can build many and combine them, and there are two ways to do it.

**Bagging** trains each tree on a bootstrap sample of the data and averages the predictions. Random Forests add a twist, letting each split consider only a random subset of features, which forces the trees to disagree. Diversity is the point: individual errors are random, and random errors cancel when you average them. It is a parliament, and the majority vote is more reliable than any single member.

**Boosting** is sequential instead. Train a weak tree. Look at what it got wrong. Train the next tree specifically to fix those mistakes. Repeat a few hundred times. XGBoost, LightGBM, and CatBoost are heavily optimized versions of this idea, and they are not a mentoring metaphor for nothing, each tutor is assigned exactly the material the student has not yet learned.

The two attack different problems. Bagging reduces variance, the model's sensitivity to which particular rows it happened to see. Boosting reduces bias, the model's inability to capture the pattern at all. Together they cover the whole error budget, which is why for years these methods simply owned Kaggle.

And they still own tabular data. Give a practitioner a spreadsheet of customers, transactions, or medical records in 2025 and gradient boosting is very often the right answer, not a neural network. This is the rung most people skip on their way up the ladder, and skipping it costs them.

### What broke

Ensembles are still consuming features that a human designed. Point a Random Forest at a raw 224x224 image and you are asking it to find structure across 150,528 independent pixel columns with no notion that pixel 4,001 sits directly beneath pixel 3,777. It cannot see the grid. Nothing in the model knows that the image has geometry at all.

The ceiling from Rung 3 was never lifted. It was just decorated.

## Rung 5: Neural Networks, and Learning the Features Themselves

The idea that fixes this is old, and it failed twice before it worked.

The perceptron arrived in the 1950s: multiply inputs by weights, sum them, apply a threshold. It learned linearly separable patterns and nothing else. In 1969, Minsky and Papert showed it could not learn XOR, a function so simple you can write its truth table on a napkin, and the field's funding evaporated for a decade.

The repair was known by the 1980s. Stack layers, put a nonlinear activation between them, and propagate the error backwards through the stack to work out how much each weight contributed to the mistake. Backpropagation makes multi-layer networks trainable, and a multi-layer network can carve nonlinear boundaries, XOR included.

But it still did not take off, because the theory was fine and the ingredients were missing. Deep networks need enormous data and enormous compute, and in 1990 there was neither.

Both arrived in the late 2000s. The internet produced labeled data at a scale nobody had planned for, ImageNet chief among it. GPUs, built to render triangles, turned out to be almost perfectly shaped for the dense matrix multiplications a neural network spends its life doing.

In 2012, AlexNet won ImageNet by a margin that was not competitive, it was humiliating, and the argument ended.

Here is the part that matters, and it is the reason this rung is a genuine break rather than an increment:

```python
# Feature engineering: a human decides what matters.
features = extract_hog(image)          # someone designed HOG
prediction = classifier.predict(features)

# Deep learning: the network decides what matters.
prediction = network(image)            # the layers learn their own HOG
```

A deep network trained on images learns edge detectors in its first layer without being told that edges exist. Middle layers compose those edges into corners and textures. Deeper layers assemble those into eyes, wheels, faces. Nobody wrote any of it down. The hierarchy fell out of the data and the objective.

This is representation learning, and it is what finally lifted the ceiling that had been sitting on the field since Rung 3. Old machine learning needed an instruction manual. Deep learning writes its own.

### What broke

A plain stack of fully connected layers treats its input as a flat, unordered vector. Feed it an image and it has no idea that neighboring pixels are related, or that a cat shifted three pixels to the right is still the same cat. It has to learn those facts from scratch, from data, burning parameters and examples to rediscover geometry that we already knew about before training started.

The same is true of text. A flat network sees a sentence as a bag of numbers, with no notion that order carries meaning.

The network is learning the structure of the data instead of being given it, and that is an expensive way to spend capacity.

## Rung 6: CNNs and RNNs, Building the Structure In

The fix is to bake the structure into the architecture. If you know something about the shape of your data, do not make the model rediscover it. Constrain the model so it cannot help but exploit it.

**Convolutional networks** encode two facts about images. Locality: a small filter, say 3x3, slides across the image and only ever looks at a neighborhood, because meaningful visual structure is local. Translation invariance: the same filter is applied everywhere, so an edge detector that works in the top left works in the bottom right for free. The weights are shared, which slashes the parameter count and means the model cannot possibly fail to generalize across positions. It is not encouraged to be translation invariant. It is *unable* not to be.

**Recurrent networks** encode one fact about sequences: the past matters. At each timestep the network takes the current input plus a hidden state summarizing everything before it, and produces a new hidden state. Memory, carried forward, one step at a time.

Vanilla RNNs had a well-known defect: gradients flowing back through many timesteps either vanish to nothing or explode to infinity, so the network cannot learn dependencies more than a handful of steps long. LSTMs fixed it with gates, small learned switches deciding what to keep, what to overwrite, and what to forget. Suddenly the notebook could underline the important things and cross out the rest, and speech recognition and machine translation became tractable.

This rung teaches the lesson that generalizes best out of the entire ladder: **match the model's inductive bias to the structure of the data and you get a leap in performance.** Not a nudge. A leap. CNNs did not beat fully connected networks on images by being bigger. They beat them by being *shaped correctly*.

### What broke

Two things, and the second one is fatal.

The first is memory. Even an LSTM struggles to connect information across hundreds of timesteps, because the signal has to survive being squeezed through a fixed-size hidden state at every single step, like a message passed down a very long line of people.

The second is that recurrence is inherently sequential. To compute the hidden state at step 100, you must first compute step 99, which requires step 98, all the way down. You cannot parallelize a dependency chain. And in an era where progress was being bought with GPUs, an architecture that refuses to use them in parallel is an architecture that has run out of road, no matter how elegant it is.

## Rung 7: Attention, and the Removal of the Bottleneck

Consider the sentence: *"The trophy doesn't fit in the suitcase because it is too small."*

To resolve *it*, you have to look back at both *trophy* and *suitcase* and work out which one makes sense. An RNN has to carry that information forward through every intervening word, compressed into a fixed-size state, hoping it survives.

Attention asks the obvious question: why compress? Why not just let *it* look directly at every other word in the sentence and decide, for itself, which ones matter?

That is the whole idea. Each token compares itself against every other token, producing a similarity score, and those scores become weights for combining information.

```python
# Every token attends to every other token, in one shot.
scores  = Q @ K.T / sqrt(d_k)     # how much should i care about you?
weights = softmax(scores)         # normalize into a distribution
output  = weights @ V             # a weighted blend of everything
```

Three lines, and they dissolve both of the previous rung's problems at once.

**Long-range dependency, gone.** The path between any two positions is now length one. There is no intermediate state to squeeze through and nothing to forget, because nothing is being carried. *It* looks straight at *suitcase*, no matter how many words sit between them.

**Sequential dependency, gone.** Every score in that matrix can be computed independently of every other. The whole sequence processes in parallel, which means the architecture finally *wants* what the hardware is offering. This is not an incidental benefit. It is the reason transformers won.

The rest of the architecture is supporting cast. Multi-head attention runs several attention operations in parallel, so one head can track subject-verb agreement while another follows coreference and a third watches for negation. Positional encodings are needed because pure attention is order-blind, and *dog chased cat* had better not equal *cat chased dog*. Residual connections and layer normalization are what make it possible to stack the thing a hundred layers deep without training collapsing.

And then something unexpected happened. Because attention makes no assumption about the data being text, it turned out to work on images, audio, protein sequences, and game states. The specialized architects of Rung 6 were replaced by a general one.

### What broke, and what has not been fixed

Attention costs quadratic time and memory in sequence length, because every token attends to every other token. Double the context and you quadruple the cost. Long-context work, sparse attention, linear attention, and state-space models are all attempts to buy back that cost, and none of them has cleanly won.

The second limit is stranger. Transformers scale beautifully, which means the binding constraint has moved out of the architecture entirely and into data, compute, and energy. That is not a mathematical wall. It is an economic one, and we have not yet found out where it is.

## What the Ladder Bought: Foundation Models

The consequence of an architecture that scales is a strategy that was never viable before.

For decades, each task got its own model, trained from scratch on its own labeled dataset. Spam classifier here, sentiment model there, nothing shared. Labels were expensive, so every project started at zero.

Transformers plus scale made a different bargain possible: pretrain one very large model on a mountain of *unlabeled* data by asking it to predict missing words, then adapt it to specific tasks with a comparatively tiny amount of labeled data. Grammar, facts, and a serviceable amount of reasoning fall out of next-token prediction as a side effect. Fine-tuning just points that general capability at a specific job.

Train the general athlete first. Teach them tennis second.

This is the shift that made GPT, BERT, LLaMA, CLIP, and Whisper possible, and it is why the modern default is no longer "train a model" but "start from one."

It also inverted the economics. Capability is now concentrated in whoever can afford the pretraining run, and everyone else builds on top. That is a very different industry than the one that existed when the answer to every problem was to open scikit-learn.

## The Generative Turn

The last thing worth noting is that this same ladder quietly changed what AI is *for*.

Everything from Rung 1 through Rung 6 was discriminative. Given input, predict a label. The model observed.

Generative models learn the distribution of the data itself, which means they can sample from it and produce things that never existed. VAEs compress data into a continuous latent space you can wander around in, interpolating a 3 into a 5. GANs pit a forger against a detective until the forgeries are indistinguishable. Autoregressive models write one token at a time, each conditioned on everything already written, which is exactly what a language model does. Diffusion models start from pure noise and denoise their way to an image, an artist who begins with a canvas of random paint and carefully removes everything that is not the picture.

The failure modes changed too, and they are worth naming plainly. A discriminative model that fails gives you a wrong label. A generative model that fails gives you a fluent, confident, entirely fabricated answer, and that is a much harder thing to catch. Hallucination, prompt sensitivity, memorized training data leaking back out, inherited bias: none of these had analogues on the lower rungs, and evaluation has not caught up. Accuracy was a sufficient metric when there was a right answer. There is no accuracy score for an essay.

## What to Actually Take From This

**The ladder is not a hierarchy of quality.** Every rung is still the correct answer to some problem. Tabular data with 10,000 rows does not want a transformer, it wants XGBoost, and the practitioner who reaches for a neural network anyway is not being sophisticated, they are being fashionable. Knowing where to stand on the ladder is worth more than being able to reach the top of it.

**Architecture is a response to structure.** CNNs exist because images have geometry. RNNs exist because sequences have order. Attention exists because relevance is not a function of distance. When you meet a new problem, the useful question is not "which model is best" but "what is the structure of this data, and what architecture already assumes it."

**The grammar never changes.** Loss, optimization, overfitting, regularization. You learn them on a straight line through a scatter plot, and they are still the four things you are fighting when you fine-tune a foundation model. Understand why a linear model fails before you reach for something that can hide its failures behind a billion parameters.

**Every ceiling was invisible until someone hit it.** Nobody in 2010 was saying that handcrafted features were the bottleneck. It was just how the job worked. The current constraints, quadratic attention, data exhaustion, energy, look permanent from here in exactly the same way. They are not. That is the one prediction the history reliably supports.

## References

- [Minsky & Papert: Perceptrons](https://mitpress.mit.edu/9780262534772/perceptrons/)
- [Rumelhart, Hinton & Williams: Learning representations by back-propagating errors](https://www.nature.com/articles/323533a0)
- [Krizhevsky, Sutskever & Hinton: ImageNet Classification with Deep CNNs (AlexNet)](https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html)
- [Hochreiter & Schmidhuber: Long Short-Term Memory](https://www.bioinf.jku.at/publications/older/2604.pdf)
- [Vaswani et al.: Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- [Chen & Guestrin: XGBoost, A Scalable Tree Boosting System](https://arxiv.org/abs/1603.02754)
- [Bommasani et al.: On the Opportunities and Risks of Foundation Models](https://arxiv.org/abs/2108.07258)
- [Ho, Jain & Abbeel: Denoising Diffusion Probabilistic Models](https://arxiv.org/abs/2006.11239)
