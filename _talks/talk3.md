---
name: Learning-Augmented Algorithms for Efficient LLM Systems
speakers:
  - Rana Shahout
categories:
  - Keynote
hide: false
---

Large Language Models (LLMs) have transformed what machines can do and how systems are designed to serve them. These models are both computationally and memory demanding, revealing the limits of traditional optimization methods that once sufficed for conventional systems. A central challenge in building LLM systems is improving system metrics while ensuring response quality.

This talk presents learning-augmented approaches for reducing latency in LLM systems to support interactive applications, from scheduling algorithm design to deployment. It introduces scheduling frameworks that use lightweight predictions of request behavior to augment runtime decision making for prioritization and memory management across two core settings: standalone LLM inference and API-augmented LLMs that interact with external tools. Across both settings, prediction-guided scheduling delivers substantial latency reductions while remaining practical for deployment.