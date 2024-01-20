// # Pre Class Content

// - Hooks
//     - Hooks Intro
//     - Rules Of Hooks
// - More about `useState` hook
//     - `setState` async behaviour
//     - batch updates
//     - setState ( callbackFunc )

// ---

// # Hooks in React :

// React Hooks are functions that let you use state and other React features. Hooks are basically function that allow you to “hook into” react’s features. ( get it 🤓 )

// The most common Hook is `useState`. Here’s how it works:



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



// In the example above:

// 1. **Declaring State**: We declare a state variable called `count`, and initialize it to `0`. `React.useState` returns an array with two elements, and we're using destructuring to get them: `count` is the current state value, and `setCount` is a function that lets us update it.
// 2. **Reading State**: In our JSX code, we can read the current state value using the `count` variable.
// 3. **Updating State**: When the button is clicked, we call `setCount` with the new value of `count + 1`.

// Now, regarding the rules of Hooks:

// 1. **Only Call Hooks at the Top Level**: Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function.
// 2. **Only Call Hooks from React Functions**: Call Hooks from React function components, not regular JavaScript functions.

// These rules ensure that the Hooks are called in the same order each time a component renders, which preserves the state of Hooks between multiple `React.useState` and `useEffect` calls.

// React has many other hooks like `useEffect` `useRef` .. and we will slowly learn each of these

// ---

// # More about `useState` hook :

// [rmNOaoVkjhQxn8mjU80FjDYJxIzrWFci8780tG9g.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/e393c3b4-7f5b-4c96-bb68-059bacff7802/rmNOaoVkjhQxn8mjU80FjDYJxIzrWFci8780tG9g.mp4)

// **Presentation :**

// https://docs.google.com/presentation/d/e/2PACX-1vQ-UHYjcaTVR6KGbb65mQ83_nWwIyKhM_xhAxKRC6d6_51bi4-avNEQCsimXoFB5Q/embed?start=false&loop=false&delayms=3000

// 1. **setState is kind of async**
// 2. **setState batches updates**
// 3. **setState can take updater functions, which will use the value from the react store internally**

// - **`setState` is kind of async**
    
//     Let’s take a simple counter example
    
//     ```jsx
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>setState Async Behaviour</title>
//       </head>
//       <body>
//         <div id="root"></div>
//         <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
//         <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
//         <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    
//         <script type="text/babel">
//           function Counter() {
//             const [count, setCount] = React.useState(0)
    
//             const handleClick = () => {
//               setCount(count + 1)
//               // when you do a console.log(count) here; you'll observe count value hasn't been updated.
//               console.log(count)
//             }
//             return (
//               <div>
//                 <p>Count: {count}</p>
//                 <button onClick={handleClick}>Increment</button>
//               </div>
//             )
//           }
    
//           const rootElement = document.getElementById("root")
//           const reactRoot = ReactDOM.createRoot(rootElement)
//           reactRoot.render(<Counter />)
//         </script>
//       </body>
//     </html>
//     ```
    
//     The **`setCount`**function, which is a state updater function returned by the **`useState`**hook, can be considered asynchronous in nature. While it doesn't return a promise and is not technically an async function, its behavior is similar to asynchronous functions in the sense that state updates may be batched and not happen immediately.
    
//     When you call **`setCount`**, React doesn't guarantee that the state will be updated instantly. Instead, React may decide to batch multiple state updates together to optimize performance. As a result, the updated state value might not be available right after calling **`setCount`**. and hence
    

    const handleClick = () => {
    setCount(count + 1);
        // when you do a console.log(count) here; you'll observe count value hasn't been updated.
    console.log(count)

    };

    
// React may not update the state immediately but will schedule the update to happen at the next render.
    
// - **setState batches updates**
    
//     Let’s take this simple example
    
//     ```jsx
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Batch Updates</title>
//       </head>
//       <body>
//         <div id="root"></div>
//         <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
//         <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
//         <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
//         <script type="text/babel">
//           function App() {
//             const [amount, setAmount] = React.useState(0)
    
//             const handleDeposit = () => {
//               setAmount(amount + 100)
//               setAmount(amount + 100)
//               setAmount(amount + 100)
//               setAmount(amount + 100)
//             }
    
//             const handleWithdraw = () => {
//               setAmount(amount - 100)
//             }
    
