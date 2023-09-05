# Programming Overview

<!-- Riccardo ideas. For now, when in doubt add content to the JB. Can move text to website later as needed.
1. theory + best practices with examples for efficient numerical practices
2. theory + best practices with examples of for loops (and not for loops)
3. ~~Visualization:~~
   1. how to reduce the size of images (matplotlib plots) when large datasets are used (can use SHIP project as a case study)
   2. ~~advanced figure creation: define axes as objects and modifying attribues (i have some recent examples from another TA if needed)~~
   3. ~~saving a figure (vector/raster; file types; optimize file size; automatically regenerate it; add a test?)~~
4. Memory considerations: how can you tell whether or not your code is working efficiently? (e.g., loading data, copies of objects, recopying or reloading on every nb run)
5. Run time:
   1. may need a bit of theory about computations, processor speeds, cores, comparison of disk, RAM, CPU/GPU etc, but doesn't need to be long, and perhaps we can find existing content with CC license to include directly (embedded video, copy content, direct link all ok...this applies to all generic programming and coding topics)
   2. strategies for evaluating code efficiency and identifying slowest parts to improve: in a notebook and in an IDE (VS Code).
   3. saving results of analyses---would this be pickle? ideally we should teach them how to create a JSON and binary (pickle) format, then they choose whats best (for example, the JSON is readable and may be useful to share with a colleague who cannot run nb's in combination with a PDF printout of the nb). This is a great example where we should have content in the book that then is referred to as needed when students run into issues in submitting reports (i.e., their nb is 10 MB, now what?)
6. IDE's: a brief overview, then a recommendation and case study with Jupyter Lab and VS Code
7. package management: we need some theory on this, but it should be concise. Since Robert is already working with the TA's about environments, maybe it's best to leave this one alone till the end
8. Some handy tricks (we can make a special page on the website to quickly illustrate things described above, and provide links to the theory, explanation and case studies in the textbook) -->

In this textbook the programming part is a collection of pages that cover key concepts of programming and computer science without diving too far into the details. As a pre-requeisite, it is assumed you have had a BSc-level introductory course in computer programming. It is not required that it used the Python language. Over the course of the semester, content will be added to this part of the textbook and organized under the five loosely defined Chapters below:

1. This Overview page.
2. The Golden Rules: key tips and guidelines for good Documentation and Communication; we will refer to these often. THe intention is that they help you form good programming habits that you will continue to use for the rest of your life.
3. Computers & Code: this may grow to include background information about computers (e.g., how they store data) as well as information specific to the Python language (e.g., environments and package management).
4. Programs: essentials for scientific computing (e.g., modular programming; object-oriented programming, version control, Debugging and error handling 
5. Communication (and documentation): visualization, version control, sharing your work

Software is also considered part of the programming learning line, but that will be covered exclusively on the module website, including instructions for installation and typical workflows.


## What can computers do for us?
As an engineer or scientist, you will deal with units of information which are called <b>data</b>. The most important tasks that a computer can do for us are:

1. Reading data
2. Processing data
3. Visualizing data

These are tasks that require many repetitions and high precision.

_1. Reading data_
Reading data means the computer acquires data from a source and places it into its volatile memory for processing. Volatile memory keeps the data stored until the power supply is interrupted. The way data is stored in a computer determines how the computer will be able to use it.

_2. Processing data_
Data processing is the manipulation of the stored data in a system. After processing data by performing transformations, calculations, and more, you get an output; results.

_3. Visualizing data_
We map data (original or found) to graphic elements to communicate clearly and efficiently the information contained in the data. A graphic element is an element of a chart, such as a line or a point in the chart.

## What is programming?

Programming is giving your computer a list of instructions for computations in a language it can understand. In your case, this language is Python. A computation is a series of arithmetical ("math") and non-arithmetical ("non-math") steps that transform input to output (result).
There are five different kinds of instructions for computations you use. By ordering and combining them, the computer can achieve results that fulfill the three tasks described earlier. The five kinds of instructions are:

<b>input:</b>
    Insert data from a file, the network, other devices, or simply by typing it in.
    
<b>output:</b>
    Display data on the screen, save them in a file, send it over the network, etc.

<b>math:</b>
    Perform basic mathematical operations like addition and multiplication.

<b>conditional execution:</b>
    Check for certain conditions before further instruction.

<b>repetition:</b>
    Perform instructions repeatedly, usually with some variation.

In addition to these traditional definitions of programming, in MUDE we also extend the term to include a larger range of tasks related to computers and computer science; for example, documentation and communication of your results, or sharing your code and analysis with others. This will be described elsewhere in this part of the textbook, but for now, we will focus on the Python programming language.

## Introduction to Python

**Why do you need Python?**
    
Python is a computer programming language that is widely used in both academia and industries related to Civil Engineering, Environmental Engineering and Applied Earth Sciences. Being skilled in Python will help you on multiple occasions, including in your master courses. _

The features of Python are what make it so popular. From the definition available on the corresponding Wiki page: <i> "Python is an <b>interpreted</b> <b>high-level</b> <b>general-purpose</b> <b>programming language</b>. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs, as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects."</i>. Quite a simple, yet concise description due to the meaning hidden behind each buzzword:

<ul>
<li> <b>Interpreted</b> means that there is an <b>interpreter</b>, a software tool, which reads and performs instructions written in Python. If your laptop, phone, or refrigerator has the interpreter, it can run most of the Python scripts!
<li> <b>High-level</b> means that the programming language operates with abstract and more easily understandable concepts. In other words, you don't have to write or understand, code related to the hardware part of your machine (like binary code or assembly).
<li> <b>General-purpose</b> means that the amount of Python application fields are endless. You can write Python scripts to manage and automate some primitive tasks for yourself, you can use it for data science, create your own machine / deep learning project, write your personal web application or even develop a game. 
<li> <b> Programming language </b>means a set of specific predefined semantics, instructions, and syntax rules, which are used for writing necessary instructions. It is strictly defined, meaning that 99.99% of all errors in the code are made by the coder, not by the computer.
</ul>

Python scripts run with the help of a Python interpreter, but they can be written by using different software tools. Just like as you write your essay (you can type it in Word, Google Docs, Overleaf, or even on plain paper) you can write your Python code with different editors. You could use the default notepad, notepad++, find a proper website with an inbuilt code editor & interpreter (<a href="https://ideone.com/">IDEone</a>, for example), or use specialized Python code editors (Spyder, PyCharm, Visual Studio, etc). In all cases you will produce a set of instructions, which are stored in a file with the <b>*.py</b> extension and the interpreter will run it completely (from top to bottom).

For this course we will use a slightly different approach to developing a Python script: <b>IPython</b> and <b>Jupyter Notebooks</b>. Think of these as two freely-available tools that add extra functionality to the basic Python programming language. As an example, imagine the camera built into your phone: on it's own it can take pictures, but there are many apps that add filters or sharing via social media that make the impact of your photos much more powerful. This is exactly what IPython and Jupyter Notebooks do for Python, and why they are such important tools in the toolbox of modern engineers. The next Chapter will introduce you to your Python Toolbox for this course!


## Online Course: Python for Engineers
<!-- *We will use this as the baseline "theory" this year with extra insight provided for use, and other topics as-needed. Links here for easy copy/paste.* -->

Part of the programming material for MUDE goes well beyond the scope of a typical BSc-level programming course (a MUDE pre-requisite), and part relies on the online course "Python for Engineers." Regardless of your background in Python, or programming in general, you can always benefit from learning and reviewing a few fundamentals of computer science. The online course [Python for Engineers](https://tudelft-citg.github.io/learn-python/intro.html) provides a series of exercises as well, which you should use to practice your understanding of the topics. Since you should have Anaconda installed for MUDE, we recommend you download the notebook pages directly, where possible, and use your own Python kernel (e.g., a Jupyter notebook as a workbook) for the chapters that only require simple calculations. Links to each chapter are provided here for easy reference.

Chapters from online course "Python for Engineers":
1. [Variables, operators and functions](https://tudelft-citg.github.io/learn-python/01/Theory/01.html#)
2. [Modules, conditions, data structures and loops](https://tudelft-citg.github.io/learn-python/02/Theory/01.html#)
3. [Advanced strings and functions, files and debugging](https://tudelft-citg.github.io/learn-python/03/Theory/01.html#)
4. [Objects and References](https://tudelft-citg.github.io/learn-python/04/Theory/01.html#)
5. [Numpy](https://tudelft-citg.github.io/learn-python/05/Theory/01.html#)
6. [Pandas](https://tudelft-citg.github.io/learn-python/06/Theory/01.html#)
7. [Matplotlib](https://tudelft-citg.github.io/learn-python/07/Theory/01.html#)

Chapter summaries, "In a Nutshell", from online course "Python for Engineers":
1. [Variables, operators and functions](https://tudelft-citg.github.io/learn-python/01/In_a_Nutshell/01.html#)
2. [Modules, conditions, data structures and loops](https://tudelft-citg.github.io/learn-python/02/In_a_Nutshell/01.html#)
3. [Advanced strings and functions, files and debugging](https://tudelft-citg.github.io/learn-python/03/In_a_Nutshell/01.html#)
4. [Objects and References](https://tudelft-citg.github.io/learn-python/04/In_a_Nutshell/01.html#)
5. [Numpy](https://tudelft-citg.github.io/learn-python/05/In_a_Nutshell/01.html#)
6. [Pandas](https://tudelft-citg.github.io/learn-python/06/In_a_Nutshell/01.html#)
7. [Matplotlib](https://tudelft-citg.github.io/learn-python/07/In_a_Nutshell/01.html#)