# Saving API Response In React Component (Notes) :-

# Network Requests from React Component

In this lesson, We will talk about how we can build a react component where in a network request can be made on button click ( click event ).

Let’s take this example of a simple API request whenever a user clicks a button ( on click event )

```jsx
├── src
│   ├── App.jsx
│   ├── components
│   │   └── PostItem.jsx
│   └── main.jsx
```

App.jsx

```jsx
import { useState } from "react";
import PostItem from "./components/PostItem";

const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState(false);

  const fetchAndUpdateData = async () => {
    setLoading(true);
    try {
      let data = await getData(
        `https://jsonplaceholder.typicode.com/posts?_limit=10`
      );
      setPosts(data);
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h1>Something went wrong... please refresh</h1>;
  }

  return (
    <>
      <h1>Click on the below button to get posts</h1>
      <button onClick={fetchAndUpdateData}>GET POSTS</button>
      {posts.map((post) => (
        <PostItem key={post.id} id={post.id} title={post.title} />
      ))}
    </>
  );
}

export default App;
```

PostItem.jsx

```jsx
const PostItem = ({ id, title }) => {
  return (
    <div style={{ border: "1px solid black", margin: "20px", padding: "10px" }}>
      <p>{id}</p>
      <p>{title}</p>
    </div>
  );
};

