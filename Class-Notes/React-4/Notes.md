Task 1 :

Create a Project using vite
Steps to install react package using vite

Step 1 :
npm create vite@latest <name-of-app> -- --template react

Step 2: Go inside your project ( where package.json file exists )
cd <name-of-project>

Step 3 : Install all the packages
npm install

Step 4 : Run the server by using the following command
npm run dev
Create a App component which should have the following Child components
Navbar - Should display text "navbar"
Middle - Should display text "middle"
Sidebar - Should display text "sidebar"
Main - Should display text "main"
Footer - Should display text "footer"


Task 2

Update the missing piece and write logic to update form elements like input,checkbox, select using useState hook.


import { useState } from "react";

function App() {

  const [formState, setFormState] = useState({
    title: "",
    completed: false,
    assignedTo: "",
  });

  function handleChange(event) {
    // logic to update the input value should go here;
    
  }

  return (
    <>
      <form>
        <input
          name="title"
          placeholder="Add new task"
        />
        <br />
        <br />
        <label htmlFor="completed">
          Completion Status
          <input
            name="completed"
            type="checkbox"
            id="completed"
          />
        </label>
        <br />
        <br />
        <select
          name="assignedTo">
          <option value="">Assign Task to</option>
          <option value="Amar">Amar</option>
          <option value="Akbar">Akbar</option>
          <option value="Anthony">Anthony</option>
        </select>
      </form>
    </>
  );
}

export default App;








# Vite

# Vite :

Vite is a modern, fast build tool for web projects, including React applications. It serves as an alternative to older tools like Webpack. The main advantage of Vite is its speed, primarily because it leverages modern JavaScript features and avoids unnecessary work during development.

# Why Use Vite for React ?

1. **Speed**: Vite significantly speeds up the development process. It uses ES Modules, which allows your browser to understand your JavaScript code directly without extensive processing.
2. **Hot Module Replacement (HMR)**: Vite offers a faster HMR, which means you can see your changes in real-time without refreshing the entire page or losing the current state.
3. **Simplicity**: Setting up a React project with Vite is straightforward, requiring minimal configuration.
4. **Modern JavaScript**: It's built to work with the latest JavaScript features, making your development process smoother.

# Getting Started with Vite for a React Application

### Step-by-Step Guide :

1. **Install Node.js**: Ensure you have `Node.js` and `npm` installed on your computer. You can check your current `node` and `npm` version by
    
    ```jsx
    node -v
    ```
    
    ```jsx
    npm -v
    ```
    
2. **Create a New Project**: Open your terminal and run:
    
    ```jsx
    npm create vite@latest <name-of-project> -- --template react
    ```
    
    This command creates a new directory with whatever name you have given to your project in the above command with a basic React setup using Vite.
    
3. **Navigate to Your Project**:
    
    ```bash
    cd <name-of-project>
    ```
    
4. **Install Dependencies**:
    
    ```bash
    npm install
    ```
    
    This command installs all the necessary dependencies for your project.
    
5. **Start the Development Server**:
    
    ```bash
    npm run dev
    ```
    
    This command starts a local development server. You can view your app by going to `http://localhost:3000` in your browser.
    

# Understanding the Project Structure

After creating your project, you'll notice several files and folders:

- `node_modules/`: Contains all the packages and dependencies your project needs.
- `public/`: Stores static assets like images.
- `src/`: This is where you'll spend most of your time. It contains your React components.
    - `App.jsx`: The main React component.
    - `main.jsx`: The entry point for your application, where React is rendered into the DOM.
- `index.html`: The base HTML file.
- `vite.config.js`: The configuration file for Vite, typically requiring little to no changes for basic projects.
- `package.json`: Lists your project dependencies and scripts.

# Building a Counter with State in Vite

Let's create a simple counter application:

