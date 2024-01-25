Class activities :

Task 1 :
Clicking on the button INCREASE COUNT should increase the value of count each time by 5

Task 2
Initial Balance - Baburao's bank balance : <inital_balance>
Button text is "double the amount in 25 days". Clicking on a button should inc the balance amount by 2x (3000 - 6000 - 12000)






# State management - The useState hook

# Introduction **:**

Modern user interfaces are interactive and responsive to user actions like clicking a button or entering text. In React, the concept of "state" is crucial for managing this interactivity. State refers to the data that changes over time in your application. React provides a powerful tool called "hooks" for managing this state, with the `useState` hook being the most fundamental.

# The `useState` Hook :

`useState` is a built-in React hook that allows you to add React state to function components. It lets you initialize a state variable and provides a function to update this state. When the state changes, React re-renders the component to reflect the update.

# Building a Counter App using `useState` hook :

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>State Management and useState</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script type="text/babel">
      function App() {
        const stateArray = React.useState(0);
        const count = stateArray[0];
        const setCount = stateArray[1];

        const handleClick = () => {
          setCount(count + 1);
        };

        return (
          <div>
            <p>Button is clicked {count} times</p>
            <button onClick={handleClick}>Click Me</button>
          </div>
        );
      }

      const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
      reactRoot.render(<App />);
    </script>
  </body>
</html>
```

Destructuring the array returned from `useState` hook directly. 

```jsx
function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App />);
```

1. `count` is our state variable
2. `setCount` is a function which will update the value of `count`; Whenever `setCount` function is called and the updated value of `count` is passed inside `setCount`. Two things happen
    1. The value of `count` changes
    2. The `App` component re-renders.
3. The value that you are passing inside `useState` is the initial value of `count`

In this code you can observe that `useState` returns a stateArray which has

1. `count` in index 0
2. `setCount` in index 1

Generally speaking this same array can be destructed and be rewriiten as

```jsx
const stateArray = React.useState(0);
const count = stateArray[0];
const setCount = stateArray[1];
```

```jsx
const [count, setCount] = React.useState(0);
```









# State Mangement II - Handling multiple states in a component

# Handling Multiple States :

You can use multiple `useState` calls to manage different state variables within the same component.

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>react-10 | example-2</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script type="text/babel">
      function App() {
        const [count1, setCount1] = React.useState(0);
        const [count2, setCount2] = React.useState(0);

        const incrementCount1 = () => {
          setCount1(count1 + 1);
        };

        const incrementCount2 = () => {
          setCount2(count2 + 1);
        };

        return (
          <div>
            <p>Button 1 is clicked {count1} times</p>
            <button onClick={incrementCount1}>Button 1</button>
            <p>Button 2 is clicked {count2} times</p>
            <button onClick={incrementCount2}>Button 2</button>
          </div>
        );
      }

      const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
      reactRoot.render(<App />);
    </script>
  </body>
</html>
```

- Two state variables `count1` and `count2`are being maintained here.
- `setCount1` is the state updater function for `count1`
- `setCount2` is the state updater function for `count2`
- You can observer we can maintain multiple instances of count using `useState` hook and each of this count will not have an impact on the other one









Controlled components in React
Controlled components are React components that control the form elements within them. The form data is handled by the state within the component.
Here's an example of a controlled input field :
function App() {
  const [message, setMessage] = React.useState(""); // State for input value

  const handleChange = (event) => {
    setMessage(event.target.value); // Update state based on input
  };

  return (
    <div>
      <input
        value={message}
        onChange={handleChange}
        placeholder="Type a message"
      />
      <p>Your message: {message}</p>
    </div>
  );
}









# React Devtools

Link : https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

React Developer Tools is a Chrome extension that's incredibly useful for anyone working with React, especially beginners. Think of it as a magnifying glass that lets you see into the inner workings of your React application.

# What It Is:

React Developer Tools is a free tool provided by the React team. It adds extra features to the Chrome Developer Tools specifically for React applications.

# Why It's Useful:

1. **Inspecting Components**: When you're building a React app, your UI is made up of components. React Developer Tools lets you see these components in the browser, just like you see HTML elements in the Elements tab. You can click on a component and see its state and props. This is super helpful to understand how data flows in your application.
2. **Debugging**: Sometimes things don't work as expected. React Developer Tools can help you find out why. By inspecting the props and state, you can see if the data your components are receiving and managing is correct.
3. **Performance**: It includes a Profiler that helps you measure the performance of your app. You can see how long components take to render and identify bottlenecks.

# How to Use It:

