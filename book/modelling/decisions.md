# Model Decisions

In this section, we are going to focus on the decisions we make when setting up a model. *And what is the main advantage of this?*  We will start seeing models as part of the creative and decision making process!

When building a model, we need to identify which simplifications we can make to keep our model as simple as possible, while modelling the system we are interested in with the appropriate accuracy. In short, the simpler, the better, while it answers my questions. We are going to talk about the following decisions:
- Dynamic vs. static models
- Linear vs. non-linear models
- Time-invariant vs. Time-variant models
- Deterministic vs. Stochastic models

## Dynamic vs. Static

The decision between dynamic and static models is based on whether my models needs to account for previous or future states. This is, the response of a dynamic model will have a dependence on the past and future states of the system. On the contrary, in a static model, we consider the response of the system only depending on present values and, thus, the model does not account for previous time steps.

**Let's see it with an example.**

 In classical mechanics, as you know, motion is governed by Newton's laws - the second law in particular - that allow us to write the famous main equation of motion that we know for years:

$$\underbrace{\sum_i^n F_i}_{\text{sum of all external forces}} = \overbrace{m\textbf{a}}^{\text{inertial terms}}$$

This equation can be tricky to solve: it is dynamic and nonlinear... However, it is also possible to simplify it!

Let us consider the mass-spring system as a first example.

![mass-spring](./figs/modelling/mass-spring-system.png "mass-spring")


For this system, Newton's equations of motion sketch as:

$$F-c\frac{dx}{dt}-kx = m\frac{d^2x}{dt^2} \Leftrightarrow m\frac{d^2x}{dt^2} + c\frac{dx}{dt}+kx = F$$ 

In this equation, a dependence exists between the present and past states of the system. Thus, it is a dynamic model.

If the terms with the derivatives are small and negligible when compared to $x$, then we find the following equation of motion:

$$\frac{d^2x}{dt^2},\frac{dx}{dt} << x \implies kx = F$$

**Under which circumstances does this occur?**

* *Slow loading rate:* constant $F$ or $F\cos(\omega t)$ if $\omega<\omega_0$, where $\omega_0$ is the natural frequency of the system

* Small mass and small values of the damping constant, $c$

Therefore, in those circumstances, we can make the assumption that the model is static (simplification) and still get accurate answers to our questions.

## Linear vs Nonlinear

Linear models model the relationships between variables using linear predictor functions. The advantage of these models is that superposition principle applies and the long term behavior does not depend on initial conditions. On the contrary, in non-linear models, superposition principle does not apply anymore and long and short term behavior highly dependent on the initial conditions.

**Let's see an example.**

Let us consider one of the most typical Physics examples: the simple pendulum. 

![pendulum](./figs/modelling/pendulum.png "pendulum")

The moment equation around the pivot point corresponds to a nonlinear dynamic model:

$$\frac{d^2\theta}{dt^2} + \frac{g}{l}\sin\theta=0$$

However... it can be linearized around a stable position, where we use $\sin\theta \approx \theta$. This assumption is reasonable when the motion of the pendulum is small compared to the length of the pendulum. Thus, the equation of motion will become:

$$\frac{d^2\theta}{dt^2} + \frac{g}{l}\theta = 0$$

## Time-invariant vs Time-variant

In time-invariant models, the model coefficients or model parameters are constant. This is, the response or properties of the system do not change over time. In time-variant models, the model parameter do change over time, so the behavior of the system evolves. 

**And how do I choose between a time-variant and time-invariant model?** 

Mainly, based on the knowledge I have about the system. As an engineer, I will have to assess whether or not such changes are relevent for my problem. For instance, nowadays, we consider climate change when designing a breakwater. It has been proved that waves storm are becoming more extreme over time and I will have to account for that to assess the performance of the breakwater over time. However, if I am designing a temporary platform to assist in some construction works in the sea, I will not take it into account. Climate change is a long-time scale process which will impact on the life cycle of a breakwater which is meant to be there for years. On the contrary, the influence of climate change on a platform which will only be there for a few weeks is negligible.

## Deterministic vs Stochastic

Deterministic models are those which for some given inputs, always provide the same output. For instance, a equation which gives the average concentration of $\text{CO}_2$ in a city as function of the traffic. For a certain value of traffic, the model will always provide the same concentration of $\text{CO}_2$. Therefore, these models that there is no uncertainty. On the contrary, stochastic models are those which embrace the uncertainty. This is stochastic models will produce different outputs for a given input. In fact, the inputs and outputs of stochastic models are probabilistic distributions (you will learn more about this later!), which relate the values of the variable with the probability of observing it.

**And how do I choose between a deterministic and stochastic model?** 

All systems, in reality, are stochastic to our eyes, since we never truly know the actual properties and inputs. However, under certain circumstances, this *stochasticity* can be neglected. Let us take a look to some examples of deterministic and stochastic systems:

**Cases of stochastic systems:**

Structures with known or unknown properties subject to unknown or known loads, respectively:

* Soil systems: we can extract samples of soil but we cannot see or measure the properties of every point in the system.
* Traffic systems: inputs are too complicated, from weather to human decisions.

Note that there are also uncertainties regarding the measurement of the observations (you will also learn about this later!).

**Cases of deterministic systems:**

Known structures subject to known static or dynamic loads. For instance, when we decide to model the response of a building (deformations) under a certain wind load.