1. **Modify `App.jsx`**:
Open `src/App.jsx` and replace its content with:
    
    ```jsx
    import React from "react";
    
    function App() {
      const [count, setCount] = React.useState(0);
    
      function increment() {
        setCount(count + 1);
      }
    
      function decrement() {
        setCount(count - 1);
      }
    
      return (
        <div>
          <h1>Counter: {count}</h1>
          <button onClick={increment}>Increase</button>
          <button onClick={decrement}>Decrease</button>
        </div>
      );
    }
    
    export default App;
    ```
    
    Here, you're using the `useState` hook to manage the state of your counter.
    
2. **View Your Application**:
If your development server is running, you should see the counter in your browser. Click the buttons to increase or decrease the count.

# Conclusion

That's a basic introduction to using Vite with React. Vite simplifies the setup process, offers faster development experiences, and allows you to focus on building your React application efficiently. As you progress, you'll find Vite to be a powerful tool in your React development toolkit.








# Forms in React

# Objectives :

1. Learn to create and handle forms in React.
2. Understand how to update objects in React's state.
3. Implement form submission and prevent default browser submission behavior.
4. Work with different types of input elements and their event handlers.

**Setting Up the Form Component and Integrating it to `App`**

- In your `src` directory, create a new folder called `components` and a  file named `FormComponent.jsx`. This component will contain our form.
- Export this FormComponent and import it to App component.

App.jsx

```jsx
import "./App.css";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    <>
      <FormComponent />
    </>
  );
}

export default App;
```

FormComponent.jsx

```jsx
import { useState } from "react";

const FormComponent = () => {
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    country: "United States",
    isMarried: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    const formInputValue =
      type === "checkbox" ? checked : type === "number" ? Number(value) : value;

    const newState = {
      ...formState,
      [name]: formInputValue,
    };

    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          margin: "30px",
          padding: "20px",
          border: "1px solid black",
        }}
      >
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="number"
          name="age"
          value={formState.age}
          onChange={handleInputChange}
          placeholder="Age"
        />
        <select
          name="country"
          value={formState.country}
          onChange={handleInputChange}
        >
          <option value="">Select a country</option>
          <option value="India">India</option>
          <option value="China">China</option>
          <option value="Nepal">Nepal</option>
          <option value="USA">USA</option>
          <option value="UAE">UAE</option>
          <option value="UK">UK</option>
        </select>
        <label>
          Married:
          <input
            type="checkbox"
            name="isMarried"
            checked={formState.isMarried}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default FormComponent;
```

**Explanation of Key Concepts**

1. **Forms and Handle Submit** :
    - The `handleSubmit` function is triggered when the form is submitted.
    - `e.preventDefault()` is used to prevent the default form submission behavior, which refreshes the page.
2. **Updating Objects in React State** :
    - We maintain the form data in a single state object, `formState`. React's state can hold various types of data, including objects. However, when dealing with objects in state, it's crucial to understand the correct way to update them.
    - The `handleInputChange` function updates `formState` based on the input's `name` and `value`.
    - In the above example, You can observe that we did not mutate the state object directly ? Why ?
    
    **Why Not Mutate State Directly ?**
    
    In React, the state should be treated as immutable. This means you shouldn't directly modify (or mutate) the state object. For instance, doing something like `formState.name="bruce"` is a bad practice. Here’s why:
    
    1. **React's Re-rendering Mechanism**: React's re-rendering is triggered by a change in state or props. If you mutate the state directly, React won't be able to detect that there's been a change, leading to potential bugs and UI inconsistencies.
    2. **Maintaining Predictability**: Treating state as immutable leads to more predictable and easy-to-understand code, which is crucial in React's declarative nature.
    
    ### Correct Way to Update Object State
    
    When you want to update an object in the state, the best practice is to create a new object with the updated values. In the context of our form above, let’s see how this applies:
    
    ```jsx
      const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        const formInputValue =
          type === "checkbox" ? checked : type === "number" ? Number(value) : value;
    
    		// create a new object with the updated values
        const newState = {
          ...formState,
          [name]: formInputValue,
        };
    
        setFormState(newState); // set that newly created object as our latest state using setFormState function
      };
    ```
    
    **Key Takeaways**
    
    - **Creating a New Object**: The spread operator (`...`) is used to create a new object with the properties of the current state. This ensures we're not mutating the state directly.
    - **Updating the New Object**: After creating the new object, we update the relevant key with the new value.
    - **Setting the State**: Finally, we use the `setFormState` function to update the state with our new object.
    
    By following this approach, you ensure that React can accurately track state changes and update the UI accordingly. This practice leads to more robust and maintainable React applications.
    
