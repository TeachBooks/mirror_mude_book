(multivariate_events)=
# Events: Fundamentally Refreshing

Before going further into _continuous multivariate distributions,_ we will start with a reminder of some basic concepts you have seen previously: independence and conditional probability, illustrated by considering the probability of _events._

```{admonition} Event
:class: tip

In probability theory, an _event_ is considered to be the outcome of an experiment with a specific probability. 

**some other stuff**

If you also need further practice or to revisit other concepts such as mutually exclusive events or collectively exhaustive, you can go [here](https://teachbooks.github.io/learn-probability/section_01/Must_know_%20probability_concepts.html).
```

## Discrete Events

As we are working towards multivariate _continuous_ distributions we will these events will be referred to _discrete_ events to distinguish them from.

In this case our sample space is:
- still 1
- each event is a random variable
- to facilitate the venn diagram and "event-based" analogies we will only consider binary cases for each event, so $\leq$ and $>$ cases (can illustrate for more than binary cases, but why bother)
- 

Great. Now let's review a few key concepts (quickly!).

**idea**: simply list condition, total probability, independence rule, Bayes rule (lays out terms and usage), then the following sections briefly illustrate these things with the flood example and Venn diagrams.

## Case Study

Imagine two events, A and B:
- A represents river A flooding
- B represents river B flooding

Each of these events will have a probability of ocurring, denoted here as $P(A)$ and $P(B)$, respectively.


```{figure} ./figures/venn-events.png

---

---
Venn diagram of the events A and B.
```

The AND probility or intersection of the events A and B, $P(A \cap B)$, is defined as the probability that both events happen at the same time and, thus, it would be represented in our diagram as shown in the figure below.

```{figure} ./figures/venn-intersection.png

---

---
Venn diagram of the events A and B, and AND probability.
```

Thus there are two ways we have of describing the same probability:
- intersection
- AND

we will use these interchangeably.

Keep an eye out for related (English) words: both, together, joint, ...

### 

The OR probability or union of the events A and B, $P(A \cup B)$, is defined as the probability that either one of the two events happen or both of them. This probability can be computed as 

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

This is, we add the probabilities of occurrence of the event A and B and we deduct the intersection of them, to avoid counting them twice.




## AND and OR probabilities from samples

**we can illustrate samples in the venn diagram as dots with labels:
- simple counting exercises will illustrate the probabilities
- 

## Conditional probability

Point to Bayes

Definition to conditional probability

Compute conditional probabilities from samples