1. **Installation**: First, you need to install it. Go to the Chrome Web Store, search for 'React Developer Tools', and add it to Chrome.
2. **Opening the Tools**: Once installed, open your React app in Chrome. Then, open the Chrome Developer Tools (usually by right-clicking on the page and selecting "Inspect" or pressing `Ctrl+Shift+I` on Windows/Linux, `Cmd+Opt+I` on Mac). You'll see a new tab called 'React', alongside tabs like 'Elements' and 'Console'.
3. **Inspecting Components**: In the React tab, you can navigate through your component tree. Click on a component, and on the right side, you'll see its props and state.
4. **Profiler**: To use the Profiler, switch to the 'Profiler' tab in React Developer Tools. Start recording, interact with your app, and then stop recording. You'll see a performance breakdown of the component renders.

# Tips for Beginners:

- **Take Your Time**: It might feel overwhelming at first. Spend time clicking around, looking at different components, and seeing how their props and state change.
- **Debugging Practice**: When something isn't working, use the tools to inspect the components. It's a great way to learn debugging.

Remember, React Developer Tools is a window into your React app. It doesn't change your app; it just helps you understand and debug it better. It's a valuable tool in your React learning journey!









# State upliftment

# Independant component states

### Example 1: Independent Component States

Consider a scenario where you have a button component in React. Each time this component is used, it maintains its own state.

When you use this `MyButton` component multiple times in your `App` like this. Each button keeps track of its own clicks independently. That means if you click one button, it updates its count without affecting the other.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>react-10 | example-13</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script type="text/babel">
      function MyButton() {
        const [count, setCount] = React.useState(0); // State for counting clicks

        function handleClick() {
          setCount(count + 1); // Increment count on click
        }

        return <button onClick={handleClick}>Clicked {count} times</button>;
      }

      function App() {
        return (
          <>
            <h1>Counters that update separately</h1>
            <MyButton />
            <MyButton />
          </>
        );
      }

      const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
      reactRoot.render(<App />);
    </script>
  </body>
</html>
```

Notice how each button “remembers” its own `count` state and doesn’t affect other buttons.

![Screenshot 2023-04-06 at 10.40.43 AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/5183ff71-3164-4e11-ab52-5c6d128bde0d/Screenshot_2023-04-06_at_10.40.43_AM.png)

# Shared State Between Components

### Example 2: Shared State Between Components

Sometimes, you want multiple components to share the same data. For example, if you have two buttons and want them to display the same `count` that updates together, you need a shared state.

To achieve this, you "lift the state up" to a common parent component. Here's how you do it :

Step 1 : Move the state to the parent component, `App`

Step 2 : Modify the `MyButton` component to accept props

```html
function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

function App() {
  const [count, setCount] = React.useState(0); // Shared state

  function handleClick() {
    setCount(count + 1); // Update shared state
  }

  // Pass state and handler to children
  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App />);
```

In this setup, `App` holds the state (`count`) and manages the click handler (`handleClick`). Both buttons receive the count and the handler as props. When a button is clicked, it uses the shared handler from `App`, updating the `count` for both buttons simultaneously.

![Screenshot 2023-04-06 at 10.40.57 AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/0c25fe9b-6d66-4074-a821-a1645d542b56/Screenshot_2023-04-06_at_10.40.57_AM.png)

This kind of ***Lifting State Up***  technique or simply called ***State upliftment*** is a technique to share state between multiple components by moving it to their common parent.

Remember, each component should be responsible for its own state, but when you need to share data across components, lifting the state up is a clean and effective solution.










# Data sharing between components

Let us try and understand how data can be shared between components in React Application. 

Data / Info can be passed from

1. Parent to Child
2. Child to Parent
3. Sibling to Sibling

# **Parent to Child : Sending some information from parent to child**

Here's a code example to visualize this:

```jsx
// The Child component
function Child(props) {
  return <h1>{props.count}</h1>; // The Child reads the note
}

// The Parent component
function Parent() {
  const [count, setCount] = React.useState(0); // The Parent has a number

  // This function changes the number when you click a button
  const increment => setCount(count + 1);;

  return (
    <div>
      <Child count={count} /> {/* The Parent passes the number to the Child */}
      <button onClick={increment}>Click Me</button>
    </div>
  );
}

// Rendering the Parent component
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<Parent />);
```

**Concept** : 

- Imagine you have a "Parent" component and a "Child" component. The Parent is like a generous giver, and the Child is the receiver.
- The Parent holds some information, like a number, in its personal box called 'state'. Whenever the Parent wants to share this information with the Child, it sends it over as a 'prop' (short for property). The Child can use this prop to display the information, but it can't change what's inside the prop. It's like receiving a letter that you can read but not edit.

**Example** : 

You have a Parent that keeps track of a number ( `count` ). The Parent saves this `count` and also passes it to the Child. The Child then displays this number.

![parent-child.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/3e1471ef-e357-4172-99fb-2f49a9cba256/parent-child.png)

# Child to Parent : **Sending some information from child to parent**

```jsx
function Child(props) {
  return (
    <>
      <h1>{props.count}</h1>
      <button onClick={() => props.incrementByValue(1)}>INC BY 1</button>
      <button onClick={() => props.incrementByValue(5)}>INC BY 5</button>
      <button onClick={() => props.incrementByValue(8)}>INC BY 8</button>
      <button onClick={() => props.incrementByValue(10)}>INC BY 10</button>
    </>
  );
}