3. **Prevent Default** :
    - `e.preventDefault()` in `handleSubmit` stops the browser's default form submission, allowing us to handle it within React.
4. **Different Input Elements and Their Event Handlers**:
    - **Text and Number Inputs**: These update the corresponding state properties directly. Based on the type we are updating string or number as value by applying our logic
    - **Select Box**: Reacts to changes and updates the `country` in the state.
    - **Checkbox**: Manages a boolean value; uses `checked` instead of `value`.

### Conclusion

This covers various input types and demonstrates how to handle form data in React. You've learned how to update state objects, prevent default form submission, and use different event handlers for various input types. Experiment with this setup to deepen your understanding of forms in React.









# List and keys in React

### Key Concepts :

1. Updating arrays in state
2. List and keys and the importance of keys in lists

1. **Create Your React Project**:
    - Run `npm create vite@latest my-todo-app -- --template react` in your terminal to create a new project.
    - Enter the project directory: `cd my-todo-app`.
    - Install necessary dependencies: `npm install`.
    - Start your development server: `npm run dev`.

2. Building the Todo List Application

**App.jsx**:

```jsx
function App() {
  const [taskList, setTaskList] = useState([]);

  const addItem = (newTask) => {
    const updatedTaskList = [...taskList, newTask];
    setTaskList(updatedTaskList);
  };

  const deleteItem = (taskId) => {
    const updatedTaskList = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTaskList);
  };

  const toggleItem = (taskId) => {
    const updatedTaskList = taskList.map((task) =>
      task.id === taskId ? { ...task, status: !task.status } : task
    );
    setTaskList(updatedTaskList);
  };

  return (
    <>
      <AddTodo addItem={addItem} />
      <div>
        <h5>List of tasks</h5>
        {taskList.map((task) => (
          <TaskItem
            key={task.id}
            {...task}
            deleteItem={deleteItem}
            toggleItem={toggleItem}
          />
        ))}
      </div>
    </>
  );
}
```

**AddTodo.jsx**:

```jsx
const AddTodo = ({ addItem }) => {
  const [taskName, setTaskName] = React.useState("");

  const handleAddButtonClick = () => {
    const newTask = {
      id: Date.now() + Math.random(),
      title: taskName,
      status: false,
    };
    addItem(newTask);
    setTaskName('');
  };

  return (
    <div className="add-todo">
      <input
        placeholder="Add your task here"
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
      />
      <button onClick={handleAddButtonClick}>Add Todo</button>
    </div>
  );
};

```

**TaskItem.jsx**:

```jsx
const TaskItem = ({ id, title, status, deleteItem, toggleItem }) => {
  return (
    <div className="task-item">
      <p>{title}</p>
      <p>{status ? "Completed" : "Not Completed"}</p>
      <button onClick={() => deleteItem(id)}>Delete</button>
      <button onClick={() => toggleItem(id)}>Toggle Status</button>
    </div>
  );
};

```

**App Component**: 

Central component to manage state and render other components.

**State Management and Prop Passing**:

- The `App` component will handle the list of tasks using React's state.
- The `addItem`, `deleteItem`, and `toggleItem` functions will be passed down as props for respective actions on tasks.

### **Immutable State Updates** :

**Why Treat Arrays as Immutable in React?**

1. **JavaScript Arrays and Mutability**:
    - In JavaScript, arrays are mutable, meaning you can change their content directly.
    - However, when it comes to React state, this direct modification approach should be avoided.
