# Model Verification, Calibration and Validation

```{note}
*All models are wrong, but some are useful.*

George Box (1913-2013)
```

We have already discussed that, when building a model, we have to make some decisions: depending on the system I am studying and the questions I have, I will make or not some simplifications. That leads to the previous statement (*'all models are wrong'*), because they only model the part of the system we are interested in with the required accuracy to answer our questions (*'but some are useful'*). So then... **how can they even be considered valid?**

Let us consider two different models, the mass-spring system (model 1) and a tower (described by a complex numerical model, making using of the Finite Element Method).

![models](figs/modelling/models.png "models")

Both models do **not exactly represent** the real structure, but they can be valid models in which we can trust to answer to certain research questions. For example:

* **Model 1:** What is the fundamental frequency of the structure?

Knowing the spring constant, $k$, the damping coefficient, $c$, and the mass we have on top, then we can exactly determine the natural (fundamental) frequency of the structure.

* **Model 2:** How does the structure deform at its fundamental frequency?

We need to use a more complex model to answer to this question, but the Finite Element Method would be an appropriate one.

**Conclusion:** Our models are valid if they fit the purpose and answer our research questions! (But this poses a new question...)

```{admonition} But... what do we mean with research questions?
:class: tip, dropdown

Well, let us enumerate a few examples so you can have a clearer idea!

* What is the maximum water depth during the flooding of city?
* What is the concetration of a contaminant in a given location of my reservoir?
* How does the dynamic behavior of a structure change if the interaction with the soil is taken into account?

```

## How do we know they fit the purpose?

Essentially, **models need to be verified and validated to fit the purpose**. It is important to keep in mind that verification $\neq$ validation!

### Verification

Verification is the process of checking whether the model is correctly implemented with respect to the original conceptual model. It should answer the question: *Have we built the model right?*

For example, check whether:

* **It matches the assumptions**

If we assumed a linear behavior, for example, then the model's responses should obey the linear superposition principle.

* **All the main required aspects/actions are implemented**

Compare your model with a flow diagram that includes each logical action and check whether the model performs such actions.

* **Structured walk-through/one-step analysis**

Ask experts to go through the model; explain your steps to a non-expert person. This helps you to go throught the modelling steps again.

* **The results look reasonable for known input values (this can also be validation)**

Compare the model's results against analytical results (if possible) or benchmark solutions. This could also be done for parts of the model.

* **No numerical or math errors exist**

Running the model for extreme cases, checking asymptotic convergence of simulations or verifying a good representation of floating-point numbers are a few examples of performing this step.

### Validation

Validation is the process of testing the ability of the model in answering the research questions as best as possible. It has to fit the purpose! It should answer the question: *Have we built the right model?*

#### How do we validate a model?

First, we need to define features, goodness of fit metrics, and acceptable error ranges (limits and tolerances).
* **Feature**: The quantity that is chosen to be predicted. For example, the peak stress of a specific structural component or the peak concentration of a contaminant.
* **Goodness of fit metric**: Quantitative measures of the distance or error between the predicted feature by the model and the reference value of the chosen feature (you will learn more about this in the next section).
* **Limits and tolerances**: I have to define how much deviation from the reference value I can accept. As we introduced, models are not perfect and, thus, there will be some error in the predictions. An appropriate model is that whose error is negligible to answer the research question.

Once we have them defined, the key phase of the validation process takes place: the comparison of the results of our model with the reference value. As a result, we will be in two possible scenarios:

1. We find a significant/unexpected mismatch. Then, we need to go back to our original assumptions,review them and improvet them. We will need to make our model more complex. If this match improves, then we **validate** the model.

2. We find a small/expected mismatch, then we can **calibrate** the model to make it more accurate - adjust/tune the model parameters to improve the match. 

#### How is the model comparison performed?

To compare the model with either the experiment or the validated models, we assume we have a certain number of data points, obtained from experiments or from another validated model. We split this data points into two different sets: (1) dataset 1 for first comparison and calibration, and (2) dataset 2 for validation. There is not strict rule about the size of each dataset and it may depend on the field. As a first suggestion, it can be divided in 40%-60% for datasets 1 and 2, respectively.

Once calibrated, we use the data to compare with the calibrated model (using the same feature and metric) against:

* Remaining set of data from experiments or simulated results
* Future collected data

Not the same data as in the previous step!

#### Final notes on model validation

Be very systematic in verifying and validating models:

* Have a plan for experiments and model simulations to perform;
* Justify the chosen features and metrics;
* Mark out which changes have been made to the model;
* Make a track list of the corrected mistakes;
* Keep note of what changed in the results, for each modification performed in
the model;
* Clearly highlight for which parameter space the model is valid.