# Multivariate differentiation

(PM_gradient)=
## Gradient vector
For a multivariate function $f(x)$  where $x=\begin{bmatrix} x_1\\ \vdots\\x_n \end{bmatrix}$, the vector with enteries as partial derivatives with respect to $x_1,x_2,\dots,$ and $x_n$ is called the gradient vector and it is denoted as:

$$
\partial_x f= \begin{bmatrix} \partial f/\partial x_1\\ \vdots\\ \partial f/\partial x_n \end{bmatrix}.
$$

For example, let's assume  $x=\begin{bmatrix} x_1\\ x_2\\x_3 \end{bmatrix}$ and $f(x)=x_1^2+3x_2+\cos(x_3)$. Then the gradient vector of $f(x)$ is:

$$
\partial_x f= \begin{bmatrix} 2x_1\\3 \\-\sin(x_3)  \end{bmatrix}.
$$

## Gradient of linear functions
If $b$ and $x$ are the column vectors with the same size, the gradient of $f(x)=b^Tx=x^Tb$ with respect to $x$  is derived as:

$$
\partial_x f=b. 
$$

If $b$ is a $m\times1$ vector, $x$ is a $n\times1$, and $A$ is a matrix of size $m\times n$, the gradient of $f(x)=b^TAx=x^TA^Tb$ with respect to $x$  is derived as:

$$
\partial_x f=A^Tb.
$$

## Gradient of quadratic functions
If $x$ is the column vector of size $n\times 1$ , and $B$ is an square matrix of size $n\times n$,  the gradient of $f(x)=x^TBx=x^TB^Tx$  with respect to $x$  is derived as:

$$
\partial_x f=(B+B^T)x. 
$$

Note that if $B$ is a symmetric matrix, then $B^T=B$, and so the gradient of $f(x)=x^TBx=x^TB^Tx$  with respect to $x$  is derived as: 

$$
\partial_x f=2Bx.
$$

(PM_jacobian)=
## Jacobian matrix
Assume $m$ number of different multivariate functions as  $f_1(x),f_2(x),\dots, f_m(x)$, where $x=\begin{bmatrix} x_1\\ \vdots\\x_n \end{bmatrix}$. If we collect all the $f_i(x)$ functions in a column vector $F(x)$ as

$$
F(x)=\begin{bmatrix} f_1(x)\\ \vdots\\f_m(x) \end{bmatrix},
$$

$F(x)$ is itself a $m$-vector function of an $n$-vector variable $x$. For such a vector multivariate function, the $m\times n$ matrix of partial derivatives $\partial F_{i}/ \partial x_{j}$, denoted as $J_x$, is called  Jacobian matrix of $F$ defined as:

$$ 
J_x=\partial_{x^{T}} F =\left[\begin{array}{ccc}\partial F_{1} / \partial x_{1} & \ldots & \partial F_{1}/ \partial x_{n} \\\partial F_{2} / \partial x_{1} & \ldots & \partial F_{2}/ \partial x_{n} \\ \vdots & & \vdots \\ \partial F_{m} / \partial x_{1} & \ldots & \partial F_{m}/ \partial x_{n}\end{array}\right]. 
$$

For example, let $x=\begin{bmatrix} x_1\\ x_2\\x_3 \end{bmatrix}$ and  $ F(x)=\begin{bmatrix} x_1+x_2+x_3 \\ x_1^2+2x_2 \\ x_1^2+x_2^3+\cos(x_3)\end{bmatrix} $. Then the Jacobian matrix of $F(x)$ is derived as:

$$ 
J_x=\partial_{x^{T}} F =\left[\begin{array}{ccc}  1& 1& 1 \\ 2x_1&2 &0  \\ 2x_1 & 3x_2^2& -\sin(x_3) \end{array}\right].
$$