//             return (
//               <div>
//                 <h1>Current : {amount}</h1>
//                 <button onClick={handleDeposit}>Deposit 100</button>
//                 <button onClick={handleWithdraw}>Withdraw 100</button>
//               </div>
//             )
//           }
    
//           const rootElement = document.getElementById("root")
//           const reactRoot = ReactDOM.createRoot(rootElement)
//           reactRoot.render(<App />)
//         </script>
//       </body>
//     </html>
//     ```
    
//     When multiple state updates happen in a single event handler, React will batch them together and apply them in a single render cycle. Let's analyze the **`handleDeposit`**function in detail:
    
//     ```jsx
//     const handleDeposit = () => {
//       setAmount(amount + 100);
//       setAmount(amount + 100);
//       setAmount(amount + 100);
//       setAmount(amount + 100);
//     };
//     ```
    
//     When you click the "Deposit 100" button, the **`handleDeposit`** function is called, which in turn calls **`setAmount`** four times. However, due to React's batching behavior, these four updates are combined and applied in a single render cycle.
    
//     This is happening because the **`amount`** value used in all four **`setAmount`** calls is the same (the current state value before any updates). React batches these updates and calculates the new state value based on the initial value, causing the final result to be **`amount + 100`**
    
//     ```jsx
//     const handleDeposit = () => {
//       setAmount(amount + 100); // amount points to 0 
//       setAmount(amount + 100); // amount points to 0 
//       setAmount(amount + 100); // amount points to 0 
//       setAmount(amount + 100); // amount points to 0 
//     };
//     ```
    
//     Now, to ensure each update is based on the most recent state value, you can use the functional form of the state updater, which we will see in the next point.
    
// - **setState can take updater functions, which will use the value from the react store internally**
    
//     ```jsx
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Callback function inside setState</title>
//       </head>
//       <body>
//         <div id="root"></div>
//         <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
//         <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
//         <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
//         <script type="text/babel">
//           function App() {
//             const [amount, setAmount] = React.useState(0)
    
//             const handleDeposit = () => {
//               setAmount((prevAmount) => prevAmount + 100)
//               setAmount((prevAmount) => prevAmount + 100)
//               setAmount((prevAmount) => prevAmount + 100)
//               setAmount((prevAmount) => prevAmount + 100)
//             }
    
//             const handleWithdraw = () => {
//               setAmount(amount - 100)
//             }
    
//             return (
//               <div className="App">
//                 <h1>Current : {amount}</h1>
//                 <button onClick={handleDeposit}>Deposit 100</button>
//                 <button onClick={handleWithdraw}>Withdraw 100</button>
//               </div>
//             )
//           }
    
//           const rootElement = document.getElementById("root")
//           const reactRoot = ReactDOM.createRoot(rootElement)
//           reactRoot.render(<App />)
//         </script>
//       </body>
//     </html>
//     ```
    
//     To ensure each update is based on the most recent state value, you can use the functional form of the state updater, which takes the previous state value as a parameter and returns the updated state value:
    
//     ```jsx
//     const handleDeposit = () => {
//       setAmount(prevAmount => prevAmount + 100);
//       setAmount(prevAmount => prevAmount + 100);
//       setAmount(prevAmount => prevAmount + 100);
//       setAmount(prevAmount => prevAmount + 100);
//     };
//     ```
    
//     Now, each **`setAmount`** call will use the previous state value to calculate the new state value, and React will still batch the updates. With these changes, the "Deposit 100" button will correctly increment the **`amount`** by 400 (100 * 4).
    

// **In a nutshell :**

// 1. **Asynchronous Nature of setState**:
// When you call `setAmount`, React schedules the state update. The update isn't immediate. So, logging `amount` right after `setAmount` may still show the old value.
    
//     ```jsx
//     const handleDeposit = () => {
//       setAmount(amount + 100);
//       console.log(`amount is ${amount}`); // Will log old amount value
//     };
//     ```
    
// 2. **Batching of Updates**:
// If multiple state updates are called, React batches them and processes them before the next render to optimize performance.
// 3. **Updater Functions**:
// Instead of passing a value to `setAmount`, you can pass a function that receives the previous state value and returns the new value.
    
//     ```jsx
//     const handleDeposit = () => {
//       setAmount(prevAmount => prevAmount + 100); // Uses latest amount value
//     };
//     ```
    

// **Docs** :

