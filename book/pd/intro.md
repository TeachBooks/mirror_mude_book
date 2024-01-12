(rr_intro2)=
# Risk and Reliability, Part 2 

```{note}
Before reading further than this page, be sure to review the {ref}`Part 1 Introduction Page on Risk and Reliability <rr_intro>`, which introduced and defined several key concepts.
```

Whereas Part 1 of Risk and Reliability defined risk and described how probability is used in the design process, this section focuses on the risk analysis and risk evaluation, and is organized around the following chapters: 

- **Risk Analysis** as a process is formally defined and quantitative risk measures are introduced.
- **Component Reliability** and **System Reliability** briefly introduce approaches for evaluating reliability, or $\text{P}_\text{bad thing}$, in order to carry out probabilistic assessment and design quantitatively. This is the *quantitative analysis* step of a risk analysis.
- **Risk evaluation** provides simple quantitative tools and a framework for establishing risk-based safety standards and economic risk criteria. This is a key step in the risk analysis process.

**Risk and Reliability in Practice**

Throughout this chapter of the book we will repeatedly draw on the field of flood management to illustrate risk and reliability concepts as this field requires expertise from all perspectives in civil and environmental engineering and geosciences, from climate and hydrologic processes to evacuation and recovery. In addition, this field has driven the development and use of risk and reliability techniques in the Netherlands since the flooding disaster of 1953, not to mention the experience gained during the previous millenium, albeit in a less rigorous mathematical fashion. And finally, new safety standards for primary flood defences in the Netherlands have been in place since 2017 that are formulated as a tolerable failure probability of dike[^dike] segments. As such, dike reinforcements are legally required to be designed according to these new standards, which requires one to show that the failure probability is less than an allowable maximum value.

Despite the focus on flood management, many applications exist in other fields, for example the discussion about the gas extraction in the North of the Netherlands which leads to increased earthquakes, building damage and potential injury to humans. A thorough analysis of the probability of earthquake occurrence, structural safety of various infrastructure (houses, levee, hospitals, pipelines), benefits associated with extracting gas and the resulting level of risk is required to make decisions about how to manage this industry. As with the flood management application, advanced knowledge of probabilistic techniques is needed. 


```{admonition} MUDE exam information
:class: tip, dropdown

Concepts in this section to focus on for the Q2 MUDE exam are:
- Definitions of risk and steps of a risk analysis
- Simple system and component reliability (quantitative risk analysis methods)
- Use of probability to design and assess engineering systems and components
- Influence of dependence on simple systems and components
- Decision analysis, cost-benefit analysis and economic optimization (risk evaluation methods)
- Evaluation and quantification of risks for a system with three different risk metrics: individual, societal and economic
- Application and derivation of standards for human safety (individual and societal risk)
- Application and derivation of standards based on economic risk

Although the list is long, the methods are introduced in a simple form and are always applied to simplified systems of engineering problems within Civil and Environmental Engineering and Geosciences.
```

```{admonition} MUDE not-on-the-exam information
:class: tip, dropdown
The following concepts or methods are used in this book to illustrate key subjects and examples, but you will *not* be asked to do them on the exam:
- List from memory the steps of a risk analysis and describe all aspects in detail
- Set up a decision tree yourself (note that you may be given a tree with values filled in and asked to interpret it)
- Define a limit-state function yourself and calculate failure probability
- Schematize system reliability problems (we will give you one)
- Evaluate risk curves with more than three scenarios
- Perform complicated cost benefit analyses
- By now this list should give you a good enough idea of what to (not) expect...

Exam questions are also designed such that specialized knowledge is not needed to solve them; however, you should be able to recognize loads and resistances and series and parallel systems for any simple civil engineering and geoscience application provided on the exam.
```

[^dike]: A dike is a structure, typically made of soil, that protects a specific region from flooding by physically holding back water. Usually associated with rivers, such structures are also widely used on the coast, especially in low elevation areas such as the Netherlands. The Dutch word for levee is *dijk,* but English word *dike* is used in this book. Outside of the Netherlands the words *embankment* and *levee* are used.