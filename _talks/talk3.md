---
name: Approximation Algorithms with Predictions
speakers:
  - Adam Polak
categories:
  - Talk
# links:
  # - name: Recording
  #   icon: video
  #   absolute_url: https://media.ccc.de/
  # - name: Wikipedia
  #   absolute_url: https://en.wikipedia.org
---

I will talk about utilizing predictions to improve over approximation guarantees of classic algorithms, without increasing the running time. I will cover prior results going in that direction, and then I will talk about our recent work in which we propose a generic method for a wide class of optimization problems that ask to select a feasible subset of input items of minimal (or maximal) total weight. This gives simple (near-)linear-time algorithms for, e.g., Vertex Cover, Steiner Tree, Minimum Weight Perfect Matching, Knapsack, and Maximum Clique. Our algorithms produce an optimal solution when provided with perfect predictions and their approximation ratio smoothly degrades with increasing prediction error. With small enough prediction error we achieve approximation guarantees that are beyond the reach without predictions in given time bounds, as exemplified by the NP-hardness and APX-hardness of many of the above problems. Although we show our approach to be optimal for this class of problems as a whole, there is a potential for exploiting specific structural properties of individual problems to obtain improved bounds; we demonstrate this on the Steiner Tree problem. I will conclude with an empirical evaluation of our approach. This is based on joint work with Antonios Antoniadis, Marek Eliáš, and Moritz Venzin.