// [State as a Snapshot – React](https://react.dev/learn/state-as-a-snapshot)

// [Queueing a Series of State Updates – React](https://react.dev/learn/queueing-a-series-of-state-updates)

// [useState – React](https://react.dev/reference/react/useState#setstate)

// ---

// [useState – React](https://react.dev/reference/react/useState#ive-updated-the-state-but-logging-gives-me-the-old-value)

// [useState – React](https://react.dev/reference/react/useState#ive-updated-the-state-but-the-screen-doesnt-update)

// [useState – React](https://react.dev/reference/react/useState#im-getting-an-error-too-many-re-renders)








// import { useState } from 'react';

// export default function Form() {
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState('Hi!');
//   if (isSent) {
//     return <h1>Your message is on its way!</h1>
//   }
//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       setIsSent(true);
//       sendMessage(message);
//     }}>
//       <textarea
//         placeholder="Message"
//         value={message}
//         onChange={e => setMessage(e.target.value)}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// }

// function sendMessage(message) {
//   // ...
// }






// import { useState } from 'react';

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 1);
//         setNumber(number + 1);
//         setNumber(number + 1);
//       }}>+3</button>
//     </>
//   )
// }






<button onClick={() => {
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
}}>+3</button>



// const [name, setName] = useState('Edward');

// function handleClick() {
//   setName('Taylor');
//   setAge(a => a + 1);
//   // ...







//  ** CLASS-NOTES **




// document.createElement :- it returns a HTML DOM element.
var Div1 = document.createElement("div");

// React.createElement :- it returns an Object with the following properties, that represents DOM element.
var Div2 = React.createElement("div",{}, null);


// When using 'useState' there are a few things to note about.

// 1. setState is kind of 'Async' nature
// 2. setState batches updates
// 3. setState can take updater functions, which will use the value from the React store internally.












// Closures in JavaScript are a fundamental concept that stems from the language's ability to have functions within functions. It's like a backpack that a function carries around with it, containing all the variables it had access to when it was created. This enables us to have "private" variables which can be manipulated even after the outer function has finished executing. Let’s break down the topic step by step:

// 1. **Scope and Environment :**
//     - **Scope:** In JavaScript, each function has its own scope, meaning it has access to its own variables and the variables of outer functions.
//     - **Environment:** When a function is created, it saves the environment — the variables it has access to at that point in time.
// 2. **Nested Functions :**
//     - Functions defined inside other functions have access to the outer function’s variables, creating a scope chain.
// 3. **Creating a Closure:**
//     - A closure is formed when you have a nested function that accesses variables from an outer function. Even after the outer function has run, the inner function remembers the variables from the outer scope.
// 4. **Example:**

// ```jsx
// function createCounter() {
//     let count = 0;  // a variable in the outer scope

//     function increment() {  // a nested function
//         count++;  // accessing outer scope variable
//         console.log(count);
//     }

//     return increment;  // returning the nested function
// }

// let counter = createCounter();  // store the returned function in a variable
// counter();  // Output: 1
// counter();  // Output: 2

// ```

// - In this code:
//     - `createCounter` is an outer function with a variable `count`.
//     - `increment` is a nested function that accesses and modifies `count`.
//     - We return `increment` from `createCounter`, and every time we call `counter()`, it remembers the value of `count` and increments it.
// 1. **Benefits of Closures:**
//     - **Privacy:** Closures help in creating private variables which can prevent accidental changes from the outside code.
//     - **Persistence:** The variables in the closure hold their value and aren’t reset each time the function is called.
//     Some Practical application in real world include `debouncing` `throttling` etc
// 2. **Understanding the Magic:**
//     - The magic is in the concept of scope and environment. Even though `createCounter` has finished executing, the `increment` function still has access to `count` because it remembers its scope environment.

// A better way to understand this would be to use https://pythontutor.com/render.html#mode=display 

// - Go to the above link
// - Paste the above code snippet
// - Click on Visualize Execution

// ---

// # Event Handling in React :

// Event handling in React is essentially about managing how your application responds to user interactions, like clicks, form input, or mouse movements. In JavaScript, we typically interact with the Document Object Model (DOM) to handle these events. However, React wraps these native events with instances of the SyntheticEvent class to ensure events have consistent properties across all browsers.

// Here's how you break it down:

