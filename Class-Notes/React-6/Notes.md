# Closures and Stale Closure ( A quick revision )

# **Closures :**

Imagine you have a function, let's call it `outerFunction`. Inside this `outerFunction`, you define another function, called `innerFunction`. Now, `innerFunction` can access variables from `outerFunction`. That's the basic idea of a closure.

Here's some code to illustrate:

```jsx
function outerFunction() {
  let outerVariable = "I'm outside!";

  function innerFunction() {
    console.log(outerVariable); // innerFunction can access outerVariable
  }

  return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Outputs: "I'm outside!"

```

In this above example, `innerFunction` is a closure because

- it "closes over" the `outerVariable`.
- Even after `outerFunction` has finished running, `innerFunction` still has access to `outerVariable`. That's why when we call `myClosure()`, it outputs `"I'm outside!"`

# **Stale Closure :**

A stale closure occurs when an inner function captures a variable from an outer function, and that variable changes after the inner function is defined. Because closures capture variables by reference, not by value, the inner function might not behave as you'd expect.

```jsx
/* Stale Closure */
function counter(initValue) {
  let count = initValue
  function increment() {
    count += 1
    console.log(count)
  }

  let message = `Count is ${count}`
  function getCount() {
    return message
  }

  return [increment, getCount]
}
const [increment, getCount] = counter(0)
increment() // 1
increment() // 2
increment() // 3
// Does not work!
console.log(getCount()) // Current value is 0
```

**In a nutshell :**

Stale Closure is a situation where you might expect a closure to capture a fresh variable, but it ends up using an "outdated" or "stale" one instead. This can lead to some unexpected behavior.