function Parent() {
  const [count, setCount] = React.useState(0);

  const incrementByValue = (val) => {
    setCount(count + val);
  };

  return (
    <div>
      <Child count={count} incrementByValue={incrementByValue} />
    </div>
  );
}

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<Parent />);
```

**Concept :** 

Sometimes, the Child needs to tell the Parent to change the information. Since the Child can't change the props directly, it uses a special method provided by the Parent. This method is like a phone call to the Parent, saying, "Hey, please change the information like this."

**Example :** 

The Child has buttons to increase the count by different amounts. When you click these buttons, they tell the Parent to increase the count by 1, 5, 8, or 10.

![child-parent.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/504762f6-80de-4314-b2d2-882dcdb772d7/child-parent.png)

# Sibling to Sibling : **Sharing some information between sibling components**

```jsx
function Child1(props) {
  return <h1>count : {props.count}</h1>;
}

function Child2(props) {
  return <button onClick={props.increment}>INCREMENT</button>;
}

function Child3(props) {
  function isEvenOrOdd(num) {
    return num % 2 === 0 ? "even" : "odd";
  }

  return <h1>count is {isEvenOrOdd(props.count)} number</h1>;
}

function Parent() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Child1 count={count} />
      <Child2 increment={increment} />
      <Child3 count={count} />
    </div>
  );
}

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<Parent />);
```

**Concept :** 

Now, imagine the Parent has more than one Child – they are siblings. If these siblings need to share information, they can't do it directly. Instead, they ask the Parent to be the messenger. The Parent holds the information and passes it to each Child as needed.

**Example :** 

 There are three siblings: 

- Child1 shows the `count`
- Child2 has a button to increase the `count`
- Child3 tells if the `count` is an odd or even number.

The Parent keeps the `count` and shares it with all three children.











# React - Controlled and uncontrolled components

Let’s take this very simple example :

```jsx
function App() {
  const [message, setMessage] = React.useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
    // event --> change event;
    // event target --> input box;
    // event target value --> whatever is currently avail
  };

  return (
    <div>
      <p>
        Message : <strong>{message}</strong>
      </p>
      <input placeholder="Add your message here" onChange={handleChange} />
    </div>
  );
}

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App />);
```

While the code seems to have worked. But that is not the common convention as React like to take more control and with the above code. It doesn’t have complete control over input element. 

Lemme try and explain it this way

Let's consider a scenario where you have a form reset button to clear the input field. We shall discuss this below

```jsx
function App() {
  const [message, setMessage] = React.useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleReset = () => {
    setMessage("");
  };

  return (
    <div>
      <p>
        Message : <strong>{message}</strong>
      </p>
      <input placeholder="Add your message here" onChange={handleChange} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App />);
```

Here’s how it could look with an uncontrolled input (without the `value` attribute) 

In this uncontrolled version, clicking the reset button will update the `message` state to an empty string, but it won't clear the input field. The DOM is managing the input field’s value independently of React.

```jsx
function App() {
  const [message, setMessage] = React.useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleReset = () => {
    setMessage("");
  };

  return (
    <div>
      <p>
        Message : <strong>{message}</strong>
      </p>
      <input
        placeholder="Add your message here"
        onChange={handleChange}
        value={message}
      />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App />);
```

Now, let’s modify the code to have a controlled input (with the `value` attribute)

In this controlled version, clicking the reset button will clear both the `message` state and the input field. The input field's value is always in sync with the `message` state, making the reset functionality work as expected. This demonstrates a situation where a controlled component (second approach) maintains desired functionality, whereas an uncontrolled component (first approach) does not.










# Labels and Inputs for inputs

It’s recommended that you always tie your input with label for better accessibility. It’s done with `htmlFor` on label and `id` on input.

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>State Management and useState : Controlled component</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script type="text/babel">
      const rootElement = document.getElementById("root")
      const reactRoot = ReactDOM.createRoot(rootElement)

      function App() {
        const [message, setMessage] = React.useState("")

        const handleChange = (event) => {
          setMessage(event.target.value)
        }

        const handleReset = () => {
          setMessage("")
        }

        return (
          <div>
            <p>
              Message : <strong>{message}</strong>
            </p>
            <label htmlFor="message-input"></label>
            <input
              id="message-input"
              placeholder="Add your message here"
              onChange={handleChange}
              value={message}
            />
            <br />
            <button onClick={handleReset}>Reset</button>
          </div>
        )
      }

      reactRoot.render(<App />)
    </script>
  </body>
</html>
```










# Event Handling And State Management


# Why state management ?

# Event Handling in React :

React allows you to handle events like clicks, change, hover, form submissions, etc., in a way similar to handling events in regular JavaScript. However, in React, you work with a virtual DOM and use JSX syntax.

Let’s take a simple example to understand Event Handling in React by taking two different events.

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event Handling</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script type="text/babel">
      function App() {
        // A simple function to handle click events
        function handleClick() {
          alert("Button clicked!");
        }

        // A simple function to handle input change events
        function handleInputChange(event) {
          console.log("input value is being changed", event.target.value);
        }

        // JSX returns a button with an event handler
        return (
          <>
            <button onClick={handleClick}>Click me</button>
            <input
              type="text"
              placeholder="Type here"
              onChange={handleInputChange}
            />
          </>
        );
      }

      // Render the App component into the root div
      const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
      reactRoot.render(<App />);
    </script>
  </body>
</html>
```

- App component has a button. An onClick event handler `handleClick` is attached to this button meaning whenever user clicks on this button. `handleClick` function will be invoked.
    - Event - Click Event ( `onClick`) . We use camelCasing like `onClick` , `onChange` etc here unlike HTML
    - Event Handler - `handleClick` function
- App component has an input box. An onClick event handler `handleChange` is attached to this input meaning whenever user changes something on this input box. `handleChange` function will be invoked.
    - Event - Change Event ( `onChange`) . We use camelCasing like `onClick` , `onChange` etc here unlike HTML
    - Event Handler - `handleInputChange` function
    

---

Now that you understand event handling in react. Let’s take a look at this very simple example. 
Agenda : We are trying to maintain a variable called `count` which will be displayed onto UI. Clicking on the button should increase the value of `count` and this updated value should be reflected onto DOM

TODO : Update an image explaining the behaviour of counter app we are trying to build. 

 

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event Handling</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script type="text/babel">
      function App() {
        let count = 0;

        function handleClick() {
          count += 1;
          console.log(`Clicked ${count} times`);
        }

        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>Click me</button>
          </div>
        );
      }

      // Render the App component into the root div
      const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
      reactRoot.render(<App />);
    </script>
  </body>
</html>
```

- When the `App` component first renders, `count` is set to `0`. The UI shows "You clicked 0 times".
- When you click the button, `handleClick` is called. It increments `count` and logs the new value. However, the UI still shows "You clicked 0 times".

**Expectation vs. Reality :** 

As a developer, you might expect that changing `count` would update the UI. However, these changes are not being reflected. 

Why Doesn't the UI Update ?

A simple answer - REACT doesn’t know. React has no way of knowing that `count` has changed and that it needs to update the UI. 

Let’s make some changes to the above code and see if we can fix this. 

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Managing a variable across re-renders</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script type="text/babel">
      // Initialize variable
      const state = { count: 0 };

      // Custom function to update state and re-render
      function setState(newState) {
        Object.assign(state, newState);
        renderApp();
      }

      function App() {
        function handleClick() {
          setState({ count: state.count + 1 });
          console.log(`Clicked ${state.count} times`);
        }

        return (
          <div>
            <p>You clicked {state.count} times</p>
            <button onClick={handleClick}>Click me</button>
          </div>
        );
      }

      // Render the App component into the root div
      const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

      function renderApp() {
        reactRoot.render(<App />);
      }
      renderApp();
    </script>
  </body>
</html>
```

Some new variables and functions that you see here 

- `state` : Here we store the value of count in a javascript object and let’s call this object state. Now why state ? Because this information in “state” describes the current state/condition of your UI.
- `renderApp` : The `renderApp` function is responsible for rendering the `App` component. We are gonna call this function
    - Initially : It’s called inital render wherein App component is initially rendered to UI
    - `state` value changes : We will also call this function `renderApp` each time `state` value is updated.
- `setState` :  This function updates the state and then calls `renderApp` to re-render the UI with the new state.

In React, "state" refers to data or properties that need to be tracked in an application. So is there a way we can handle this “state” variable in better way . 

The answer is “Yes”. Using a hook from react called `useState` but that’s a different topic and will be discussed next. 

---

### Additional Example :

We have further modified the above example to include “input” value and manage state of input box as well.

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Managing a variable across re-renders</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script type="text/babel">
      // Initialize variable
      const state = { count: 0, message: "" };

      // Custom function to update state and re-render
      function setState(newState) {
        Object.assign(state, newState);
        renderApp();
      }

      function App() {
        function handleClick() {
          setState({ count: state.count + 1 });
          console.log(`Clicked ${state.count} times`);
        }

        const handleChange = (event) => {
          setState({ message: event.target.value });
        };

        return (
          <div>
            <p>You clicked {state.count} times</p>
            <button onClick={handleClick}>Click me</button>
            <hr />
            <input
              placeholder="Enter the message here"
              onChange={handleChange}
            />
          </div>
        );
      }

      // Render the App component into the root div
      const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

      function renderApp() {
        reactRoot.render(<App />);
      }
      renderApp();
    </script>
  </body>
</html>
```









# Conditional Rendering/Styling And How React Updates DOM


Topics Covered
Conditional Rendering
Conditional Styling
How React updates DOM efficiently

Notes :-


# Conditional Rendering and Conditional Styling

# Conditional Rendering :

Conditional rendering in React is a concept that allows you to display content based on certain conditions.

Let’s take a simple example : 

Imagine your `App` component has two `LightBulb` component. You pass a prop `“on”` which is a boolean value to this `LightBulb` component. The `LightBulb` will render `Bulb is on` or `Bulb is off` based on this prop

That means we are conditionally rendering `Bulb is on` or `Bulb is off` depending on prop `“on”` 

Approach 1 : 

```jsx
function LightBulb(props) {
  if (props.on) {
    return <div>Bulb is on</div>;
  } else {
    return <div>Bulb is off</div>;
  }
}

function App() {
  return (
    <>
      <LightBulb on={true} />
      <LightBulb on={false} />
    </>
  );
}
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<App />);
```

Approach 2 : 

```jsx
function LightBulb(props) {
  return <div>Bulb is {props.on ? "on" : "off"}</div>;
}

function App() {
  return (
    <>
      <LightBulb on={true} />
      <LightBulb on={false} />
    </>
  );
}
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<App />);
```

# Conditional Styling :

Based on certain condition; The styling is updated. 

```jsx
function LightBulb(props) {
  const styleObject = {
    backgroundColor: props.on ? "black" : "white",
    color: props.on ? "white" : "black",
    padding: "20px",
    border: `1px solid black`,
  };

  return <div style={styleObject}>Bulb is {props.on ? "on" : "off"}</div>;
}

function App() {
  return (
    <>
      <LightBulb on={true} />
      <LightBulb on={false} />
    </>
  );
}
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<App />);
```

---

### Another example :

```jsx
const SuperheroDetails = ({
  name,
  hobbies,
  hasSuperPowers,
  isMarried,
  address,
  age,
}) => {
  return (
    <div className="card">
      <p>Name : {name}</p>
      {hobbies.length > 0 ? (
        <p>Hobbies : {hobbies.join(", ")}</p>
      ) : (
        <p>No hobbies</p>
      )}
      {/*
              <p>Has Super Powers : {hasSuperPowers ? "Yes" : "No"}</p>
            */}
      <p>
        Has Super Powers :{" "}
        <span style={{ color: hasSuperPowers ? "green" : "red" }}>
          {hasSuperPowers ? "Yes" : "No"}
        </span>
      </p>
      <div>
        <p>Street : {address.street}</p>
        <p>City : {address.city}</p>
        <p>Country : {address.country}</p>
      </div>
      <p>Age : {age}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <SuperheroDetails
        name="Batman"
        hobbies={["Driving fancy cars", "Fighting crime"]}
        hasSuperPowers={false}
        address={{ street: "3rd Main", city: "Gotham", country: "USA" }}
        age={25}
      />
      <SuperheroDetails
        name="Superman"
        hobbies={["Flying", "Collecting coins"]}
        hasSuperPowers={true}
        address={{
          street: "4th Cross",
          city: "Central city",
          country: "USA",
        }}
        age={30}
      />
    </div>
  );
};

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<App />);
```

Ever wondered how to show or hide something based on a condition? Here, we'll look at how you can conditionally render elements in React.

Let's say you want to display hobbies only if the superhero has some. Look at this part:

```jsx
{hobbies.length > 0 ? (
  <p>Hobbies : {hobbies.join(", ")}</p>
) : (
  <p>No hobbies</p>
)}
```

This is called a ternary operator. It checks if `hobbies.length > 0`. If it's true, it renders the superhero's hobbies; if false, it shows "No hobbies".

### 🔵 **Conditional Styling of Elements**

Now let's add a bit of style. You might want to visually highlight if a superhero has superpowers. Check out this code snippet:

```jsx
<p>Has Super Powers: {hasSuperPowers ? "Yes" : "No"}</p>
```

Want to make it colorful? You can conditionally add inline styles like this:

```jsx
<p>
  Has Super Powers:
  <span style={{ color: hasSuperPowers ? 'green' : 'red' }}>
    {hasSuperPowers ? "Yes" : "No"}
  </span>
</p>
```

In this snippet, the text will be green if `hasSuperPowers` is true; otherwise, it will be red.











# **How React updates the DOM efficiently ( Virtual DOM )**

To appreciate the efficiency of React in updating the DOM, let's compare building a digital clock application using vanilla JavaScript and React.

Clock built with Vanilla Javascript

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clock with JS / DOM</title>
  </head>
  <body>
    <div id="root"></div>
    <script>
      let rootElement = document.getElementById("root")

      function tick() {
        const time = new Date().toLocaleTimeString()
        rootElement.innerHTML = `
          <h1>Digital Clock With vanilla javascript</h1>
          <h2>${time}</h2>
        `
      }

      // Let's update the clock every 1 second!
      setInterval(tick, 1000)
    </script>
  </body>
</html>
```

Clock with react

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .container {
        margin: 10px;
        color: teal;
      }
    </style>
    <title>Clock using React</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script type="text/babel">
      const rootElement = document.getElementById("root")
      const reactRoot = ReactDOM.createRoot(rootElement)

      function tick() {
        const time = new Date().toLocaleTimeString()
        const element = (
          <>
            <h1>Digital Clock With React</h1>
            <h2>{time}</h2>
          </>
        )
        reactRoot.render(element)
      }

      // Let's update the clock every 1 second!
      setInterval(tick, 1000)
    </script>
  </body>
</html>
```

**Observation** : 

1. **Vanilla JavaScript Approach**: Every second, the entire HTML content within the **`rootElement`** is replaced, even if only a small part, like the time, changes. 
2. **React Approach**: React updates only the necessary parts of the DOM. For instance, it only changes the time string without re-rendering the entire clock component.

Let’s make one another change to these above examples to understand how it impacts user experience.you’d notice that in vanilla javascript piece, any focused input will lose its focus every second, which is super annoying. React is smarter; it only updates what's necessary, keeping all your interactions intact.

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clock with JS / DOM</title>
  </head>
  <body>
    <div id="root"></div>
    <script>
      let rootElement = document.getElementById("root")

      function tick() {
        const time = new Date().toLocaleTimeString()
        rootElement.innerHTML = `
          <h1>Digital Clock With vanilla javascript</h1>
          <input type="text" value="focus on this input" />
          <h2>${time}</h2>
        `
      }

      // Let's update the clock every 1 second!
      setInterval(tick, 1000)
    </script>
  </body>
</html>
```

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .container {
        margin: 10px;
        color: teal;
      }
    </style>
    <title>Clock using React</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script type="text/babel">
      const rootElement = document.getElementById("root")
      const reactRoot = ReactDOM.createRoot(rootElement)

      function tick() {
        const time = new Date().toLocaleTimeString()
        const element = (
          <>
            <h1>Digital Clock With React</h1>
            <input type="text" value="focus on this input" />
            <h2>{time}</h2>
          </>
        )
        reactRoot.render(element)
      }

      // Let's update the clock every 1 second!
      setInterval(tick, 1000)
    </script>
  </body>
</html>
```

1. **Vanilla JavaScript Approach**: : Every second, the entire HTML content within the **`rootElement`** is replaced, even if only a small part, like the time, changes. This can disrupt user interactions, such as losing focus on an input field.
2. **React Approach**: React updates only the necessary parts of the DOM. For instance, it only changes the time string without re-rendering the entire clock component. Hence the input focus remained intact

# **Virtual DOM :**

React's efficiency stems from its use of the Virtual DOM. Here's how it works:

**What is the Virtual DOM?** 
The Virtual DOM is a lightweight copy of the actual DOM. It's a virtual representation of the UI components.

**How Does React Use the Virtual DOM?** 
When there's a change in the UI, React first updates the Virtual DOM. Then, it compares (or "diffs") the updated Virtual DOM with a snapshot taken right before the update. This process is known as "reconciliation."

**Efficient Updates**: 
React identifies what exactly changed in the Virtual DOM. It then updates only those specific parts in the actual DOM. This selective updating avoids unnecessary re-renders, enhancing performance.

**The Benefits:**

1. **Performance**: React reduces the workload on the browser by avoiding needless DOM manipulations, resulting in faster applications.
2. **User Experience**: React's targeted updates improve accessibility and user experience, such as maintaining focus on an input field, as shown in our clock example.

**Conclusion:**

React's smart DOM update mechanism, powered by the Virtual DOM, makes it a powerful tool for developing efficient and user-friendly web applications.

---










# Children Props

# Children props in React Component :

"Children props in React Component" refers to a special prop in React, called `children`, which allows you to pass components as data to other components. This prop is a key concept in React's compositional model, where smaller components are composed together to build more complex UIs.

In React, any JSX elements you place between the opening and closing tags of a component are passed to it as `children` props. This allows components to define their structure with placeholders for any children elements to be defined later.

When you nest content inside a JSX tag, the parent component will receive that content in a prop called `children`. For example, the `Card` component below will receive a `children` prop set to `<Avatar />` and render it in a wrapper div:

```jsx
import "./styles.css";

function Card(props) {
  console.log(props);
  return (
    <div style={{ padding: "10px", border: `5px solid ${props.borderColor}` }}>
      {props.children}
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img
        src="https://i.pinimg.com/564x/f0/14/b4/f014b482978c37f0e12ea9db8f37a264.jpg"
        alt="batman"
        width={200}
      />
      <p>Batman</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Card borderColor="black">
        <Avatar />
      </Card>
    </div>
  );
}
```

Try replacing the `<Avatar>` inside `<Card>` with some text to see how the `Card` component can wrap any nested content. It doesn’t need to “know” what’s being rendered inside of it. You will see this flexible pattern in many places.

You can think of a component with a `children` prop as having a “hole” that can be “filled in” by its parent components with arbitrary JSX. You will often use the `children` prop for visual wrappers: panels, grids, etc.

## Use-case & Benefits

The children prop is useful for creating reusable and dynamic components. For instance, a `Modal` component can be designed to accept any content as children, making it versatile for various scenarios.

Consider a `List` component. Without children props, you'd need to create a specific List for every type of item. With children props, you can create one List component and pass different items as children.

## Real world Examples

In real-world programming, a `Container` component could be used to apply consistent padding and margin around its children. Whether it's a form, a paragraph, or an image, the `Container` ensures consistent spacing.

## Usage

- `children`: This is a prop that contains any elements included between the opening and closing tags of a component. It can be used to dynamically render content inside a component.

Example:

```jsx
function Container({ children }) {
  return <div className="container">{children}</div>;
}

<Container>
  <p>This is a child paragraph</p>
</Container>

```

## Task 1 :

Problem: Create a `PageLayout` component that takes a header, content, and footer as children and renders them in a structured layout.

Solution:

1. Define `PageLayout` with a `children` prop.
2. Use the `children` prop to render the passed elements.
3. Use the component by passing different elements as children.

```jsx
function PageLayout({ children }) {
  return <div className="page-layout">{children}</div>;
}

<PageLayout>
  <Header />
  <MainContent />
  <Footer />
</PageLayout>

```

## Task 2 :

Problem: Create a `Gallery` component that can display any number of `Image` components passed as children.

Step-by-Step:

1. Define `Gallery` with a `children` prop.
2. Render `children` within a grid layout.
3. Use `Gallery` by passing multiple `Image` components.

Solution:

```jsx
function Gallery({ children }) {
  return <div className="gallery-grid">{children}</div>;
}

<Gallery>
  <Image src="image1.jpg" />
  <Image src="image2.jpg" />
  // Add as many images as needed
</Gallery>

```

This approach demonstrates the power of composition in React, where `children` props allow for flexible and reusable components.














Pre Class Content

Hooks
Hooks Intro
Rules Of Hooks
More about useState hook
 setState async behaviour
batch updates
setState ( callbackFunc )
Hooks in React :
React Hooks are functions that let you use state and other React features. Hooks are basically function that allow you to “hook into” react’s features. ( get it 🤓 )
The most common Hook is useState. Here’s how it works:

function Counter() {
  // Declare a state variable named "count" with an initial value of 0
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* When the button is clicked, call setCount with count + 1 */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;

​
In the example above:
Declaring State: We declare a state variable called count, and initialize it to 0. React.useState returns an array with two elements, and we're using destructuring to get them: count is the current state value, and setCount is a function that lets us update it.
Reading State: In our JSX code, we can read the current state value using the count variable.
Updating State: When the button is clicked, we call setCount with the new value of count + 1.
Now, regarding the rules of Hooks:
Only Call Hooks at the Top Level: Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function.
Only Call Hooks from React Functions: Call Hooks from React function components, not regular JavaScript functions.
These rules ensure that the Hooks are called in the same order each time a component renders, which preserves the state of Hooks between multiple React.useState and useEffect calls.
React has many other hooks like useEffect useRef .. and we will slowly learn each of these
More about useState hook :
Presentation :

setState is kind of async
setState batches updates
setState can take updater functions, which will use the value from the react store internally
setState is kind of async
Let’s take a simple counter example
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>setState Async Behaviour</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>

    <script type="text/babel">
      function Counter() {
        const [count, setCount] = React.useState(0)

        const handleClick = () => {
          setCount(count + 1)
          // when you do a console.log(count) here; you'll observe count value hasn't been updated.
          console.log(count)
        }
        return (
          <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
          </div>
        )
      }

      const rootElement = document.getElementById("root")
      const reactRoot = ReactDOM.createRoot(rootElement)
      reactRoot.render(<Counter />)
    </script>
  </body>
</html>
​
The setCountfunction, which is a state updater function returned by the useStatehook, can be considered asynchronous in nature. While it doesn't return a promise and is not technically an async function, its behavior is similar to asynchronous functions in the sense that state updates may be batched and not happen immediately.
When you call setCount, React doesn't guarantee that the state will be updated instantly. Instead, React may decide to batch multiple state updates together to optimize performance. As a result, the updated state value might not be available right after calling setCount. and hence
 const handleClick = () => {
    setCount(count + 1);
		// when you do a console.log(count) here; you'll observe count value hasn't been updated.
    console.log(count)

  };
​
React may not update the state immediately but will schedule the update to happen at the next render.
setState batches updates
Let’s take this simple example
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Batch Updates</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script type="text/babel">
      function App() {
        const [amount, setAmount] = React.useState(0)

        const handleDeposit = () => {
          setAmount(amount + 100)
          setAmount(amount + 100)
          setAmount(amount + 100)
          setAmount(amount + 100)
        }

        const handleWithdraw = () => {
          setAmount(amount - 100)
        }

        return (
          <div>
            <h1>Current : {amount}</h1>
            <button onClick={handleDeposit}>Deposit 100</button>
            <button onClick={handleWithdraw}>Withdraw 100</button>
          </div>
        )
      }

      const rootElement = document.getElementById("root")
      const reactRoot = ReactDOM.createRoot(rootElement)
      reactRoot.render(<App />)
    </script>
  </body>
</html>
​
When multiple state updates happen in a single event handler, React will batch them together and apply them in a single render cycle. Let's analyze the handleDepositfunction in detail:
const handleDeposit = () => {
  setAmount(amount + 100);
  setAmount(amount + 100);
  setAmount(amount + 100);
  setAmount(amount + 100);
};
​
When you click the "Deposit 100" button, the handleDeposit function is called, which in turn calls setAmount four times. However, due to React's batching behavior, these four updates are combined and applied in a single render cycle.
This is happening because the amount value used in all four setAmount calls is the same (the current state value before any updates). React batches these updates and calculates the new state value based on the initial value, causing the final result to be amount + 100
const handleDeposit = () => {
  setAmount(amount + 100); // amount points to 0 
  setAmount(amount + 100); // amount points to 0 
  setAmount(amount + 100); // amount points to 0 
  setAmount(amount + 100); // amount points to 0 
};
​
Now, to ensure each update is based on the most recent state value, you can use the functional form of the state updater, which we will see in the next point.
setState can take updater functions, which will use the value from the react store internally
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Callback function inside setState</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script type="text/babel">
      function App() {
        const [amount, setAmount] = React.useState(0)

        const handleDeposit = () => {
          setAmount((prevAmount) => prevAmount + 100)
          setAmount((prevAmount) => prevAmount + 100)
          setAmount((prevAmount) => prevAmount + 100)
          setAmount((prevAmount) => prevAmount + 100)
        }

        const handleWithdraw = () => {
          setAmount(amount - 100)
        }

        return (
          <div className="App">
            <h1>Current : {amount}</h1>
            <button onClick={handleDeposit}>Deposit 100</button>
            <button onClick={handleWithdraw}>Withdraw 100</button>
          </div>
        )
      }

      const rootElement = document.getElementById("root")
      const reactRoot = ReactDOM.createRoot(rootElement)
      reactRoot.render(<App />)
    </script>
  </body>
</html>
​
To ensure each update is based on the most recent state value, you can use the functional form of the state updater, which takes the previous state value as a parameter and returns the updated state value:

const handleDeposit = () => {
  setAmount(prevAmount => prevAmount + 100);
  setAmount(prevAmount => prevAmount + 100);
  setAmount(prevAmount => prevAmount + 100);
  setAmount(prevAmount => prevAmount + 100);
};
​
Now, each setAmount call will use the previous state value to calculate the new state value, and React will still batch the updates. With these changes, the "Deposit 100" button will correctly increment the amount by 400 (100 * 4).
In a nutshell :
Asynchronous Nature of setState:
When you call setAmount, React schedules the state update. The update isn't immediate. So, logging amount right after setAmount may still show the old value.
const handleDeposit = () => {
  setAmount(amount + 100);
  console.log(`amount is ${amount}`); // Will log old amount value
};
​
Batching of Updates:
If multiple state updates are called, React batches them and processes them before the next render to optimize performance.
Updater Functions:
Instead of passing a value to setAmount, you can pass a function that receives the previous state value and returns the new value.
const handleDeposit = () => {
  setAmount(prevAmount => prevAmount + 100); // Uses latest amount value
};