export default PostItem;
```

If you observe the above example :

1. `**click**` is the event ( Button Click )
2. `**fetchAndUpdateData**` is the event handler









# Side Effects, Pure And Impure Functions (Notes) :- 


# Pure/impure functions and side effects

## Introduction :

The concepts of pure and impure functions, along with side effects, are very crucial for writing clean, maintainable, and predictable code. This lesson delves into what pure and impure functions are, explores the notion of side effects. 

## Detailed Explanation :

### Pure Functions :

1. **Definition**: A pure function is a function that, given the same input, will always return the same output and does not cause any observable side effects.
2. **Characteristics**:
    - **Deterministic**: For the same set of inputs, the function always produces the same output.
    - **No Side Effects**: The function doesn't alter any external state (e.g., global variables, I/O operations ).

### Impure Functions :

1. **Definition**: An impure function is one that may produce different outputs for the same input or causes side effects.
2. **Characteristics**:
    - **Non-Deterministic**: The output might vary even with the same inputs.
    - **Side Effects**: The function may modify some external state or depend on external variables.

### Side Effects :

- **Meaning**: A side effect is any application state change that is observable outside the called function other than its return value. Common side effects include modifying a global variable, writing to a database, or altering the DOM in a web page.
- **Implications**: While not inherently bad, side effects, if not managed well, can lead to issues like hard-to-track bugs and difficulties in understanding and maintaining code.

## Use-Case & Benefits :

- **Predictability**: Pure functions increase predictability in code. This makes it easier to debug and test functions.
- **Reusability**: Pure functions, by virtue of not depending on the external state, are more reusable across different parts of an application.
- **Concurrency**: Pure functions facilitate concurrent programming by avoiding issues like race conditions since they don’t alter external state.

## Real World Examples :

1. **Pure Function Example in JavaScript**:
    
    ```jsx
    function sum(a, b) {
      return a + b;
    }
    ```
    
    Here, `sum` is pure because it always returns the same result with the same inputs and does not modify any external state.
    
2. **Impure Function Example in JavaScript**:
    
    ```jsx
    let count = 0;
    function incrementCount() {
      count += 1;
      return count;
    }
    ```
    
    `incrementCount` is impure as it modifies the external variable `count`.
    

## Usage

- **In Web Development**: When developing web applications, especially with frameworks like React, understanding pure and impure functions is crucial. For instance, in React, components should ideally represent pure functions with respect to their props for predictable rendering behavior. We will discuss it in detailed fashion
- **Best Practices**: Aim to use pure functions whenever possible. When impure functions are necessary (e.g., for I/O operations), clearly isolate and manage them to minimize unintended side effects.

## Learners Activity

- **Exercises**:
    1. Write a pure function to calculate the area of a square.
    2. Modify an existing impure function to make it pure.
    3. Identify the side effects in a given piece of code.
- **Project**: Develop a small application or a component in React where the emphasis is on using pure functions and managing side effects effectively.

## Conclusion

Understanding pure and impure functions and the concept of side effects has practical implications, especially in React. Embracing these concepts leads to more robust, maintainable, and predictable code. Remember, the aim is not to avoid impure functions and side effects altogether but to understand and manage them effectively.









Task 1 : Complete the missing functionality
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  function fetchAndUpdateData() {
    // Clicking on the button Get and Display post should make an API request to https://jsonplaceholder.typicode.com/posts?_limit=5
    // Get the response display as a card with id,title,body
    // use data to save the response in local state
  }

  return (
    <>
      <h1>
        Clicking on this button should fetch the data from JSON Placeholder API{" "}
      </h1>
      <button onClick={fetchAndUpdateData}>Get and Display Post</button>
    </>
  );
}

export default App;
Task 2 : Make an API call, get the data and display the data without any data as soon as the component renders;
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  function fetchAndUpdateData() {

  }

  return (
    <>
      <h1>
        Clicking on this button should fetch the data from JSON Placeholder API{" "}
      </h1>
    </>
  );
}

export default App;
Task 3 : Make an API Request, get the data and save the data in local state as soon as component mounts using useEffect Hook
Some points to quickly remember :
Side effects - operations that require you to go and interact with external APIs ("external world --> server, document (browser api), localStorage, setTimeout, any external subscription ")
In React projects, we perform side effect lot of time. so side effect is not a bad thing.
How we handle this side effect matter a lot. if we do not handle properly, your application will have problems/bugs..
Side effects should not be perform during the render phase; you should not block the render process
React gives a hook(function), which handles side effect in react components properly.
How useEffect will handle side effect ??
I will call it after the mount/initial-render process is completed
Using useEffect, one can perform side effect as soon as
Mount event/phase
Update event/phase
Unmount event/phase Happens...
Syntax :
useEffect(function () {
    // whatever side effects i want to perform can be performed here;
    // this callback function is called after the initial mount/ initial render
    fetchAndUpdateData();
  });

BoilerPlate Code :

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(function () {
    // Complete the code
  },[])


  async function fetchAndUpdateData() {
    // Complete the code
  }

  console.log("third");
  return (
    <>
      <br />
      {data.map((post) => (
        <div
          key={post.id}
          style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
        >
          <p>ID : {post.id}</p>
          <p>Title : {post.title}</p>
        </div>
      ))}
    </>
  );
}

export default App;

Task 4 : Make an API Request, get the data and save the data in local state as soon as component mounts/updates using useEffect Hook
callback inside useEffect should be called during the mount phase;
callback inside useEffect should be called whenever page value changes;
boiler plate code

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(
    // complete the code
  );

  async function fetchAndUpdateData(page) {
    // complete code
  }

  console.log("third");
  return (
    <>
      <div className="pagination">
        <button
          onClick={function () {
            setPage(page - 1);
          }}
        >
          PREVIOUS
        </button>
        <p>{page}</p>
        <button
          onClick={function () {
            setPage(page + 1);
          }}
        >
          NEXT
        </button>
      </div>
      <br />
      {data.map((post) => (
        <div
          key={post.id}
          style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
        >
          <p>ID : {post.id}</p>
          <p>Title : {post.title}</p>
        </div>
      ))}
    </>
  );
}

export default App;









# Lifecycle of a React Component

# Component Lifecycle in React :

React components follow a lifecycle, which is a series of events from the moment they are created and mounted on the UI to the moment they are removed from the UI. 

### Different phases/events of component’s lifecycle :

Similar to a person’s lifecycle; A component’s lifecycle also has 3 phases 

1. **Birth (Mount Phase)**: The component is created and rendered on the UI for the first time.
2. **Life (Update Phase)** :  Occurs when a component's state or props change, leading to re-rendering.
3. **Death (Unmount Phase)**: The component is removed from the UI.

So these are basically events. mount event, update event and unmount event. 

### Event and Event Handlers  ( A Quick Recap ) :

Events in React, like in JavaScript, trigger certain actions (event handlers). 

For instance, 

```jsx
window.addEventListener('load', function() {...}) //  This is an event that triggers when the window loads.
// Event --> load
// Event Handler --> the function
```

```jsx
let someButton = document.createElement('button')
someButton.addEventListener('click',() => {
	// what should happen when the button is clicked
})
// Event --> click
// Event Handler --> the function here
```









# Side Effects or Effects

- Side effects or effects
    - Introduction
    - Some examples

# Effects or Side effects :

Side effects are operations outside the component's scope, such as API calls, timers, or manipulating the DOM directly.

To understand this. let’s take a simple example

### Example 1 : Counter/Todo and Working with Document API of browser

Build a simple counter that gets incremented on click of a button

```jsx
import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>INCREASE COUNT</button>
    </div>
  )
}

