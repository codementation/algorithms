# Algorithms in Javascript

## You need to already understand/remember all these:

  * [Logarithm and Exponentiation](https://en.wikipedia.org/wiki/Logarithm):

    $
    log_b^{(x)} = y \\
    b^y = x
    $

    log<sub>2</sub><sup>(1024)</sup> = 10

    2<sup>10</sup> = 1024

  * [ Arithmetic progression ](https://en.wikipedia.org/wiki/Arithmetic_progression):

    $
    \Large
    \frac{n(a_1 + a_n)}{2}
    $

    $
    1+2+3+4+…+10 = \frac{10*(1 + 10)}{2} = 55
    $

  * [Geometric progression](https://en.wikipedia.org/wiki/Geometric_progression):

    $
    a, ar, ar^2, ar^3, ar^4,..., ar^n
    $

    * To find the ratio:

      $
      \Large
      \frac{a_2}{a_1}
      $

      $
      1, 2, 4, 8, ..., 1024
      $

      $
      \frac{2}{1} = 2
      $

    * To find the n<sup>th</sup> term is:

      $
      a_n = ar^{n-1}
      $

    * To find the number of terms:

      $
      \large
      a_n = \frac{log(\frac{a_n}{a_1})}{log(r)}+1
      $

      $
      1, 2, 4, 8, ..., 1024
      $

      $
      a_{n} = \frac{log(1024)}{log(2)} + 1 = 11
      $

    * To find the geometric series (sum of the terms):

      $
      \displaystyle\sum_{k=1}^n ar^{k-1} = \frac{a(1-r^n)}{1-r}
      $

      $
      1, 2, 4, 8, ..., 1024
      $

      $
      \frac{1(1-2^{11})}{1-2} = 2047
      $

  * [Linear function](https://en.wikipedia.org/wiki/Linear_function)

      $
      f(x) = ax + b
      $

  * [Quadratic function](https://en.wikipedia.org/wiki/Quadratic_function)

      $
      f(x) = ax^2 + bx
      $

  * [Cubic function](https://en.wikipedia.org/wiki/Cubic_function)

      $
      f(x) = ax^3 + bx
      $

  * [Ceiling, Floor, and Absolute function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math):

      `ceil(3.1) = 4, floor(3.1) = 3, abs(-7) = 7`

## Analysis
Analysis of Algorithm is a process to evaluate rigorously the resources (time and space) needed by an algorithm and represent the result of the evaluation with a (simple) formula.


The time/space requirement of an algorithm is also called the time/space complexity of the algorithm, respectively.

To measure algorithim efficiency, we count the number of operations (arithmetic, assignment, comparison, etc).

This is a way to assess its efficiency as an algorithm's execution time is correlated to the # of operations that it requires.


Knowing the (precise) number of operations required by the algorithm, we can state something like this: Algorithm X takes 2n2 + 100n operations to solve problem of size n.

Asymptotic analysis is an analysis of algorithms that focuses on analyzing problems of large input size n, considers only the leading term of the formula, and ignores the coefficient of the leading term.


We choose the leading term because the lower order terms contribute lesser to the overall cost as the input grows larger,

If algorithm A requires time proportional to f(n), we say that algorithm A is of the order of f(n).

We write that algorithm A has time complexity of O(f(n)), where f(n) is the growth rate function for algorithm A.
Mathematically, an algorithm A is of O(f(n)) if there exist a constant k and a positive integer n0 such that algorithm A requires no more than k*f(n) time units to solve a problem of size n ≥ n0, i.e., when the problem size is larger than n0 algorithm A is (always) bounded from above by this simple formula k*f(n).


## Sorting Algorithms

### Bubble Sort
Given an array of N elements, Bubble Sort will:

1. Compare a pair of adjacent items (a, b),
2. Swap that pair if the items are out of order (in this case, when a > b),
3. Repeat Step 1 and 2 until we reach the end of array
    * (the last pair is the (N-2)-th and (N-1)-th items as we use 0-based indexing)
    * by now, the largest item will be at the last position.
4. We then reduce N by 1 and repeat Step 1 until we have N = 1.

#### Bubble Sort Analysis
Comparison and swap require time that is bounded by a constant, let's call it c.

There are two nested loops in (the standard) Bubble Sort.

The outer loop runs for exactly N iterations.
But the inner loop runs get shorter and shorter:

* When i=0, (N−1) iterations (of comparisons and possibly swaps),
* When i=1, (N−2) iterations,
* ...,
* When i=(N−2), 1 iteration,
* When i=(N−1), 0 iteration.

Thus, the total number of iterations = (N−1)+(N−2)+...+1+0 = N*(N−1)/2 (derivation).

Total time = $c * n * (n−1)/2 = O(n^2)$