2. **React's State and Immutability**:
    - React's state should be treated as immutable. Immutability in state management means not altering the state directly but rather creating a new version of it whenever changes are needed.
    - This approach ensures React can track changes efficiently and update the UI in a predictable manner.
    
    But Why ?
    
    **The Problems with Mutable Updates**
    
    1. **Direct Mutation Leads to Bugs**:
        - Directly mutating state (like using `push`, `pop`, or modifying `arr[0] = 'newValue'`) can lead to unexpected behaviors and bugs.
        - React may not detect these mutations, leading to the UI not re-rendering in response to state changes.
    2. **Reference Type Nature of Arrays**:
        - Arrays are reference types in JavaScript. Modifying an array directly alters the array in its original memory location, affecting every other part of your code that references it.
    
    **Correct Way to Update Arrays in State**
    
    1. **Creating New Arrays for Updates**:
        - To update an array in React state, always create a new array.
        - Utilize non-mutating methods like `map`, `filter` or spread syntax (`[...arr]`).
    2. **Reference Table for Array Operations in React**:
        
        
        | Avoid (Mutates the Array) | Prefer (Returns a New Array) |
        | --- | --- |
        | Adding: push, unshift | concat, [...arr, newItem] |
        | Removing: pop, shift, splice | filter, slice |
        | Replacing: splice, arr[i] = ... | map |
        | Sorting: reverse, sort | Copy the array first, then sort |
        - **Example for Adding**: Instead of `arr.push(newItem)`, use `[...arr, newItem]`.
        - **Example for Removing**: Replace `arr.splice(index, 1)` with `arr.filter((item, idx) => idx !== index)`.
        - **Example for Replacing**: Use `arr.map((item, idx) => idx === index ? newValue : item)` instead of `arr[index] = newValue`.
        - **Example for Sorting**: Copy the array using `[...arr]` before applying `sort()`.
        
    
    ### The Importance of Keys in Lists :
    
    1. **Key Prop in Rendering Lists**:
        - Assign a unique `key` prop to each item in a list for efficient rendering.
        - The `key` helps React identify and track each list item.
    2. **Performance Considerations**:
        - Proper key usage enhances performance by allowing React to reuse components and manage state effectively.

Summary : 

- Understanding state immutability, key usage, and component interaction are key takeaways.
- Treating arrays in state as immutable leads to better performance, fewer bugs, and more predictable UI updates.
- Understanding and applying these principles will help in building robust and efficient React applications.









# Module CSS

### The Problem with Global CSS

In a typical React app, you might have a global CSS file that styles your components. The issue here is that CSS is, well, global. If you use the same class name in different components, the styles can clash, causing unexpected behavior.

**Example with Global CSS :**

In this example, both `App.css` and `Greetings.css` have a `.title` class. The `Greetings` component's `.title` class will override the `.title` class in `App.css`, causing a conflict.

```jsx
.
├── README.md
├── index.html
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── components
│   │   ├── Greetings.css
│   │   └── Greetings.jsx
```

```jsx
// App.jsx
import "./App.css"
import Greetings from "./components/Greetings"

export default function App() {
  return (
    <div>
      <p className="title"> Some other text in app component</p>
      <Greetings />
    </div>
  )
}
```

```jsx
// App.css
.title {
  color: green;
  font-size: 48px;
}
```

```jsx
// src/components/Greetings.jsx
import "./Greetings.css"

function Greetings() {
  return (
    <div>
      <p>Some other lorem ipsum text in greetings component</p>
      <p className="title">Hello People</p>
    </div>
  )
}

export default Greetings
```

```jsx
// src/components/Greetings.css
.title {
  color: blue;
  font-size: 24px;
}
```

---

### The Solution: Module CSS

Module CSS scopes your CSS to the component level. This means the styles you define in a `module.css` file will only apply to the component that imports it.

**Example with Module CSS :** In this example, the `.title` class in `Greetings.module.css` is scoped to the `Greetings` component. It won't interfere with the `.title` class in `App.css`.

1. **Rename your CSS file**: Change the extension to `.module.css`. For example, `Greetings.css` becomes `Greetings.module.css`.
2. **Import with a specific syntax**:
    
    ```jsx
    import styles from './Greetings.module.css';
    
    ```
    
    This `styles` object now holds all your class names as properties.
    