export default App
```

**Problem statement 1** : I want to change the title of the page from the default title to `“Counter Application"` from my `App` component as soon as the component is mounted onto UI. ( mount event )

For this, from my react functional component `App` ; I have to interact with `document` API which is a browser API. 

- This means I have to go outside the scope of my component and interact with document API.
- This means I have to perform a side effect.

**What is side effect ?**

In React, a "side effect" or “effect” is any operation that interacts with the outside of a component's scope. To put it in simple words - “side effect” is when you have to go outside the scope of your react component and interact with “outside world”

This can include things like:

**Some Real World Examples :** 

1. Making API calls to get or send data ( Fetch or Axios )
2. Setting up subscriptions or event listeners ( Interacting with some external API )
3. Interacting with document API which is a browser API 
4. Using timers ( using `setTimeout` , `setInterval` etc which are browser API )
5. Using local storage which is again a browser API

Coming back to the problem statement. I now have to use document API ( perform “sideeffect”  ) in my App component as soon as the component is mounted. 

Initially you might feel like doing something like this

```jsx
import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  document.title = "Counter Application" /** THIS IS NOT THE RIGHT WAY **/

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>INCREASE COUNT</button>
    </div>
  )
}

export default App
```

**The problem with the above approach :**

Side effects are operations that can't be done during the rendering process and need to be handled separately. So in the above example, you can’t block the rendering process and interact with document API. 

**Reason** : These side effect operations wherein you go and interact with outside APIs are unpredictable. You don’t know how long is it gonna take for that operation to complete. Are we going to block the component render till that time ??

No

So how do we handle these side effects ?

By using `useEffect` hook from react









# Effects and useEffect I - Mount phase

- useEffect
    - Introduction
    - Syntax
    - Order of execution
- Handling side effects during mount phase using useEffect hook
    - Basic Example
    - Advance Example

# useEffect :

React provides the `useEffect` hook to handle side effects in React components. The `useEffect` hook runs after render thereby you don’t endup blocking the rendering process. 

**useEffect Syntax :**

```jsx
useEffect( callbackFunction, dependancyArray )
useEffect(()=>{
	
},[])
```

So the above code will be updated to something like this

```jsx
import { useState, useEffect } from "react"
// Step 1: import useEffect
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  // Step 2 : call useEffect and pass callback function inside it;
  useEffect(() => {
    console.log("callback function inside useEffect is called")
    document.title = "Counter Application"
  })

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>INCREASE COUNT</button>
    </div>
  )
}

export default App
```

### Order of execution of callback inside `useEffect` :

Check this one out

