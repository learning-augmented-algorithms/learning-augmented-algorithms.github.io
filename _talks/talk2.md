---
name: Online Virtual Machine Allocation with Predictions
speakers:
  - Konstantina Mellou
categories:
  - Talk
---

#### Talk Abstract

In this talk, we show how predictions can help with a core challenge in cloud computing – optimizing Virtual Machine allocation – both theoretically and in practice for Microsoft Azure. Virtual Machine (VM) requests need to be assigned to physical machines in a way that minimizes resource fragmentation and efficiently utilizes the available machines. This problem can be modeled as a dynamic version of the bin packing problem where each item (VM) has both a size (e.g., CPU requirement) and lifetime (the time duration spent in the system). A common goal here is minimizing the total usage time of the bins (physical machines). Motivated by advances in Machine Learning that provide good estimates of workload characteristics, we study the effect of this extra information on the allocation quality. Theoretically, we show that the competitive factor can be dramatically improved; in some cases, we achieve constant competitiveness, or even a competitive factor that approaches 1. We then show how predictions are currently used in Microsoft Azure to improve the Virtual Machine allocation.