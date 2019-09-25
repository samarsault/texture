---
layout: post
title:  "What is randomness? Why randomness is important in computational science?"
date:   2019-09-25
---
### What is randomness? Why randomness is important in computational science?

Randomness is very easy and intuitive concept for most of us. For random event, like rolling a fair dice, observer will never know the outcome until the dice is settled. On the contrast, predictable event is not random event, like asking whether a UBC MDS student has a MDS backpack. Furthermore, according to the Wikipedia, randomness is the lack of pattern or predictability in events.

Although randomness is a simple concept, it plays a significantly role in computational science, and it just like a super powerful key to many mysterious locks.  For example, we want to know the area of an imperfect circle. Firstly, we can make a square around the circle, and the area of the square is very easy to obtain. Then, let us throw a bunch of sticky beans onto the square area with wanted circle in it. After all the beans are settled, by counting, we will know the ratio between the number of beans within the boundary of the circle and the total number of beans. Based on that ratio, we can have a rough estimate about the area of the circle through multiplying the area of square by obtained ratio. As we increase the number of beans we throw out, averaging the results from repeated experiments, the estimation becomes more and more accurate. 

<img src="for_demo.png" width="500"/>



Moreover, the randomness of throwing beans is very crucial. If the beans are not randomly distributed over the entire setup, then the ratio of counts will not represent the ratio of areas. For example, if we intend to put more beans within the circle, we will overestimate the area of circle. Thus, except for the number of total beans, the randomness is the key to get the precise answer. This type of method that relies on repeated random sampling to obtain numerical result is called Monte Carlo method, and it is an important method in computational science.

Usually, random sampling is done by computer. We can use random number generator in Python or R to get a random sequence. However, those ‘random’ numbers are not truly random. The generator has deterministic algorithms to make up the random sequence. If we set the initial value to the generator, then we will keep getting the same random number series every time we run it. Thus, random number generator is truly random, because it is predictable. 

Truly randomness can be achieved by natural process, like decay of isotopes and thermal noise from electrical conductor. Scientists can use instruments to record those random processes and transfer them into usable numerical data. In advanced computation task, the randomness will affect the quality of result much more significantly than our simple imperfect-circle example.