```jsx
import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  console.log("line no 8") // Order of execution --> 1
  useEffect(() => {
    // Order of execution --> 4
    console.log("callback function inside useEffect is called")
    document.title = "Counter Application"
  })

  console.log("line no 15") // Order of execution --> 2

  return (
    // // Order of execution --> 3
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>INCREASE COUNT</button>
    </div>
  )
}

export default App
```

With this above approach, Now instead of performing side effects during the render process which is not ideal. We perform side effects after the rendering is completed as the callback inside useEffect is called after the rendering is completed.

Since this methods allows us to run side effect after render. It is also called “after-render” methods.

That is how side effects are handled in react. 

# Handling side effects during mount phase using useEffect hook :

The callback inside `useEffect` gets called after initial render, and also after every re-render. What if I want the callback to be called only during the inital render ( “***as soon as the component mounts”*** ). 

**Solution :**

The dependency array in `useEffect` controls when the effect should run. An empty array `[]` means the effect runs once after the initial render ( Mount phase )

```jsx
function App() {
  const [count, setCount] = useState(0)

  console.log("line no 8")
  useEffect(() => {
    console.log("callback function inside useEffect is called")
    document.title = "Counter Application"
  }, [])

  console.log("line no 15")

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>INCREASE COUNT</button>
    </div>
  )
}
```

## Practical Examples of using `useEffect` during mount phase :

Using `useEffect`, we can fetch data from APIs after the component mounts 

### Remember this example from Network Requests from React Component

Let’s take this example of a simple API request whenever a user clicks a button ( on click event )

```jsx
├── src
│   ├── App.jsx
│   ├── components
│   │   └── PostItem.jsx
│   └── main.jsx
```

App.jsx

```jsx
import { useState } from "react";
import PostItem from "./components/PostItem";

const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState(false);

  const fetchAndUpdateData = async () => {
    setLoading(true);
    try {
      let data = await getData(
        `https://jsonplaceholder.typicode.com/posts?_limit=10`
      );
      setPosts(data);
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h1>Something went wrong.. please refresh</h1>;
  }

  return (
    <>
      <h1>Click on the below button to get posts</h1>
      <button onClick={fetchAndUpdateData}>GET POSTS</button>
      {posts.map((post) => (
        <PostItem key={post.id} id={post.id} title={post.title} />
      ))}
    </>
  );
}

export default App;
```

PostItem.jsx

```jsx
const PostItem = ({ id, title }) => {
  return (
    <div style={{ border: "1px solid black", margin: "20px", padding: "10px" }}>
      <p>{id}</p>
      <p>{title}</p>
    </div>
  );
};

export default PostItem;
```

If you observe the above example :

1. `**click**` is the event ( Button Click )
2. `**fetchAndUpdateData**` is the event handler

### Making an API call during the mount phase :

**Here’s the problem statement  :**

I do not want to make an API call on `click` event but I want to make API call on `mount` event. Because that is how any website work right ? As soon as the page loads/ component is mounted onto UI, You make an API call, you get the data and you display the same onto UI. 

So till now the trigger to make an API call was button click ( `click` event ) . But now the trigger to make this API call is as soon as the *“component mounts”*. So trigger is `mount` event.

Okay.. But how ? How can I make an API call as soon as the component mounts ?

Can we do something like this wherein we remove button and `click` event and instead invoke `fetchAndUpdateData` directly during the rendering of component ?

```jsx
import { useState } from "react";
import PostItem from "./components/PostItem";

const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState(false);

  const fetchAndUpdateData = async () => {
    setLoading(true);
    try {
      let data = await getData(
        `https://jsonplaceholder.typicode.com/posts?_limit=10`
      );
      setPosts(data);
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };

	// fetchAndUpdateData is invoked/called during the rendering of component

  fetchAndUpdateData();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h1>Something went wrong.. please refresh</h1>;
  }

  return (
    <>
      <h1>Get posts as soon as the component renders</h1>
      {posts.map((post) => (
        <PostItem key={post.id} id={post.id} title={post.title} />
      ))}
    </>
  );
}

