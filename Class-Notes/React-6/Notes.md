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









# Cleanup functions during update phase

### *cleanup from previous useEffect will be called before the next update..*

Let’s take a simple example to understand the above statement.

**Code Example :**

```jsx
import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`callback inside useEffect ran`, Date.now());

    return () => {
      console.log(`cleanup function called`, Date.now());
    };
  }, [count]);

  return (
    <div className="App">
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>INC</button>
    </div>
  );
}


// effect - 1 
		// ==> cleanup of effect-1 ==> effect 2 
				// ==> clean of effect 2 ==> effect-3

// Imagine a function hall where different parties happen;

// party 1 happens
//  cleanup of party 1 happens

// party 2 happens
// cleanup of party 2 happens

// party 3 happens
```




In this example, we have a component called `App` that renders a button and a counter. Whenever the button is clicked, the **`count`** state is updated by one.

The **`useEffect`** hook is used to log a message to the console every time the component is rendered. It also returns a cleanup function that logs a message to the console when the component is unmounted or updated.

Here's what happens when you run this code:

1. The `App` component is mounted, and the **`useEffect`** hook is called for the first time. The message "Effect ran" is logged to the console.
2. Whenever the button is clicked, the **`count`** state is updated, causing the component to re-render. This triggers the cleanup function returned from the previous **`useEffect`** call to be called before the next **`useEffect`** is called. The message "Cleanup ran" is logged to the console.
3. The **`useEffect`** hook is called again with the updated **`count`** value. The message "Effect ran" is logged to the console again.

This pattern of running the cleanup function before the next **`useEffect`** is called ensures that any resources or side effects from the previous **`useEffect`** are cleaned up properly before the next one is called.

**In a nutshell :**

Cleanup is called

1. cleanup from previous useEffect is called during the unmount phase
2. cleanup from previous useEffect is called before the next update as well

![Class (42).png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/d987bf96-8d65-4785-9ce3-58b501b565b6/Class_(42).png)

Why knowing this **“cleanup from previous useEffect will be called before the next update.. ”** is important ??

Let’s take a real world example of chat application and build fake chat application.

How does a chat application work ?

Essentially when you started listening to one person and moved on and start chatting with another person. You don't see the chats related to the first person. 

 We need to stop listening to one and start listening to another. Sometimes cleanups are for this.

Let’s build a fake chat application. Here we are simulating fake chat application.

Structure

```jsx
src 
	- App.js
	- chat.js
	- index.js
```

chat.js

```jsx
export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  const connect = () => {
    console.log(
      '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
    );
  };

  const disconnect = () => {
    console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
  };

  return {
    connect,
    disconnect
  };
}
```

App.jsx

```jsx
import { useState, useEffect } from "react";
import { createConnection } from "./chat.js";

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return (
    <>
      <label>
        Server URL:{" "}
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
```

Some observations : 

- **`useEffect`**: Connects to a chat room when the component mounts.
- **Cleanup function**: Disconnects from the chat room when the component unmounts or updates.

Here, the cleanup function runs in two scenarios:

1. When you switch chat rooms (component updates).
2. When you close the chat (component unmounts).

**In a nutshell :**

1. **Cleanup functions** are your cleaning crew. They help you tidy up any ongoing processes when a component updates or unmounts.
2. These functions run **before the next `useEffect` during an update** and **when the component is removed from the UI**.

---