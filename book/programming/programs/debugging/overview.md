# Debugging and Testing




<!-- ## Contents
- [Introduction](#Introduction)
- [Why are we doing testing](#Why-are-we-doing-testing)
- [What is debugging](#What-is-debugging)
- [Types of errors](#Types-of-errors)
- [Raising errors](#Raising-errors)
- [Handling errors](#try_except)
- [Assertions](#Assertions)
- [Logging](#Logging)
- [Exercises](#Exercises)
- [References and used resources](#References-and-used-resources) -->

This chapter is focused on software testing with Python---it focuses on a number of different topics to help you identify and fix errors. Incorporating the concepts in this chapter into your own coding practice will help you fix problems in the future, especially as you work on larger projects with multiple people. 

Some of the sections are marked as **\[Optional\]**. Those parts are not mandatory to study and if you wish, you may skip them.

## Why should we learn about software testing?

Testing our code is necessary, because we as humans all make mistakes. Some of our mistakes may not be that important, but some can be dangeours and harmful. There are numerous examples of the latter such as the explosion of the Ariane 5 rocket or the problem with NASA’s Mars Climate Orbiter. You can read more on these examples [here](https://medium.com/swlh/some-of-the-most-famous-bugs-in-software-history-bb16a2ee3f8e). Testing our code for hidden flaws is the first step towards ensuring that the programs we write are robust.

<p align="center">
<img src="https://static.wixstatic.com/media/cfc1ef_55f398d6fbdb418ea4970567251efe6a.png/v1/fill/w_680,h_476,al_c,q_95/cfc1ef_55f398d6fbdb418ea4970567251efe6a.webp" width="40%" 
     alt="Mars Climate Orbiter disaster - cartoon"/>
</p>     
<figcaption align = "left">A depiction of the NASA's Mars Climate Orbiter disaster. The incongruence in the units used by scientists at NASA (metric unit) and Lockheed Martin (US customary units) led the space probe too close to the planet. It was either destroyed in the atmosphere or escaped the planet's vicinity and entered an orbit around the Sun. (Source: Unleesh.com).</figcaption>

## What is debugging?

**Debugging** is the process of identifying code-related problems (bugs) by analysing the behaviour of the program we have written. Testing and debugging are complementary to one another. Testing is used to identify a bug, while debugging is used to fix a bug.

In the sections that follow, we will start to learn about errors as a practical way of identifying issues with our code. Then we will learn how to improve our code with testing to make it easier to debug in the future.

## References and used resources

- https://carpentries-lab.github.io/python-aos-lesson/08-defensive/index.html
- https://python-textbok.readthedocs.io/en/1.0/Errors_and_Exceptions.html
- https://docs.python.org/3/tutorial/errors.html
- https://coderefinery.github.io/testing/