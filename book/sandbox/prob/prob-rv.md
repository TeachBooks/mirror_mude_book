# Random variables

From a previous course on probability and statistics you probably remember the use of Venn diagrams to aid our understanding of arithmetic involving probability. The box represented the sample space, with circles (and their relative size) representing various events and their probability of occurrence. The concept of a random variable is nothing more than a mapping of this sample space to a number line, which allows us to combine probability theory with calculus. We use a capital letter to denote a random variable and realizations of that random variable are described with a lower case letter. For example, consider a discrete random variable, $X$, which can take 1, 2 or 3 as possible outcomes. We can write the probability of each event mathematically as:

$
p_X(x_i)=P(X=x_i)
$

Where $i = 1,2,3$ and $P$ is mathematical notation for describing the event in the parenthesis. The function describes the probability for all outcomes of $P$ (i.e., the sample space), which, as implied by the axioms, should sum to 1.

This simple example is actually a discrete random variable, because the values of $X$ take on a finite number of values. For most of this course, however, we will work with continuous random variables, which can take on an infinite set of values. A key characteristic of continuous variables is that the probaility of an event must be defined over an interval. For example, we might be interested in the probability that $X$ takes a value between 3 and 4, which we will see in the next sections.

The mapping of a sample space to a number line combined with a (mathematical) specification of probability describes how probability is distributed across all events in the sample space. For this reason we use the term *probability distribution* to describe the mathematical functions defining probability for outcomes of a random variable, regardless of whether it is discrete or continous.