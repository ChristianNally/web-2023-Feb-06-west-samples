[x] Review of Function Definition Syntax
[x] Callbacks: Function Valued Variables that we Pass Into Functions
[x] Let's Write Software For A Robot That Can Stay On It's Feet
[x] How to Read The Main Thread (function definitions are different from function executions)

# Review of how functions are defined

function iHaveAName(callback){
    // does some stuff
    callback("monkeyfuzz");
    return something;
}

iHaveAName(  p2 => console.log('p2:',p2)  );


* allow for unique pieces of code that don't require repetition (this enables using an anonymous function)
* to supply a conditional statement?

# Why do we want to use callbacks?

* it is to 'abstract out' some computation, i.e. to leave it undefined while we write a function
* that wraps logic around that 'abstracted' computation


# For functions executed by the Event Loop, you cannot retrieve the return value directly



# Robots

https://www.youtube.com/watch?v=_sBBaNYex3E

# What is asyncronicity?

# Events

# Nesting

# Advanced Reading

https://snyk.io/blog/nodejs-how-even-quick-async-functions-can-block-the-event-loop-starve-io/
