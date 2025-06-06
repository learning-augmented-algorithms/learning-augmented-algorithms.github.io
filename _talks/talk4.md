---
name: Active, Noise-Tolerant, and Strategic Online Classification
speakers:
  - Hedyeh Beyhaghi
categories:
  - Talk
---

#### Talk Abstract

We study online classification in environments where data points come from strategic agents who may manipulate their features to obtain favorable outcomes. This framework models applications such as admissions or hiring, where individuals can strategically alter their inputs. Building on the classical Perceptron algorithm, we develop learning procedures that remain robust when the learner observes manipulated features rather than true ones.

Our earlier work shows that standard Perceptron updates can fail dramatically in this setting—oscillating indefinitely and incurring an unbounded number of mistakes. We propose modified algorithms with provable mistake bounds under both known and unknown linear manipulation costs. More recently, we extend these results to an active learning setting, where label queries are expensive and feedback may be noisy. We present an efficient algorithm that actively learns linear classifiers in the presence of strategic and noisy inputs, while preserving the exponential improvements in label complexity previously achieved in the non-strategic setting. Under distributional assumptions, the algorithm performs well despite both strategic behavior and adversarial noise.
