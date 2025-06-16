---
name: Scheduling with Uncertain Holding Costs and its Application to Content Moderation
speakers:
  - Thodoris Lykouris
categories:
  - Talk
---

#### Talk Abstract

Abstract: In content moderation for social media platforms, the cost of delaying the review of a content is proportional to its view trajectory, which fluctuates and is apriori unknown. Motivated by such uncertain holding costs, we consider a queueing model where job states evolve based on a Markov chain with state-dependent instantaneous holding costs. We demonstrate that in the presence of such uncertain holding costs, the two canonical algorithmic principles, instantaneous-cost ($$c\mu$$-rule) and expected remaining-cost ($$c\mu/\theta$$-rule), are suboptimal. By viewing each job as a Markovian ski-rental problem, we develop a new index-based algorithm, "Opportunity-adjusted Remaining Cost (OaRC)", that adjusts to the opportunity of serving jobs in the future when uncertainty partly resolves. We show that the regret of OaRC scales as $$\tilde{O}(L^{1.5}\sqrt{N})$$, where L is the maximum length of a job's holding cost trajectory and N is the system size. This regret bound shows that OaRC achieves asymptotic optimality when the system size N scales to infinity. Moreover, its regret is independent of the state-space size, which is a desirable property when job states contain contextual information. We corroborate our results with an extensive simulation study based on two holding cost patterns (online ads and user-generated content) that arise in content moderation for social media platforms. Our simulations based on synthetic and real datasets demonstrate that OaRC consistently outperforms existing practice, which is based on the two canonical algorithmic principles.

The talk is based on joint work with Wentao Weng (PhD student at MIT) as well as Caner Gocmen and Deeksha Sinha (collaborators from Meta Platforms). A preprint can be found here: https://arxiv.org/pdf/2505.21331.