# Signal Processing

The goal of this week is to be able to identify and analyze frequency components in a signal; this is referred to as _spectral analysis._ The following chapters are told in a story-like sequence that will guide you through this process naturally.

Practically speaking, our objective is to understand and work with signals that have been measured and recorded in a discrete way (i.e., understand and use a data set); in other words, in practice we generally work with recordings in the _time domain._ Since it can be difficult to interpret such a signal, we will explore techniques for converting and evaluating this record in the _frequency domain._ The story first begins with a theoretical perspective (e.g., continuous functions), after which we consider the discrete case.

```{admonition} MUDE Exam Information
:class: tip, dropdown

Proofs and derivations are provided in this textbook, but will not be asked in exam; there is no need to memorize equations, which will be provided on a formula sheet as needed. Instead, you are expected to apply the theory to actual problems (problem solving), and interpret the results (as obtained with a Python Notebook). Although all of the videos are needed to understand the complete Signal Processing story, for the exam it is recommended to focus on two videos in particular: Sampling and Discrete Fourier Transform. In-class activities (not in this book) are also relevant; for example, the Jupyter notebook assignments.
```