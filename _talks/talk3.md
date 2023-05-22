---
name: Linear Bandits with Hints and Queries
speakers:
  - Manish Purohit
categories:
  - Talk
# links:
  # - name: Recording
  #   icon: video
  #   absolute_url: https://media.ccc.de/
  # - name: Wikipedia
  #   absolute_url: https://en.wikipedia.org
---

In the classical online linear optimization problem, receiving a "hint" regarding the upcoming cost vector has been shown to lead to significantly improved regret guarantees. In the full-information setting, there are algorithms that can exploit such good hints to obtain regret that grows only logarithmically with the number of time steps, while at the same time guaranteeing worst-case robustness even when the hints are non-informative. Unfortunately, in the bandit setting, we show that such hints are not sufficient  to obtain better than $\tilde O(\sqrt{T})$ regret even if each hint is guaranteed to be well-correlated with the cost vector. In this talk, I'll present a new model of advice where the algorithm can actively query the upcoming cost function and design an algorithm that attains logarithmic regret in this model. Additionally, when the algorithm receives feedback regarding the quality of the hints, we also obtain optimal robustness guarantees.