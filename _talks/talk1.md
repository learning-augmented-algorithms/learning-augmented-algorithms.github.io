---
name: Machine learning for algorithm design with provable guarantees
speakers:
  - Maria-Florina Balcan
categories:
  - Talk
---

The classic analysis framework for algorithm design is centered around worst-case guarantees. While highly desirable when achievable, these guarantees are often too weak for many algorithmic problems. To address this issue, in recent years, machine learning components have been brought into algorithm design. A major question is what provable guarantees do these learning augmented algorithmic techniques enjoy. In this talk, I will describe general analysis techniques we developed for two important related settings.

For the so-called data-driven algorithm design, where the goal is to learn an algorithm that can solve problem instances coming from a given domain based on training instances from the same domain, we describe general tools for analyzing generalization and no-regret of the learned algorithms.
For the related field of algorithms with predictions, where algorithms are designed to take advantage of possibly imperfect predictions of some aspect of the problem, we describe how to learn the predictions themselves, leading to end-to end formal guarantees.