export default App;
```

**The problem with the above approach** : Typically whenever there are “side-effects” or “effects” in our component. They shouldn’t be called during the rendering of the component since these are unpredictable. We can’t block the rendering of component till the API call is completed. Not a good user experience. 
Also you might see too manys re-renders error in your console ( a rather not-so-recommended thing to try but do check it out and think why ?? )

So the above code will be updated to something like this. 

```jsx
import { useState, useEffect } from "react";
// Step 1 : Import useEffect from react library similar to how you have imported useState hook;
import PostItem from "./components/PostItem";

const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState(false);

  const fetchAndUpdateData = async () => {
    setLoading(true);
    try {
      let data = await getData(
        `https://jsonplaceholder.typicode.com/posts?_limit=10`
      );
      setPosts(data);
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };

  // Step 2 : Invoke/call useEffect and pass a callback function inside it;
  useEffect(() => {
    // Step 3 : Perform side effects here; basically meaning you can call fetchAndUpdateData here;
    // Step 4 : add an empty dependency array as second argument;
    fetchAndUpdateData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h1>Something went wrong.. please refresh</h1>;
  }

  return (
    <>
      <h1>Get posts as soon as the component renders</h1>
      {posts.map((post) => (
        <PostItem key={post.id} id={post.id} title={post.title} />
      ))}
    </>
  );
}

export default App;
```

With this above approach, Now instead of performing side effects during the render process which is not ideal. We perform side effects after the rendering is completed as the callback inside useEffect is called after the rendering is completed.

And this is how `useEffect` hook from react allows side effects to be handled after render, ensuring they don't block the rendering process.










Effects and useEffect II - Update phase
Handling side effects during update phase using useEffect hook
Basic Example
Advance Example
Handling side effects during update phase using useEffect hook : 
Remember this example we have done in the effects and useEffect. 
function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("callback function inside useEffect is called")
    document.title = "Counter Application"
  }, [])

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>INCREASE COUNT</button>
    </div>
  )
}
​
Let’s make some modifications to the above code :
We have added another state variable called flag here
function App() {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false) // Added some state value flag which can be updated by some button click

  console.log("line no 8")
  useEffect(() => {
    console.log("callback function inside useEffect is called")
    document.title = `count is ${count}`
  }, [])

  console.log("line no 15")

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>INCREASE COUNT</button>
      <br />
      <button onClick={() => setFlag(!flag)}>{flag.toString()}</button> // This button can modify state `flag`
    </div>
  )
}
​
Here are some observations : 
If i do not pass dependancy array
If i pass empty dependancy array
The callback inside useEffect is called after initial render ( mount phase ) 
The callback inside useEffect is called after initial render ( mount phase ) 
The callback inside useEffect is called Whenever the count values or even when flag value changes. So basically anytime the component renders or re-render. The callback inside useEffect is called 
callback inside useEffect will not be called when the count value changes or flag value changes 
We also know that the dependency array in useEffect controls when the effect should run.
 An empty array [] means the effect runs once after the initial render
No dependancy array means the effect runs after every render
If we include variables in dependancy array then it'll run when those variables change. The variables are basically any state or prop value
So If I further modify the above code to
We have added count as dependency to useEffect hook.
function App() {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)

  console.log("line no 8")
  useEffect(() => {
    console.log("callback function inside useEffect is called")
    document.title = `count is ${count}`
  }, [count])

  console.log("line no 15")

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>INCREASE COUNT</button>
      <br />
      <button onClick={() => setFlag(!flag)}>{flag.toString()}</button>
    </div>
  )
}
​
Some of the observations here
If I do not pass dependancy array
If I pass empty dependancy array
If I pass some variable in dependancy array
The callback inside useEffect is called after initial render ( mount phase ) 
The callback inside useEffect is called after initial render ( mount phase ) 
The callback inside useEffect is called whenever the value of that variable changes. The variable can be any state or prop value
The callback inside useEffect is called Whenever the count values or even when flag value changes. So basically anytime the component renders or re-render. The callback inside useEffect is called 
callback inside useEffect will not be called when the count value changes or flag value changes 
The callback inside useEffect is not called whenever the value of flag changes. Though the component re-renders. Since the callback function inside useEffect is only dependant on count value now
A Quick Recap of useEffect : 
I want to perform some side effect during the initial render ( as soon as the component mount ) or also called mount phase/event.
// This will run the callback function inside useEffect 
	// 1. During the mount phase ( initial render )
useEffect(() => {
   // Called during the mount phase
  }, []) // You'd keep the dependancy array empty
​
I want to perform some side effect during the update phase
// This will run the callback function inside useEffect 
	// 1. During the mount phase ( inital render )
	// 2. During the update phase ( whenever the component re-renders due to change in any variable ). Not so ideal

useEffect(() => {
    // called everytime
  }) // No dependancy array is passed here
​
// This will run the callback function inside useEffect 
	// 1. During the mount phase ( inital render )
	// 2. During the update phase. whenever the variable inside dependancy array is updated 
useEffect(() => {
   // called during mount phase and when dependancyVariable changes
  },[dependancyVariable]) // dependancy array with dependancyVariable is passed here
​
Practical Examples of using useEffect during update phase : 
The dependency array in useEffect controls when the effect should run. An empty array [] means the effect runs once after the initial render, while including variables ( Any state or prop value typically ) means it'll run when those variables change.
Using this concept; Let’s see how we generally use something like by applying it to some real world example. 
Here’s some code we have done so far
Here’s the problem statement  :
I want to implement pagination. Whenever page value changes, the UI should also get updated with the relevant data
Understanding the API 
Let’s make some changes to the above code
Pagination implemented
Whenever page value changes; UI is updated with the latest data. 
Basically effect is being called
During the mount phase
Whenever the page value changes ( update phase )
import { useState, useEffect } from "react";
import PostItem from "./components/PostItem";

const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState(false);
  // Step 1 : Implement pagination
  const [page, setPage] = useState(1);

  // Step 2 : add page as dependancy and update url accordingly;
  useEffect(() => {
    fetchAndUpdateData(page);
  }, [page]);

  const fetchAndUpdateData = async () => {
    setLoading(true);
    try {
      let data = await getData(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      setPosts(data);
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h1>Something went wrong.. please refresh</h1>;
  }

  return (
    <>
      <h1>
        Get posts on mount phase and Update posts whenever page number changes
      </h1>
      {/* Step 3 : Buttons to update page number */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={() => setPage(page - 1)}>PREVIOUS</button>
        <p style={{ padding: "20px", fontWeight: "bolder" }}>{page}</p>
        <button onClick={() => setPage(page + 1)}>NEXT</button>
      </div>
      {posts.map((post) => (
        <PostItem key={post.id} id={post.id} title={post.title} />
      ))}
    </>
  );
}

export default App;










Effects and useEffect II - Update phase extended
In this chapter, We will try and see how we can further make our application better. Let’s introduce these features 
Disable buttons appropriately
Previous button should be disabled on first page
Next button should be disabled on last page
Pagination wherein you will have multiple page buttons like  
Previous 1 2 3 4 5 6 7 8 9 10 Next
​
Phase 1 : How do we disable previous and next buttons when required
import { useState, useEffect } from "react";
import PostItem from "./components/PostItem";

const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    // Step 2 : get the total count value from API response headers and return from this function
    let totalCount = +res.headers.get("x-total-count");
    return {
      data,
      totalCount,
    };
  } catch (error) {
    throw new Error(error);
  }
};

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState(false);
  const [page, setPage] = useState(1);
  // Step 1: Added totalPages state and this needs to be updated accordingly with the value from API responses;
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchAndUpdateData(page);
  }, [page]);

  const fetchAndUpdateData = async () => {
    setLoading(true);
    try {
      let response = await getData(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      setPosts(response.data);
      // Step 3 : Set total page state value by proper logic
      setTotalPages(Math.ceil(response.totalCount / 10));
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h1>Something went wrong.. please refresh</h1>;
  }

  return (
    <>
      <h1>
        Get posts on mount phase and Update posts whenever page number changes
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Step 4 : disable the button accordingly based on page number */}
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREVIOUS
        </button>
        <p style={{ padding: "20px", fontWeight: "bolder" }}>{page}</p>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          NEXT
        </button>
      </div>
      {posts.map((post) => (
        <PostItem key={post.id} id={post.id} title={post.title} />
      ))}
    </>
  );
}

export default App; 
​
Phase 2 : Pagination wherein you will have multiple page buttons like  Previous 1 2 3 4 5 6 7 8 9 10 Next
import { useState, useEffect } from "react";
import PostItem from "./components/PostItem";

const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    // Step 2 : get the total count value from API response headers and return from this function
    let totalCount = +res.headers.get("x-total-count");
    return {
      data,
      totalCount,
    };
  } catch (error) {
    throw new Error(error);
  }
};

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState(false);
  const [page, setPage] = useState(1);
  // Step 1: Added totalPages state and this needs to be updated accordingly with the value from API responses;
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchAndUpdateData(page);
  }, [page]);

  const fetchAndUpdateData = async () => {
    setLoading(true);
    try {
      let response = await getData(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      setPosts(response.data);
      // Step 3 : Set total page state value by proper logic
      setTotalPages(Math.ceil(response.totalCount / 10));
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h1>Something went wrong.. please refresh</h1>;
  }

  return (
    <>
      <h1>
        Get posts on mount phase and Update posts whenever page number changes
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Step 4 : disable the button accordingly based on page number */}
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREVIOUS
        </button>
        {/* <p style={{ padding: "20px", fontWeight: "bolder" }}>{page}</p> */}
        {new Array(totalPages).fill(0).map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            style={{
              backgroundColor: page === index + 1 ? "black" : "white",
              color: page === index + 1 ? "white" : "black",
              margin: "5px",
            }}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          NEXT
        </button>
      </div>
      {posts.map((post) => (
        <PostItem key={post.id} id={post.id} title={post.title} />
      ))}
    </>
  );
}

export default App;









### CLASS-NOTES ###




- State management :- Store any information that's keep changing which is related to UI that's basicly state management.


- In Terminal
  - touch Notes.md
  - code Notes.md


# Lifecycle of React Component

# Lifecycle :-
  - 1. Mount Phase / Mount Event
  - 2. Update Phase / Update Event
  - 3. Unmount Phase / Unmount Event

1. The first time when the component is mounted/rendering/atach to the UI/DOM/Display that's phase is called mount pahse.

2. When the any component get's updated using setState method of the component that's phase is called update phase.
  - setState :- it does two(2) things.
    1. updates the value of count property
    2. re-render the component



- npm create vite@latest my-app -- -- template react
  - cd my-app
  - npm install
  - npm run dev



# Side Effects

  - What are side effects ?

    1. Any operation that requires your react component to go outside of it's scope and intract with outside world, these are called "side effects". side effects are unpredictable.

    2. How i handle side effects matters ? Not handling side effects properly can lead to performance issues / bigger problems in your application.

    3. Rules of React components
       - Rendering process should never be Blocked by side effects.
       - But we still have to use/perform side effects (get the data) How ?
       - By using `useEffect` hook method from React, you can perform/use side effects properly.

`useEffect` Syntax :-
  
useEffect(function(){

},[])  // Empty / Dependancy Array

It takes two(2) Argument :- useEffect(callBackFunction, DependancyArray)


The way `useEffect` handles the side effects is by calling side effects after the initial rendering is completed.