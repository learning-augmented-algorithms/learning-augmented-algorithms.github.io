---
name: Beating Classical Streaming Barriers with Noisy Predictions
speakers:
  - Ali Vakilian
categories:
  - Keynote
hide: false
---

Classical streaming algorithms face a strong barrier for Max-Cut: obtaining any approximation better than $1/2$ requires large space. This talk shows how weak learned predictions can break this barrier. Starting with Max-Cut, I will describe how an oracle that predicts each vertex's optimal label with probability $1/2+\varepsilon$ yields a single-pass $(1/2+\Omega(\varepsilon^2))$-approximation using only $\mathrm{poly}(1/\varepsilon)$ space. I will then discuss how the same learning-augmented viewpoint extends to Boolean Max-CSPs, leading to near-optimal value estimation for Max-$2$CSPs, and more generally to Max-$k$CSPs, in both insertion-only and dynamic streams.