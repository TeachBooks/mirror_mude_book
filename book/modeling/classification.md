# Model Classification

## What is a Model?

```{note}
**In short:** a model is a purpose built abstraction of physical reality. Let us see it in more detail.
```

In any engineering discipline, **we interact with a system** (Earth, ecosystem, water network…). Usually, we have questions about how the system behaves to know how our intervention will affect it (e.g.: how a water body reacts when the cooling water from a nuclear power plant is discharged), or how the system will impact on our intervention (e.g.: a river which may flood close to our road). 

![cooling](figs/modelling/cooling.webp "cooling")

To answer that, we build an abstraction of the system which can mimic those aspects we are interested in. For instance, if we focus on the example from the cooling water and the water body, we can model the heat distribution in the water body to know the final temperature. This implies that we are only modelling some aspects of the system we are studying. What about the response from the species living there? Well, **if we do not need those, our model is good enough to answer our question!**

| ![diagram](figs/modelling/diagram.png "diagram") |
| :--: |
| *Modelling procedure diagram [[1]](https://schoolbag.info/mathematics/numbers/103.html)* |

Once we are sure that the model can reproduce the behaviors we are interested in, we can further use it to make computations. Those computations need to be interpreted to get the answer to our actual question.

***

Using a short practical example to illustrate this: imeagine you are throwing a projectile, let us say a basketball and you want to **model** its trajectory. To do so, you would write the following equations of motion:

$$\begin{cases}x=v_0t\cos\theta \\ t=v_0t\sin\theta-\frac{1}{2}gt^2\end{cases}$$

which would result in the following plots for different initial velocities, $v_0$, and angles, $\theta$

![projectile](figs/modelling/projectile.png "projectile")

## Fit-for-purpose: Modelling Assumptions

It is important to keep in mind that **different purpose $\implies$ different model**. We will now look to different examples that illustrate this.

### Example 1: Mode Choice Modelling

Imagine you want to predict what would be the choice made by a rational individual to travel from Delft to Paris (i.e. given origin and destination). Would he choose to go by car or by train?

![distances](figs/modelling/distances.png "distances")

If we consider the simplest possible car dynamic model, where $v(t) = \bar{v}$, then it is very simple and easy to compute! But it will also depend on how rational individuals will make choices (travel time, travel cost, comfort, sustainability, etc.)

### Example 2: Emissions Modelling

Let us now consider a different scenario: we want to predict how much $\text{CO}_2$ a conventional internal combustion vehicle will produce on a trip. If we consider, again, the simplest possible car dynamic model, $v(t) = \bar{v}$, and the simplest model to predict the car emissions, based on "the faster you drive, the more $\text{CO}_2$ you emit":

$$e(t) = av(t)+b$$

then we get (combining the two models):

$$e(t) = a\bar{v}+b$$

But is this good enough to answer our question and predict the emissions of the vechicle? **No.** In fact, there are lots of factors that gain a stronger importance in this scenario:

* Type of the fuel used
* Speed
* Air resistance considered
* Wind speed and angle
* Car profile & drag

As an example of how things change with this factors, check the image below:

![emissions](figs/modelling/emissions.png "emissions")

### Example 3: Comfort Modelling

And, for a final example, consider you wanted to predict how comfortable the ride on the vehicle would be. In this case, the speed would not matter as much as in the previous scenarios, and we would have factors as the vehicle's suspension playing a far greater role!

![suspensions](figs/modelling/suspensions.png "suspensions")

### Summary

![tradeoff](figs/modelling/tradeoff.png "tradeoff")

In summary, the assumptions made in modelling will take our model to a certain position in this trade-off triangle!

* **Affordability and accuracy:** cheap and functional models, but with a limited scope
* **Accuracy and complexity:** very realistic models, but prohibitively expensive
* **Complexity and affordability:** the unicorn icon might speak for itself - difficult to achieve!

## Classifying Models

Models can be classified according to their nature, such as:

* Conceptual models
* Mechanistic models
* Phenomenological models
* Data-driven models

### Mechanistic Models

**Concept:**
* Physical, chemical, or biological laws to describe the behavior of constituting parts of the modeled system
* Embodies the idea that a complex system is the summation of many basic phenomena

**Examples:**
* Newton's laws for describing rigid body motion
* Elasticity theory to predict stresses

### Phenomenological Models

**Concept:**
* Mathematical consistency between quantities, relationship between quantities is hypothesized via dimensional analysis, for example
* Model is constructed by setting up appropriate experiments, measuring observations, fitting hypothetical structure with data (e.g. linear regressions)
* Development of new theories based on observations of a complex system

**Example - Drag Forces:**

The drag force is the force that appears in an object which moves with respect to the surrounding fluid. We typically calculate it as

$$F_D = \frac{1}{2}\rho v^2C_DA$$

where

* $\rho$ is the density of the fluid
* $v$ is the velocity of the object with respect to the fluid
* $A$ is the cross-sectional area
* $C_D$ is the drag coefficient (a dimensionless number that depends on the shape of the object and conditions of the surrounding flow). Typically calculated through relationships with the Reynolds' number - using a combination of physical relationship and data.

**Other examples:**
* Friction force
* Behavioral modelling (e.g. route choice in transport)

### Data-driven models

**Concept:**
* Usage of data to create empirical and probabilistic relations between the desired output and input

**Simple example:**

Imagine we want to predict the force of waves acting on a wall. To do so, we start by **going to the lab** and performing some experiments and measurements there. We perform them under different conditions, generating waves of different heights in a wave flume and measuring the forces on a model wall that is put inside.

With the collected data, we fit a linear regression between the wave height and the measured forces. 

| ![waves](figs/modelling/waves.png "waves") |
| :--: |
| *Example of a similar experiment performed in three different scenarios* |

This is purely empirical and, thus, a data-driven model! We have simply used data to fit a relationship **input -> output**. These models can be very useful when trying to model very complex systems when there is lots of data available.

**Examples:**
* Human behavior in driving (e.g. mode-choice example from earlier!)
* Structural health monitoring in manufacturing (e.g. via machine learning)
* Predictive maintenance in transport infrastructure
* Other highly complex, well-measurable phenomena

## Example: surface contact/friction modelling

Let us consider a complex, multi-physics, multi-scale problem - the modelling of surface contact/friction

![friction-1](figs/modelling/friction-1.png "friction-1")

### Mechanistic approach

![friction-2](figs/modelling/friction-2.png "friction-2")

What are the main characteristics of using this approach?

* Accurate geometrical representation of the surface roughness
* Usage of all physical and chemical laws to describe interactions
* Surfaces in contact could also be modelled from an atomistic point of view (molecular-particle models)

![friction-3](figs/modelling/friction-3.png "friction-3")

On our trade-off triangle, we would put this approach on the right edge of it, due to its **very high** computational cost and to the fact that it is only viable for scientific research (nanomaterials, for example).

### Phenomenological approach

![friction-4](figs/modelling/friction-4.png "friction-4")

What are the main characteristics of using this approach?

* Simpler rule, inferred from experimental measurements
* Not as accurate as the mechanistic approach, but good enough for certain applications
* Coulomb's friction is also a phenomenological model itself!

![friction-5](figs/modelling/friction-5.png "friction-5")

On our trade-off triangle, we would put this approach on the bottom edge of it, due to its low computational cost and for being accurate enough to predict phenomena at scale.