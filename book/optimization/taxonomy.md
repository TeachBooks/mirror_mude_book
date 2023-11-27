# Taxonomy of optimization models

In this section we will discuss the difference between different types of optimization models:

* Continuous vs Discrete variables
* Single vs Multi-objective
* Convex vs Non-convex problems
* Deterministic vs Stochastic
* Constrained vs Unconstrained problems

## Continuous vs Discrete variables

The name is self-explanatory for the difference between these two types of variables:

* **Continuous variables:** time, distances, physical properties, etc.
* **Discrete variables:** number of wind turbines, decisions such as doing something or not, type of materials, etc.

## Single vs Multi-objective

It depends on the number of objective functions we need to define to address our problem. Examples 4 and 6 from the last section are good examples of single and multi-objective problems, respectively.

## Convex vs Non-convex problems

**Definition:** A convex optimization problem is a problem where all the constraints and the objective are convex functions.


<div style="display: flex; justify-content: space-between;">
  <img src="../../../../book/optimization/figs/convex.png" style="width: 65%;">
  <img src="../../../../book/optimization/figs/non-convex.png" style="width: 34%;">
</div>

## Deterministic vs Stochastic

**Deterministic optimization:** all the parameters of the optimization problem are deterministic. There is not variability in the problem definition.

**Stochastic optimization:** the definition of optimization problem presents variability or uncertainty. The optimal solution of a possible scenario is not necessarily the optimal solution of another possible scenario.

## Constrained vs Unconstrained problems

**Constrained problems:** the solution space is bounded:

* *Feasible region:* only a set of solutions are possible candidates;
* *Unfeasible region:* there is not a possible solution fulfilling all the constraints

**Unconstrained problems:** the solution space is not bounded. All the configurations are possible candidates for being optimal.