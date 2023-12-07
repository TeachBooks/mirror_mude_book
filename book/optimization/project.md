# Road Network Design Problem
During Friday's project, you'll work on a road network design problem (NDP) and look at the implementation using mixed integer linear program (MILP) and a genetic algoritm (GA). The problem description, mathematical formulation and implementation in Python are provided in this book in case you'd like to prepare for the project session.

```{admonition} MUDE Exam Information
:class: tip, dropdown
The road network design problem serves as an example for solving a complex optimization problem. You're not expected to be know the problem's details.
```

## Problem description

The road network design problem (NDP) is the problem of determining which links to build/refurbish/upgrade in order to improve the performance of a road network. One of the variations of the road NDP is the road NDP with capacity expansions, which involves deciding which links should have their capacity increased. This is a complex problem that must take into account a variety of factors, including:

* The current state of the road network
* The projected future traffic demand
* The budget available for improvements
* The impacts of the adjustments (could be environmental, social, etc).

There are a variety of approaches to dealing with the road network design problem with capacity expansion. One common approach is to use mathematical optimization models. In this assignment we use a simplified example to show how optimization can be used to tackle road NDPs. Note that the classical approaches to dealing with road NDPs can be more complicated and will be covered in other courses in the TTE track of the civil engineering master program.

In this assignment, the goal is to minimize the total travel time on the network by selecting a predefined number of links for capacity expansion (subject to the available budget). The following (main) assumptions and simplifications are made to make the problem solvable using methods and algorithms that you have learned so far.

### 1. Link travel time function
Travel time on a stretch of road (i.e., a link) depends on the flow (vehicles/hour) on that link and the capacity of the link (maximum of vehicles/hour). The most common function to calculate travel time on a link is the so-called Bureau of Public Roads (BPR) function, which is a polynomial (degree 4) function. That function, if used in the assignment, would make the problem non-linear and therefore very hard to solve. So we use a simplified linear function where travel time grows linearly with the flow of vehicles on a road link. More details are provided within the formulation section.

### 2. Route choice behavior
In order to assess the quality of the road capacity expansion problem one must know what the effect of the added capacity in on travel time. For that it is not sufficient to model the travel time-flow function, you must know where the vehicles are going to drive on the road. The route choice behavior of drivers within congested networks often follows the so-called User Equilibrium (UE) principle where each traveller tries to minimize their own individual generalized travel time. The UE states that for each origin and destination pair, all used routes between those nodes have equal and minimal travel time. That is, no driver can improve his/her travel time by choosing another path, therefore an equilibrium is reached.
However, calculating the UE requires advanced methods which are not covered in the MUDE. Therefore, here we assume the route choice behaviour follows the so-called System Optimal (SO) principle, which implies that route choices are made in such a way that the total travel time is minimized (summed over all the drivers). That means that some cars will drive longer routes so that other cars can save time. This is also called social equilibrium. This type of equilibrium is easier to compute. But just have in mind that in our road networks you can hardly obtain a system optimal traffic distribution. You can't tell where drivers have to do.

