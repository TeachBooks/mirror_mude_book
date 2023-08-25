# Programming Overview

Riccardo ideas. For now, when in doubt add content to the JB. Can move text to website later as needed.
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
8. Some handy tricks (we can make a special page on the website to quickly illustrate things described above, and provide links to the theory, explanation and case studies in the textbook)



Loosely broken down into 4 Chapters, with some ideas for possible contents (will fine tune location as we create it!):

1. Golden Rules (part of Communication, but introduced at beginning to set the stage)
2. Computers: essentials concepts for Scientific Computation and Numerical Analysis 
   1. Machine code, compilers, low- and high-level languages; Bits and bytes, storage, memory, precision; File types (e.g., txt, csv, ipynb, py, md; text and binary); 
Data types (e.g., csv, JSON, netcdf, etc); FLOPS, run time; Complexity  
3. Code: Instructions. Executed. 
   1. Programming language (Python), Environments and package management, Fundamentals of programming, Executing code, Other languages 
4. Programs: essentials for scientific computing 
   1. Modular programming; Object-oriented programming, Version control, Debugging and error handling 
5. Communication (and documentation)
   1. Golden Rules, Visualization, Version control, Sharing your work (Static (*.ipynb, *.pdf, *.html) and Dynamic/Interactive (something with a Python kernel), Open-Source Projects / Collaboration 
   2. some of this may be moved to the website; most will be short, except git


Software is also considered a programming category, but that will be covered exclusively on the website.

**We will use this as the baseline "theory" this year with extra insight provided for use, and other topics as-needed. Links here for easy copy/paste.**

Part of the programming material for MUDE goes well beyond the scope of a typical BSc-level programming course (a MUDE pre-requisite), and part relies on the online course "Python for Engineers." Regardless of your background in Python, or programming in general, you can always benefit from learning and reviewing a few fundamentals of computer science.

The online course [Python for Engineers](https://tudelft-citg.github.io/learn-python/intro.html) provides a series of exercises as well, which you should use to practice your understanding of the topics. Since you should have Anaconda installed for MUDE, we recommend you download the notebook pages directly, where possible, and use your own Python kernel (e.g., a Jupyter notebook as a workbook) for the chapters that only require simple calculations.

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