3. **Use it in JSX**:
    
    ```jsx
    <p className={styles.title}>Hello People</p>
    
    ```
    
    Here, `styles.title` refers to the `.title` class in `Greetings.module.css`.
    

### Why is this Awesome?

1. **No More Clashes**: Each component has its own scope, so no more worrying about overriding styles.
2. **Code Splitting**: Since the styles are scoped to the component, they can be loaded on demand, making your app faster.
3. **Better Maintainability**: It's easier to know which styles apply to which component, making your codebase easier to understand and maintain.

```jsx
.
├── README.md
├── index.html
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── components
│   │   ├── Greetings.module.css
│   │   └── Greetings.jsx
```

```jsx
import "./App.css"
import Greetings from "./components/Greetings"

export default function App() {
  return (
    <div>
      <p className="title"> Some other text in app component</p>
      <Greetings />
    </div>
  )
}
```

```jsx
.title {
  color: green;
  font-size: 48px;
}
```

```jsx
import styles from "./Greetings.module.css"

function Greetings() {
  return (
    <div>
      <p>Some other lorem ipsum text in greetings component</p>
      <p className={styles.title}>Hello People</p>
    </div>
  )
}

export default Greetings
```

```jsx
.title {
  color: blue;
  font-size: 24px;
}
```

**In a nutshell :**

- Global CSS is, well, global. It can cause clashes.
- Module CSS scopes your styles to the component, preventing these clashes.
- To use Module CSS, rename your file to `.module.css`, import it using a specific syntax, and then use it in your JSX.










# Understanding batch updates in react

# Is `setState` async ?

```jsx
function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count); // You will see the older value of count in console
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

Here when you check the value of `count`. You will see that it is being pointed to an older value. But why ?

After updating the state, React will eventually re-render the component to reflect the new state. But this re-render doesn’t happen right away. It’s scheduled and managed by React's reconciliation process, which is why it seems asynchronous. So if you try to log the value of **`count`** right after calling **`setCount`**, you'll still see the old value, not the updated one. This is because the update to **`count`** hasn't been applied yet—it's scheduled to happen later. This process is known as batching. React batches multiple state updates for performance optimization.

Check out the below example to understand batching better. 

```jsx
function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
		console.log(count);
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

Expected Behaviour : `count` value being updated to 3

Actual Behaviour : `count` value is 1

Why is that the case ?

- Each `setCount(count + 1)` call doesn't immediately update the `count`. They all see the same initial value of `count`.
- Due to React's batching, all these updates are processed together.
- As a result, `count` increases only by 1, not 3, even though `setCount` is called three times.

### Practical Implication

Understanding this asynchronous nature is crucial for coding correctly. For instance, if you have sequential state updates that depend on the previous state, you should use the functional form of the updater function:

```jsx
setCount(prevCount => prevCount + 1);
```

This ensures that you're working with the most recent state value. Let’s see how that goes in the next section

```jsx
function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    console.log(count);
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

**Advantages of this Approach:**

- By using `prevCount => prevCount + 1`, each call to `setCount` uses the most recent state value.
- It ensures that each update is based on the state from the previous update.
- After clicking the button, `count` correctly increments by 3.

In scenarios where you need to perform multiple state updates based on the previous state value, always use the functional form of the state updater function (`prevCount => prevCount + 1`). This ensures that each update is applied sequentially and accurately, respecting React's asynchronous state update mechanism.

### Summary

- `setCount` is asynchronous because React batches updates and schedules re-rendering for later, not immediately.
- This behavior is part of React's design to optimize performance.
- Always be mindful of this when working with state updates, especially when they are sequential or dependent on the previous state.
- In scenarios where you need to perform multiple state updates based on the previous state value, always use the functional form of the state updater function (`prevCount => prevCount + 1`). This ensures that each update is applied sequentially and accurately, respecting React's asynchronous state update mechanism.