// 1. **Event Naming Convention**:
//     - In React, the naming convention for event handlers is camelCase rather than lowercase.
//     - Example: `onClick` instead of `onclick`, `onChange` instead of `onchange`.
// 2. **Event Handler Assignment**:
//     - In React, you assign event handlers as properties on DOM elements.
//     - Example: `<button onClick={handleClick}>Click me</button>`.
// 3. **Defining Event Handlers**:
//     - Event handlers are usually defined as methods in your component class or as functions in functional components.

// ### Practical Examples

// **1. Handling Click Events :**

// ```jsx
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Click Event Handler Example</title>
//   </head>
//   <body>
//     <div id="root"></div>
//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
//     <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
//     <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
//     <script type="text/babel">
//       // Component called ClickExample which has button with click event and click handler
//       function ClickExample() {
//         function handleClick() {
//           console.log(
//             "Life is like a box of chocolates, you never know what you are gonna get"
//           )
//         }

//         return <button onClick={handleClick}>Click me</button>
//       }

//       const rootElement = document.getElementById("root")
//       const reactRoot = ReactDOM.createRoot(rootElement)
//       reactRoot.render(<ClickExample />)
//     </script>
//   </body>
// </html>
// ```

// In this example, we're creating a button that prints a  message to console each time it's clicked. The `handleClick` function is called each time the button is clicked.

// **2. Handling Input Changes :**

// ```jsx
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Input and Change Event</title>
//   </head>
//   <body>
//     <div id="root"></div>
//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
//     <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
//     <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
//     <script type="text/babel">
//       // Component called InputExample which has input with change event and change event handler
//       function InputExample() {
//         function handleChange(event) {
//           console.log("Input value changed to:", event.target.value)
//         }
//         return <input type="text" onChange={handleChange} />
//       }

//       const rootElement = document.getElementById("root")
//       const reactRoot = ReactDOM.createRoot(rootElement)
//       reactRoot.render(<InputExample />)
//     </script>
//   </body>
// </html>
// ```

// Here, whenever the user types something into the input box, the new value is logged to the console.

// These examples should give beginners a simple understanding of how events can be handled in React, by executing functions in response to user interactions without delving into state management yet.

// **React Documentation for Synthetic Events**

// For a detailed list of synthetic events in React, you might want to refer to the [React documentation on Synthetic Events](https://react.dev/learn/responding-to-events). Here, you'll find a comprehensive list of supported events, how to use them, and the properties available on the SyntheticEvent instances.














// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>React Template</title>
//   </head>
//   <body>
//     <div id="root">
//     </div>
//   </body>
//   <script src="https://www.unpkg.com/react@18.2.0/umd/react.development.js"></script>
//   <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
//   <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
//   <script type="text/babel">
//     // My Code goes here;
//   </script>
// </html>




// Task 1 :
// div#root ( it'll be your root element )
// I want you to create a
// div element ( using React.createElement )
// it should have id "container"
// it should have class "main"
// it should have 3 children
// child1 - h3 - Learning React
// child2 - p - Day 2
// child3 - button - Click Me!
// Task 2 :
// div#root ( it'll be your root element )
// I want you to create a
// div element ( using JSX )
// it should have id "container"
// it should have class "main"
// it should have 3 children
// child1 - h3 - Learning React
// child2 - p - Day 2
// child3 - button - Click Me! - Clicking on this button should print "button clicked..." to console
// Task 3 :
// Create a React Application :

// This application should have the following components.
// Navbar Component
// div with id navbar with 2 children elements
// child1 is a p element with text "navbar"
// child2 is another p element with text "links will be displayed here"
// Main Component
// Fragment wrapper
// it should have a p element with text "main content"
// Footer Component
// div with id footer
// p element with text Footer
// Task 4 :
// Create a react application

// App component which should render the following components
// Navbar
// some image on left side of navbar as logo
// list of a tags on right side of navbar
// Main
// Sidebar
// MenuItem
// p which should have some text like "home","explore","categories"
// ProductsContainer
// ProductItem
// image (placeholder image using img element)
// p element - product name
// h3 element - product price
// ProductItem
// image (placeholder image using img element)
// p element - product name
// h3 element - product price
// ProductItem
// image (placeholder image using img element)
// p element - product name
// h3 element - product price
// ProductItem
// image (placeholder image using img element)
// p element - product name
// h3 element - product price
// Footer
// div with id footer
// list of links (dummy links)