### 3. Quadratic terms
As you will see in the formulation below, even after making the above-mentioned assumptions, our formulation of the Road NDP will include a quadratic term, you must multiply the flow (which is a variable) by the tavel time (which is also a variable). This is therefore not linear. 
Fortunately there are different methods to transform quadratic terms to linear variables and constraints with mathematical programming. You do not need to learn these techniques. Most solvers (including Gurobi) can handle this well given some adjustments to the formulation. Gurobi uses the [McCormick Envelops (MCE)](https://optimization.cbe.cornell.edu/index.php?title=McCormick_envelopes) to transform each quadratic term into one new variable and four constraints. For more information on MCE and how Gurobi implements them, check these links (but this is not part of your learning goals):
* [The theory behind MCE](https://optimization.cbe.cornell.edu/index.php?title=McCormick_envelopes)
* [Gurobi webinar presentation on quadratic optimization](https://cdn.gurobi.com/wp-content/uploads/2020-01-14_Non-Convex-Quadratic-Optimization-in-Gurobi-9.0-Webinar.pdf?x93374)
* [Full video of the webinar](https://www.gurobi.com/events/non-convex-quadratic-optimization/)

We will move forward with a quadratic term in the objective function then because with the simplifications and assumptions referred to above we can formulate an NDP and solve it using the branch and bound method that you have studied before.

We are using the SiouxFalls network which is one of the [most used networks in transportation research](https://github.com/bstabler/TransportationNetworks/blob/master/SiouxFalls/Sioux-Falls-Network.pdf)

```{figure} ./figs/SiouxFallsMap_AAA1998.jpg
---
height: 500px
---
SioiuxFalls map
```

## Mathematical description

### Decision variables

We have a set of binary variables $y_{ij}$, these variables take the value 1 if link $(i,j)$ connecting node $i$ to node $j$ is selected for expansion, and 0 otherwise.

We also have two sets of decision variables representing link flows; $x_{ij}$, representing flow on link $(i,j)$ in cars per hour, and $x_{ijs}$, representing flow on link $(i,j)$ going to destination $s$.

The first is the number of total cars passing on that road, and the second is the number of cars that are passing on the road which are specifically going to destination $s$. Summing the latter over all $s$ results in the former for a link $(i,j)$.

Therefore, mathematically we define the domain of the variables as follows:

$$\begin{align}
  & y_{ij} \in \{0, 1\} \quad \forall (i,j) \in A \\
  & x_{ij} \geq 0 \quad \forall (i,j) \in A \\
  & x_{ijs} \geq 0 \quad \forall (i,j) \in A, \forall s \in D \\
\end{align}$$

### Objective function

The objective function of the problem (in its simplest form), is the minimization of the total travel time on the network, that means that you multiply the flow of vehicles in each link by the corresponding travel time and sum over all links (A is the collection of all links to simplify the notation):

$$Z = \sum_{(i,j) \in A}{ x_{ij} . t_{ij}} $$

The travel time $t_{ij}$ is a function of the flow on a link and can be expressed as follows (where beta is a parameter):

$$ t_{ij} = t^0_{ij} . ( 1 + \beta (x_{ij}/c_{ij}))  \quad \forall (i,j) \in A  $$

(Note that the commonly used travel time function based on the Bureau of Public Roads (BPR) is as follows:

$$ t_{ij} = t^0_{ij} . ( 1 + \alpha (x_{ij}/c_{ij})^\beta)  \quad \forall (i,j) \in A  $$

Where $\beta$ usually assumes the value of $4$ making this function (and the problem) non-linear. Therefore, we use the linear function mentioned before to make the problem manageable using what we have learned so far.)

The following constraint yields the capacity of each link based on which ones are selected for expansion, when y is 1 there is added capacity as you can see:

$$ c_{ij} = (1 - y_{ij}) . c^0_{ij} +  y_{ij} . c^1_{ij}  \quad \forall (i,j) \in A   $$

This allows us to represent $t_{ij}$ as:

$$ t_{ij} = t^0_{ij} . ( 1 + \beta (x_{ij} * ((1 - y_{ij})/c^0_{ij} +  y_{ij}/c^1_{ij} )))  \quad \forall (i,j) \in A  $$

Which leads to the following extended objective funtion:

$$ Z = \sum_{(i,j) \in A}{ x_{ij} . (t^0_{ij} . ( 1 + \beta (x_{ij} * ((1 - y_{ij})/c^0_{ij} +  y_{ij}/c^1_{ij} ))))} $$

Now, for gurobi (and other solvers as well), we have to keep binary variables and quadratic terms clean and separate so that it can perform the required transformations to linearize the problem. Therefore, the equation below, despite being very big, would be the most solver-friendly formulation of our objective function:

$$\begin{align}
  Z = \sum_{(i,j) \in A}{t^0_{ij} . x_{ij}} + \sum_{(i,j) \in A}{(t^0_{ij}.\beta /c^0_{ij}) . x^2_{ij}} - \sum_{(i,j) \in A}{(t^0_{ij}.\beta /c^0_{ij}) . x^2_{ij} . y_{ij}} + \sum_{(i,j) \in A}{t^0_{ij}.(\beta /c^1_{ij}) . x^2_{ij} . y_{ij}}  \\
\end{align}$$

Therefore, we use this equation to model our objective function in gurobi.

### Constraints

We have four sets of constraints for this problem. Let's go through them one by one and add them to the model.

#### 1. Budget constraint
We can only extend the capacity of certain number of links based on the available budget. So first, we have to make sure to limit the number of extended links to the max number that can be expanded:

$$ \sum_{(i,j) \in A}{ y_{ij}} = B $$

#### 2. Link flow conservation constraints
We have two sets of decision variables representing link flows; $x_{ij}$, representing flow on link $(i,j)$, and $x_{ijs}$, representing flow on link $(i,j)$ going to destination $s$. So we have to make sure that the sum of the flows over all destinations equals the flow on each link.

$$ \sum_{s \in D}{x_{ijs}} = x_{ij} \quad \forall (i,j) \in A $$

#### 3. Node flow conservation constraints
The basic idea of this constraint set is to make sure that the incoming and outgoing flow to and from each node is the same (hence flow conservation) with the exception for origin and destination nodes of the trips where there will be extra outgoing flow (origins) or incoming flow (destinations). Think about a traffic intersection, vehicles enter and leave the intersetion when they are moving in the network. This assures the continuity of the vehicle paths.

$$ \sum_{j \in N; (i,j) \in A}{ x_{ijs}} - \sum_{j \in N; (j,i) \in A}{ x_{jis}} = d_{is} \quad \forall i \in N, \forall s \in D $$

#### 4. Quadratic variable constraints (you do not need to fully understand this)
These are basically dummy equations to help gurobi model quadratic terms (that we defined as dummy variables earlier). So essentially instead of using $x^2_{ij}$ in the model, we define a new set of decision variables and define a set of constrains to set their value to $x^2_{ij}$. This let's Gurobi know these are quadratic terms and helps gurobi to replace it with variables and constraints required to keep the problem linear. This is not part of your learning goals! 

### Conclusions

Here is the complete problem formulation.

$$\begin{align}
  min  \quad  & \sum_{(i,j) \in A}{t^0_{ij} . x_{ij}} + \sum_{(i,j) \in A}{(t^0_{ij}.\beta /c^0_{ij}) . x^2_{ij}} - \sum_{(i,j) \in A}{(t^0_{ij}.\beta /c^0_{ij}) . x^2_{ij} . y_{ij}} + \sum_{(i,j) \in A}{t^0_{ij}.(\beta /c^1_{ij}) . x^2_{ij} . y_{ij}}  \\
  s.t.  \quad \\
  & \sum_{(i,j) \in A}{ y_{ij}} = B \\
  & \sum_{s \in D}{x_{ijs}} = x_{ij} \quad \forall (i,j) \in A  \\
  & \sum_{j \in N; (i,j) \in A}{ x_{ijs}} - \sum_{j \in N; (j,i) \in A}{ x_{jis}} = d_{is} \quad \forall i \in N, \forall s \in D \\
  & y_{ij} \in \{0, 1\} \quad \forall (i,j) \in A \\
  & x_{ij} \geq 0 \quad \forall (i,j) \in A \\
  & x_{ijs} \geq 0 \quad \forall (i,j) \in A, \forall s \in D \\
\end{align}$$

### Adaption for GA

To be able to use GA, we need to define the problem slightly differently. Essentially, we break down the problem into two sub-problems: 1) the traffic assignment (TA) problem: the route choices of the drivers, and the 2) the road network design problem (NDP): where we select which links should be upgraded. We solve the problem by iteratively going between the Traffic assignment and the Design Problem. The idea is for the GA to move to better networks as generations pass which are evaluated by the traffic assignment process that you have learned.
We use Gurobi to solve the Traffic Assignment sub-problems, which provide us with the objective function (or fitness function within the context of GA) value of the decision problem (which will be dealt with using GA). This is usually referred to as the iterative-optimization-assignment method since we iteratively improve the objective function value of the NDP using the assignment problem.

So let's see how that works.

#### The network design sub-problem

The network desing is where we use the genetic algorithm. As explained before, GA uses a population of solutions and iteratively improves this population to evolve to new generations of populations with a better objective function value (being that minimization or maximization). In this problem, the decision variables are links for capacity expansion and the objective function value is the total system travel time that we want to minimize.

$$\begin{align}
  min  \quad  & \sum_{(i,j) \in A}{t^0_{ij} . x_{ij}} + \sum_{(i,j) \in A}{(t^0_{ij}.\beta /c^0_{ij}) . x^2_{ij}} - \sum_{(i,j) \in A}{(t^0_{ij}.\beta /c^0_{ij}) . x^2_{ij} . y_{ij}} + \sum_{(i,j) \in A}{t^0_{ij}.(\beta /c^1_{ij}) . x^2_{ij} . y_{ij}}  \\
  s.t.  \quad \\
  & \sum_{(i,j) \in A}{ y_{ij}} = B \\
  & y_{ij} \in \{0, 1\} \quad \forall (i,j) \in A \\
\end{align}$$

Where the values of $x_{ij}$ are not decision variables anymore, they will be obtained from solving the Traffic Assignment problem with Gurobi which evaluates the travel times on the network.

#### The traffic assignment sub-problem

This is just part of the original NDP that assigns traffic to the network based on a set of given capacity values, which are defined based on the values of the DP decision variables (links selected for capacity expansion). The main difference (and the advantage) here is that by separating the binary decision variables, instead of a mixed integer programming problem, which are hard to solve, here we have a quadratic programming problem with continuous decision variables, which will be transformed to a linear problem that Gurobi can solve very fast.

$$\begin{align}
  min  \quad  & \sum_{(i,j) \in A}{t^0_{ij} . x_{ij}} + \sum_{(i,j) \in A}{(t^0_{ij}.\beta /c^0_{ij}) . x^2_{ij}} - \sum_{(i,j) \in A}{(t^0_{ij}.\beta /c^0_{ij}) . x^2_{ij} . y_{ij}} + \sum_{(i,j) \in A}{t^0_{ij}.(\beta /c^1_{ij}) . x^2_{ij} . y_{ij}}  \\
  s.t.  \quad \\
  & \sum_{s \in D}{x_{ijs}} = x_{ij} \quad \forall (i,j) \in A  \\
  & \sum_{j \in N; (i,j) \in A}{ x_{ijs}} - \sum_{j \in N; (j,i) \in A}{ x_{jis}} = d_{is} \quad \forall i \in N, \forall s \in D \\
  & x_{ij} \geq 0 \quad \forall (i,j) \in A \\
  & x_{ijs} \geq 0 \quad \forall (i,j) \in A, \forall s \in D \\
\end{align}$$


Where the values of $y_{ij}$ are constant and are defined by GA.

### PyMOO

PyMOO is a Python library that provides a comprehensive and easy-to-use framework for multi-objective optimization (MOO). For this case, we are going to deal with only one objective; nevertheless, this is an useful tool if you have more objectives. In addition, PyMOO easily allows us to define our optimization problem by specifying the objectives, constraints, and decision variables.

## Implementation in Python
The implementation in Python is shown in the notebooks for [MILP](./Project_MILP.ipynb) and [GA](./Project_GA.ipynb). The full notebooks including source data are provided [here](https://surfdrive.surf.nl/files/index.php/s/8DNGkJs54KzEnLB)

We can now start solving our problem!
```{figure} ./figs/outputopt.png
---
height: 500px
---
A solution of the problem
```