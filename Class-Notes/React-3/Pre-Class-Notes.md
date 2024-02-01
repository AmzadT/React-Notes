# PRE-CLASS-NOTES :-



<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>setState Async Behaviour</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
    </html>


```jsx

    <script type="text/bable">

        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></scrip>
        <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
        <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>


        // 'document.createElement' it returns a HTML DOM element.
        var div1 = document.createElement('div');
        console.log(div1);

        // 'React.createElement' it returns an 'Object' that represents the DOM element.
        var div2 = React.createElement("div",{},null);
        console.log(div2);

        // const rootElement = document.getElementById("root")
        // const reactRoot = ReactDOM.createRoot(rootElement)
        // reactRoot.render(<Counter />)

    </script>

```
















# Pre Class Content :- (Notion Docs Notes)




- Hooks
    - Hooks Intro
    - Rules Of Hooks
- More about `useState` hook
    - `setState` async behaviour
    - batch updates
    - setState ( callbackFunc )

---

# Hooks in React :

React Hooks are functions that let you use state and other React features. Hooks are basically function that allow you to “hook into” react’s features. ( get it 🤓 )

The most common Hook is `useState`. Here’s how it works:

```jsx

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

```

In the example above:

1. **Declaring State**: We declare a state variable called `count`, and initialize it to `0`. `React.useState` returns an array with two elements, and we're using destructuring to get them: `count` is the current state value, and `setCount` is a function that lets us update it.
2. **Reading State**: In our JSX code, we can read the current state value using the `count` variable.
3. **Updating State**: When the button is clicked, we call `setCount` with the new value of `count + 1`.

Now, regarding the rules of Hooks:

1. **Only Call Hooks at the Top Level**: Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function.
2. **Only Call Hooks from React Functions**: Call Hooks from React function components, not regular JavaScript functions.

These rules ensure that the Hooks are called in the same order each time a component renders, which preserves the state of Hooks between multiple `React.useState` and `useEffect` calls.

React has many other hooks like `useEffect` `useRef` .. and we will slowly learn each of these

---

# More about `useState` hook :

[rmNOaoVkjhQxn8mjU80FjDYJxIzrWFci8780tG9g.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/e393c3b4-7f5b-4c96-bb68-059bacff7802/rmNOaoVkjhQxn8mjU80FjDYJxIzrWFci8780tG9g.mp4)

**Presentation :**

https://docs.google.com/presentation/d/e/2PACX-1vQ-UHYjcaTVR6KGbb65mQ83_nWwIyKhM_xhAxKRC6d6_51bi4-avNEQCsimXoFB5Q/embed?start=false&loop=false&delayms=3000

1. **setState is kind of async**
2. **setState batches updates**
3. **setState can take updater functions, which will use the value from the react store internally**

- **`setState` is kind of async**
    
    Let’s take a simple counter example
    
    ```jsx
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
    ```
    
    The **`setCount`**function, which is a state updater function returned by the **`useState`**hook, can be considered asynchronous in nature. While it doesn't return a promise and is not technically an async function, its behavior is similar to asynchronous functions in the sense that state updates may be batched and not happen immediately.
    
    When you call **`setCount`**, React doesn't guarantee that the state will be updated instantly. Instead, React may decide to batch multiple state updates together to optimize performance. As a result, the updated state value might not be available right after calling **`setCount`**. and hence
    
    ```jsx
     const handleClick = () => {
        setCount(count + 1);
    		// when you do a console.log(count) here; you'll observe count value hasn't been updated.
        console.log(count)
    
      };
    ```
    
    React may not update the state immediately but will schedule the update to happen at the next render.
    
- **setState batches updates**
    
    Let’s take this simple example
    
    ```jsx
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
    ```
    
    When multiple state updates happen in a single event handler, React will batch them together and apply them in a single render cycle. Let's analyze the **`handleDeposit`**function in detail:
    
    ```jsx
    const handleDeposit = () => {
      setAmount(amount + 100);
      setAmount(amount + 100);
      setAmount(amount + 100);
      setAmount(amount + 100);
    };
    ```
    
    When you click the "Deposit 100" button, the **`handleDeposit`** function is called, which in turn calls **`setAmount`** four times. However, due to React's batching behavior, these four updates are combined and applied in a single render cycle.
    
    This is happening because the **`amount`** value used in all four **`setAmount`** calls is the same (the current state value before any updates). React batches these updates and calculates the new state value based on the initial value, causing the final result to be **`amount + 100`**
    
    ```jsx
    const handleDeposit = () => {
      setAmount(amount + 100); // amount points to 0 
      setAmount(amount + 100); // amount points to 0 
      setAmount(amount + 100); // amount points to 0 
      setAmount(amount + 100); // amount points to 0 
    };
    ```
    
    Now, to ensure each update is based on the most recent state value, you can use the functional form of the state updater, which we will see in the next point.
    
- **setState can take updater functions, which will use the value from the react store internally**
    
    ```jsx
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
    ```
    
    To ensure each update is based on the most recent state value, you can use the functional form of the state updater, which takes the previous state value as a parameter and returns the updated state value:
    
    ```jsx
    const handleDeposit = () => {
      setAmount(prevAmount => prevAmount + 100);
      setAmount(prevAmount => prevAmount + 100);
      setAmount(prevAmount => prevAmount + 100);
      setAmount(prevAmount => prevAmount + 100);
    };
    ```
    
    Now, each **`setAmount`** call will use the previous state value to calculate the new state value, and React will still batch the updates. With these changes, the "Deposit 100" button will correctly increment the **`amount`** by 400 (100 * 4).
    

**In a nutshell :**

1. **Asynchronous Nature of setState**:
When you call `setAmount`, React schedules the state update. The update isn't immediate. So, logging `amount` right after `setAmount` may still show the old value.
    
    ```jsx
    const handleDeposit = () => {
      setAmount(amount + 100);
      console.log(`amount is ${amount}`); // Will log old amount value
    };
    ```
    
2. **Batching of Updates**:
If multiple state updates are called, React batches them and processes them before the next render to optimize performance.
3. **Updater Functions**:
Instead of passing a value to `setAmount`, you can pass a function that receives the previous state value and returns the new value.
    
    ```jsx
    const handleDeposit = () => {
      setAmount(prevAmount => prevAmount + 100); // Uses latest amount value
    };
    ```