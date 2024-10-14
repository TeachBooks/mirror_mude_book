(multivariate_events)=
# Events: Fundamentally Refreshing

Before going further into _continuous multivariate distributions,_ we will start with a reminder of some basic concepts you have seen previously: independence and conditional probability, illustrated by considering the probability of _events._

```{admonition} Event
:class: tip

In probability theory, sample space ($\Omega$) is the collection of all possible outcomes arising from an experiment or operation which involves chance. 

An event is the specific outcome, or set of outcomes, from the experiment or operation. 

For example, many natural disasters can be considered as binary events: either they occur or don't occur. This is analogous to flipping a coin, where the ‘flip’ is our experiment and heads or tails define the two possible events. Our sample space is the set of two possible events.

If you also need further practice or to revisit other concepts such as mutually exclusive events or collectively exhaustive, you can go [here](https://teachbooks.github.io/learn-probability/section_01/Must_know_%20probability_concepts.html).
```

## Case Study: discrete events

Imagine two events, A and B:
- A represents river A flooding
- B represents river B flooding

Each of these events will have a probability of ocurring, denoted here as $P(A)$ and $P(B)$, respectively.


```{figure} ./figures/venn-events.png

---

---
Venn diagram of the events A and B.
```

The AND probability or intersection of the events A and B, $P(A \cap B)$, is defined as the probability that both events happen at the same time and, thus, it would be represented in our diagram as shown in the figure below.

```{figure} ./figures/venn-intersection.png

---

---
Venn diagram of the events A and B, and AND probability.
```

### 

The OR probability or union of the events A and B, $P(A \cup B)$, is defined as the probability that either one of the two events happen or both of them. This probability can be computed as 

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

This is, we add the probabilities of occurrence of the event A and B and we deduct the intersection (AND) of them, to avoid counting them twice.

## Definition of independence

When two events, A and B are independent, it means that the occurrence of one does not influence the occurrence of the other event.

Formally, A and B are considered independent **if and only if** the AND probability of both events ($P(A \cap B)$) can be factorized into the product of their probabilities. This is, 

 $$
 P(A \cap B) = P(A) P(B)
$$

## Conditional probability

A conditional probability is a measure of the probability of an event occurring given that another event has already occurred. According to Bayes' theorem, conditional probabilities can be computed as

$$
P(A|B) =  \frac{P(B|A)P(A)}{P(B)}
$$
 
where $P(A|B)$ is the probability of the event A occuring given that event B has already occurred.

## Total probability theorem

When the probability of an event cannot be calculated directly, but its occurrence is related to the occurrence of other events, the Total probability theorem can be applied as

$$
P(A) =  \sum_{i=1}^{n}P(A|B_i)P(B_i)
$$

where $B_i$ are a set of mutually exclusive, collectively exhaustive events.

If you need further refresher of these concepts, you can further read and practice [here](https://teachbooks.github.io/learn-probability/section_01/Total_Probability_Theorem.html).



