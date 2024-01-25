<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Intro</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://www.unpkg.com/react@18.2.0/umd/react.development.js"></script>
  <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script>
    // My Code goes here;
  </script>
</html>





# Pre Class Notes

- Intro to react
- Framework vs Library
- Why react?
    - Developer Experience
    - Single Page Application ( SPA )
    - Performance
        - Virtual DOM
        - Batch updates

# React Intro :

React is a JavaScript library that's your best friend when it comes to building cool user interfaces (UIs) for web applications. It's a creation of Facebook and is loved by developers for making UI building a breeze. It lets you create reusable UI components and manage how data is displayed and updated on web pages. And the good news? It keeps getting better with new features!

Here is the link to it’s docs

[React](https://react.dev/)

# **Framework and Library** :

In the coding world, libraries and frameworks are your toolkit and blueprint, respectively.

- **Library**:
    - It's a collection of ready-to-use code snippets that you can call upon.
    - *Example*: Imagine a library as a toolbox. You pick the tools you need, when you need them.
- **Framework**:
    - It's a structured template that tells you how to build your application.
    - *Example*: It’s like a recipe. You follow the steps and add your ingredients to cook up an app.

In a nutshell, a library gives you tools, while a framework gives you a structured plan. The use case is basically the same, Both helps developer build web applications  faster and better

- **Click here if you need more detailed explanation about Frameworks and Libraries**
    
    # **Framework and Library** :
    
    ## **Library** :
    
    A library is a collection of reusable code that provides specific functionality. You can think of it as a set of tools that you can choose to use in your project. You are in control of when and how you use these tools. Libraries help you avoid rewriting common functionality and save time.
    
    ## **Framework** :
    
    A framework, on the other hand, provides a structure and a set of rules for building applications. You can think of it as a blueprint that guides you on how to build your project. When using a framework, you need to follow its conventions and design patterns, and it often dictates the application's structure. In essence, a framework provides a foundation, and you fill in the specific details of your application.
    
    To summarise, a library is like a set of tools you can use in your project as needed, while a framework is a blueprint that provides a structure and rules for your project.
    
    Need more understanding ? Okay how about this ?
    
    ## **Library** :
    
    Let's say you want to build a house. A library would be like buying pre-made building materials like bricks, lumber, nails, and roofing shingles that you can use to build your house. You have control over how you use those materials, and you can use them to build the house you want, but you have to do all the work yourself.
    
    ## **Framework** :
    
    If you happened to order some furniture on e-commerce ( any DIY kit ) website. Let’s take an example of cupboard. It comes with all the necessary parts. There will be a manual which contains all the instructions on how to assemble it. You have less control over how the cupboard looks and functions, but it's easier and faster to assemble since you're following a pre-set structure and guidelines.
    
    Frameworks provides a general structure ( a particular way of writing code ) and you as a developer have to follow that exact same structure. Library on the other hand provides you some tools( code to work with ) and does not enforce developer to follow any structure. 
    
    Both makes development process faster and better. 
    

# Why is React so popular :

React shines bright for a few solid reasons:

- **Ease of Development**:
    - React lets you create reusable components, making development quicker and collaborative fun. Check the comparison below to see how React simplifies code compared to Vanilla JavaScript:
        
        ![Screenshot 2022-11-11 at 4.38.49 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/e5103672-7e05-43fa-8812-6bd25346278b/Screenshot_2022-11-11_at_4.38.49_PM.png)
        
- **Single Page Applications (SPAs)**:
    - Think of a Single Page Application like using an advanced remote control for your TV. In a traditional website, every time you click a button or a link, it's like changing the channel: the screen goes blank for a second, and then the new channel (or page) loads. With an SPA, it's like switching from live TV to a smart TV where you can smoothly scroll through options, preview shows, and choose what you want to watch without any delay or "blackout" screen. Everything happens seamlessly on the same screen.
    - React is your go-to buddy for building SPAs as it handles dynamic updates like a champ, ensuring a smooth user experience.
    - ************************Click here if you need more detailed explanation about SPA************************
        
        
        ****React is a JavaScript library that's excellent for building SPAs. But what is Single Page Application or in short SPA
        
        ### ****What's a Single Page Application (SPA)?****
        
        Think of a Single Page Application like using an advanced remote control for your TV. In a traditional website, every time you click a button or a link, it's like changing the channel: the screen goes blank for a second, and then the new channel (or page) loads. With an SPA, it's like switching from live TV to a smart interface where you can smoothly scroll through options, preview shows, and choose what you want to watch without any delay or "blackout" screen. Everything happens seamlessly on the same screen.
        
        ### **How Does SPA Work?**
        
        In traditional websites, every action usually involves a request to the server, and the server sends back an entirely new page. This is like the "blackout" when changing channels. 
        Say in a traditional Multi Page Application when you click on `About` link, a new request is sent to server and server has to send a completely new page `about.html`.  This process can cause delays and result in a less responsive user experience.
        
        ![Class.pptx (3).png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/9b763f95-f727-49de-8fa2-f434d847c1bb/Class.pptx_(3).png)
        
        In SPAs, however, most of this work happens on the client-side (your browser). When a SPA is initially loaded, the required JavaScript files are downloaded and executed. As users interact with the application, these JavaScript files are responsible for dynamically updating the content. JavaScript fetches data as needed and updates only the parts of the page that change without requiring a full page refresh.. No more "blackout" screens, just a smooth experience.
        
        ![Class.pptx (4).png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/19154b16-f1ee-47d7-afe8-27b253958f3d/Class.pptx_(4).png)
        
        **In a nutshell** : 
        
        - Single Page Applications (SPAs) are web applications that load a single HTML page( index.html ) and dynamically update its content as the user interacts with the app. SPAs load and display content much faster, providing a smoother and more engaging experience
        - React makes building SPAs more accessible
- **Fast Performance**:
    - React's secret sauce for speed includes Batch Updates and Virtual DOM.
        - **Batch Updates**: React waits to group together multiple updates, making the process more efficient, like jotting down a shopping list before heading to the store.
        - **Virtual DOM**: Instead of making direct changes to the actual webpage (DOM), React uses a lighter copy called Virtual DOM to track changes, making updates faster and smoother.
        - ************************Click here if you need more detailed explanation about Batch updates and Virtual DOM************************
            
            React is fast performance wise but how ?
            
            In order to understand that, we need to understand two concepts
            
            - Batch Updates
            - Virtual DOM
            
            ### Batch updates :
            
            Slowest part of page loading is DOM’s UI rendering. For each change the entire UI reloads. Its like making one trip per shopping item. ( to buy 10 items in supermarket; you are basically making 10 trips to supermarket )
            
            ![1.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/36bf1918-fd56-4d18-a5be-bd85117cab03/1.gif)
            
            Even the fastest systems will get dead tired by the end!
            
            ![2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/9e9e3d9e-0f56-4f16-aebe-f6eca1f49062/2.gif)
            
            React batches all your updates i.e. it doesn’t do the update when you change something - instead it simply keeps noting all your updates. ( Noting down all the items required in the supermarket )
            
            ![3.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/df845873-8dfc-4194-8bbe-7ddf72d24b7b/3.gif)
            
            React figures out the best time to do the update and then it does all the updates in one Go
            ( going to supermarket and buying those 10 items in one go )
            
            ![4.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/f0fba9aa-7e3a-452a-96e7-e525eaa1a5a6/4.gif)
            
             
            
            And it ONLY updates the required items, not the whole DOM tree. 
            
            But how does React know what to update and what not ? How does React keeps a track of this ?? 
            
            Enters **Virtual DOM**
            
            ### Virtual DOM :
            
            Imagine you're working on a webpage, and you want to update its content frequently based on user interactions. Traditionally, making these updates would involve manually changing the actual webpage's structure, known as the Document Object Model (DOM). However, updating the real DOM can be slow and inefficient.
            
            React introduced a concept called the Virtual DOM to address this problem. The Virtual DOM is like a lightweight copy of the actual DOM. Instead of making changes directly to the real DOM, React first updates the Virtual DOM.
            
            When an update is needed, React compares the Virtual DOM with the actual DOM, a process known as "diffing." It identifies the differences, or the parts that need to be changed, and then updates only those parts in the actual DOM. This process is called "reconciliation.”
            
            The Virtual DOM is a smart and efficient way to update webpages. It allows React to make changes behind the scenes before applying them to the real DOM, resulting in faster and smoother updates to the user interface.
            
            https://twitter.com/asidorenko_/status/1614935783906893824?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1614935783906893824%7Ctwgr%5E440599b2a4c470a50e3ea4bb2072c96a297253d8%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Fquery%3Dhttps3A2F2Ftwitter.com2Fasidorenko_2Fstatus2F1614935783906893824widget%3DTweet
            
            Need more understanding ? Okay how about this ?
            
            Say you want to renovate a room in your house ( like redoing a part of the DOM tree on your webpage )
            
            **First Approach ( With Vanilla JS & DOM )**
            
            - Break down the whole house and make the new room for every change ( Destroy the old DOM tree and rebuild the entire DOM tree with changes )
            
            ![Screenshot 2023-09-28 at 4.35.31 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/89f85a79-f0dd-4ab0-9c64-5c015a16cc66/Screenshot_2023-09-28_at_4.35.31_PM.png)
            
            **Second Approach ( React )**
            
            - Take 2 copies of the Blueprint of the house - a Master copy and a Working copy
            - Keep marking the changes on the Working copy
            - Once done - compare with the Master copy to see what all changes are needed
            - Do the changes in one go and JUST to that room
            - After the changes are done - the Working copy becomes the new Master copy. Discard the old Master copy.
            
            ![Screenshot 2023-09-28 at 4.40.11 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/c2aae1f8-0f3a-4247-9c52-50329e0842b4/Screenshot_2023-09-28_at_4.40.11_PM.png)
            
            - The way React does that is via Virtual DOMs
            - It keeps two copies of the DOM, known as Virtual DOMs - a sort of Master copy and a Working copy
            - Whenever you make a change - it adds it to the Working copy. It keeps adding these changes till its time to update.
            - At that time it compares the Working copy with the Master copy and computes the “diff” - or the list of changes to be made to the Real DOM.
            - Then it makes those changes and ONLY those changes to the Real DOM
            
            ![Screenshot 2023-09-28 at 4.40.25 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/fb9f4934-fd0e-4d91-9f9b-73cfee85c8c5/Screenshot_2023-09-28_at_4.40.25_PM.png)
            
            **In a nutshell :**
            
            - React is faster performance wise and it is because of
                - Based on user interaction, if the updates have to be made. Instead of doing one update at a time. React batches all the updates. Batching is super useful for performance
                - The Virtual DOM is a smart and efficient way to update webpages. It allows React to make changes behind the scenes before applying them to the real DOM, resulting in faster and smoother updates to the user interface.
            
            Note : This is theory more on how things work behind the hood. As a developer, it’s good to know these things but you won’t be directly working with Virtual DOM ( This is for understanding )









            <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Template</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script></script>
  </body>
</html>

Task : Write a ui which looks like this using React API

<div className="wrapper">
  <p id="quote">Carpe Diem</p>
  <p>Seize the day</p>
  <div>
    <p>
      This is <span>Sparta</span>
    </p>
  </div>
</div>;

Template with babel CDN link included

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Template</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel"></script>
  </body>
</html>











# eclarative Vs Imperative Programming

## **HTML and CSS :**

Back in the day, most websites were static and "read-only." Like a flyer/document which is used to share information and the person can look at it but not interact much. It started with HTML pages, CSS was then introduced to add some styling to page.

## **Javascript :**

JavaScript makes the webpage interactive, enabling it to respond to user actions like clicks and typing. For example : In masai school’s website, When you as a user clicks on `Apply Now` button. That acted as a trigger and the page responds by redirecting you to sign up. This was possible because of javascript.

First question : Can a developer build a website with just HTML, CSS, Javascript - The answer is “Yes”. 

Then why React ? 

Because React offers a more efficient, powerful, and scalable way to build modern web applications. We will talk about this in detailed fashion in future but for now let’s get some handson coding done on React and familiarise ourselves with it.  

## React :

Two points before I begin : 

1. React is basically a javascript library. That means it’s not a new language but just a technology built on top of javascript. That means when you are coding in react, you are basically coding in HTML, CSS and Javascript. There is no new language that you will be learning
2. I can start with more and more theory like “What is React”, “What is javascript library”.. Etc But I am not and it’s intentional. The idea of taking today’s session is 
    1. To understand the purpose of react.
    2. To understand the way of writing code in react ( Though most of the code looks familiar. The mental-model/mindset you’d need here will be different )
    

With that said, let’s begin

### Task 1 ( 3 Minutes ) :

Observe the following piece of code. Better try it out in your computers.

How do we write code in javascript

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Create UI with DOM & JS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript">
      const element = document.createElement("p");
      element.textContent = "Carpe Diem";
      element.className = "quote";

      const rootElement = document.getElementById("root");
      rootElement.appendChild(element);
    </script>
  </body>
</html>
```

Ref : 

Observe the way in which we are talking to javascript here

- Hey Javascript, Create an `p` element and store it in a variable called `element`
- Set the `textContent` property of the `element` to be “Carpe Diem”
- Add className `quote`  to  `element`
- `append` `element` to the `root`

This is imperative way of writing code. In the imperative way of coding, we give a step-by-step instruction to the engine. We tell - **“How to do something”**

How do we write code in React

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Create UI With React API</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script
    crossorigin
    src="https://unpkg.com/react@18/umd/react.development.js"
  ></script>
  <script
    crossorigin
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  ></script>
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
  <script type="text/babel">
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<p className="quote">Carpe Diem</p>);
  </script>
</html>
```

Ref : 

Observe the way in whic we are talking to react here

- Hey React, Display a `p` tag inside `root` which has `className` `quote` and has text `“Carpe Diem”` in it.

This is declarative way of writing code. In declarative way of coding, we simply tell - **“What to do”**

Quick Summary : Working with DOM directly using Javascript is an **imperative** way of programming, whereas Working with React is a **declarative** way of programming.










# JS and DOM Vs React and ReactDOM ( Let’s talk syntax )

## JS and DOM :

The DOM that we have learned so far, we use  `document` API ( Which is a browser API ) 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Create UI with DOM & JS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript">
			// 1. Create a DOM element using document.createElement method
      const element = document.createElement("p");
      element.textContent = "Carpe Diem";
      element.className = "quote";

			// 2. Catch hold of the root element directly in the DOM tree and append it to that;
      const rootElement = document.getElementById("root");
      rootElement.appendChild(element);
    </script>
  </body>
</html>
```

### **React and ReactDOM :**

React and ReactDOM

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Create UI with React API</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- 1. Add React and ReactDOM Packages -->
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script>
      // 2. Create a react element using React.createElement method.
      const element = React.createElement("p", {
        className: "quote",
        children: "Carpe Diem",
      });

      // 3. Define a location in your HTML (like a div with an ID of "root") where your React application will be attached. ( It's like you inform react that I want the entire react app to be within this div#root here )
      const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
      // 4. render method basically takes react element. Convert react element to actual DOM and attach it to root element in HTML
      reactRoot.render(element);
    </script>
  </body>
</html>
```

# Why **React ?**

React was born out of a need to make it easier for developers to build complex and interactive UIs. One of React's main goals is to minimize direct interactions with the actual DOM. Why? Well, directly manipulating the DOM is slow and expensive in terms of performance.

1. Add `React` and `ReactDOM` libraries to your webpage.
    
    ```html
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    ```
    
2. **`React` and `React.createElement`** : In vanilla JavaScript, you'd interact directly with the DOM elements using the Document API. With React, you don't do that. Instead, you deal with **React elements**. We use `createElement` method from react to create React elements 
    
    ```jsx
    const element = React.createElement("div", {
            className: "quote",
            children: "Carpe Diem",
          })
    // Here, React.createElement is doing three main things:
    	  // 1. Specifies the type of element ("div")
    	 // 2. Adds any properties to that element (like className)
      // 3. Sets the children of that element ("Carpe Diem")
    ```
    
    Now what is the difference between element created using `document.createElement` and element created using `React.createElement`
    
    - **DOM Elements**: **`document.createElement`** directly creates and manipulates actual DOM elements,
    
    ```jsx
    const element = document.createElement("div")
    console.log(element)
    ```
    
    - When you use **`document.createElement('div')`**, for example, it creates a **`<div>`** element that can be added to your webpage.
    - After creating an element, you manually set its attributes, like **`id`**, **`class`**, etc., and then append it to the document. For example, you can add text to this **`div`**, style it, and then insert it into the DOM.
    - This approach involves directly changing the structure of your webpage's HTML through script
    
    - **React Elements**: **`React.createElement`** creates objects representing DOM elements which are later translated into actual DOM updates by React.
    
    ```jsx
    const element = React.createElement("div", {
            className: "quote",
            children: "Carpe Diem",
          })
    console.log(element)
    ```
    
    - When you use **`React.createElement('div',** { className: "quote", children: "Carpe Diem"}**)**`, it doesn’t create an actual DOM element right away. Instead, it creates a React element, which is a lightweight description of what the DOM element should look like.
    - This React element created is then given to `ReactDOM` ’s `render` method. which takes the responsibility of converting this React Element to Actual DOM element and display it to DOM. ( we will see this in the next point )
3. **`ReactDOM` and `ReactDOM.render` :** 
Now, what do you do with this React element? This is where **`ReactDOM`** comes into play.
**`ReactDOM`** is like a bridge between React elements and actual DOM elements. Its job is to take the React elements and turn them into real DOM elements that get rendered on the page.

Define a location in your HTML (like a div with an ID of "root") where your React application will be attached.
    
    ```jsx
    const reactRoot = ReactDOM.createRoot(document.getElementById("root"))
    reactRoot.render(element)
    ```
    
    Here, **`ReactDOM.createRoot()`** creates a root node where your React elements will live. **`reactRoot.render(element)`** then takes the React element and transforms it into a real DOM element, finally attaching it to the **`root`** div in your HTML.
    
    ```jsx
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          .quote {
            color: teal;
            font-size: 48px;
          }
        </style>
        <title>Create UI with React API</title>
      </head>
      <body>
        <div id="root"></div>
    			// 1. Add react and react-dom scripts
        <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
        <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
        <script>
    
    			// 2. **React and React.createElement**
          const element = React.createElement("div", {
            className: "quote",
            children: "Carpe Diem",
          })
    
    			// 3. **ReactDOM and ReactDOM.render**
          const reactRoot = ReactDOM.createRoot(document.getElementById("root"))
          reactRoot.render(element)
        </script>
      </body>
    </html>
    ```
    

**In a nutshell :** 

- **`React`** provides a powerful and flexible way to describe what the UI should look like.
- **`ReactDOM`** makes it easy to render and update the described UI in the actual DOM.
- You're still leveraging the power of the DOM, but in an optimized way. You avoid direct, costly manipulations to the DOM. ( We will talk about this in future in detail )

### Task ( 3 Minutes ) :

Your task is to create a p element with text "Seize the day" and display it to DOM using React and ReactDOM

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Create UI With React API</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script
    crossorigin
    src="https://unpkg.com/react@18/umd/react.development.js"
  ></script>
  <script
    crossorigin
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  ></script>
  <script>
	    // Your task is to create a p element with text "Seize the day" and display it to DOM using React and ReactDOM
  </script>
</html>
```

Solution : 

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Create UI With React API</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script
    crossorigin
    src="https://unpkg.com/react@18/umd/react.development.js"
  ></script>
  <script
    crossorigin
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  ></script>
  <script>
    // Your task is to create a p element with text "Seize the day" and display it to DOM using React and ReactDOM
    // React element created
    const element = React.createElement("p", {
      children: "Seize the day",
    });

    // React element rendered;
    const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
    reactRoot.render(element);
  </script>
</html>
```










# JSX and Babel

What we have learned in the previous section is how React works internally. Like creating an element using `React.createElement` method. But generally speaking you’d write code in this way in react ( Remember this code in previous Section ?? )

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Create UI With React API</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script
    crossorigin
    src="https://unpkg.com/react@18/umd/react.development.js"
  ></script>
  <script
    crossorigin
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  ></script>
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
  <script type="text/babel">
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<p className="quote">Carpe Diem</p>);
  </script>
</html>
```

A first question that comes to your mind when you see the above code 🤨 ?

How can one write HTML code within Javascript 🤔 ? It’s a good feature to have but How does this work ?

Well the react team came up with something called `JSX` for this.  It is tiresome to use `React.createElement` for even the simplest of things and hence came this JSX. 

# JSX :

**`JSX`** stands for JavaScript XML. It's a syntax extension for JavaScript, which allows you to write HTML-like code in your JavaScript files. However, it's not exactly HTML, nor is it strictly JavaScript. It's a blend of both. This might sound confusing at first, but it's actually one of the features that makes React so powerful and popular.

Let’s see how it works :

```jsx
const element = <p>Carpe Diem</p>;
```

Step 1: So you add some JSX code here instead of `React.createElement` . But nothing works, you don’t see anything on screen except for this error

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Test</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="<https://unpkg.com/react@18.2.0/umd/react.production.min.js>"></script>
    <script src="<https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js>"></script>
    <script>
      const element = <p>Carpe Diem</p>; // React Element created using JSX
      const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
      reactRoot.render(element);
    </script>
  </body>
</html>
```

![Screenshot 2023-12-21 at 11.14.19 AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/a9a2661b-d88a-42c5-a235-4ab1e3d1f6dd/Screenshot_2023-12-21_at_11.14.19_AM.png)

The reason behind this is your browser does not understand JSX. Browsers look at JSX like it's an alien language. So we need something to translate it into plain old JavaScript. And there’s a tool called Babel for That. 

# Babel :

Babel is the translator. It takes in JSX and spits out something ( Plain Old Javascript ) browsers understand.

- **See for Yourself**: You can play around on Babel's [Try It Out Page](https://babeljs.io/repl).

### Setting up babel in our project :

Step 1 : Babel, the compiler, can be added as CDN link. 

Step 2:  Set your script type to `text/babel`

Step 3: Write code in JSX

Step 4: See for yourself, your browser displays the same react element that you just created using JSX on DOM

Ref : https://github.com/abduljabbarpeer/fe-react/tree/main/react-5/example-1

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>react-5 | example-1</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <!-- Step 1: Add Babel package -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <!-- Step 2 : Add the script type as text/babel -->
    <script type="text/babel">
			// Step 3 : Create a react element; but this time using JSX and not React.createElement() method
      const element = <div>Carpe Diem</div>; 
      // Step 4: Using Render method; display the same element created to DOM
      const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
      reactRoot.render(element);
    </script>
  </body>
</html>
```

Step 5 :  Open your browser’s devtools and check this one out on how JSX Code is converted back to Non JSX ( Plain javascript ) Code by babel. 

![Screenshot 2023-09-29 at 12.07.44 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/1aac80a1-f8e6-42bf-bdc7-011b180a696e/Screenshot_2023-09-29_at_12.07.44_PM.png)

Some Caveats about using babel as CDN Links :  Don't use this in production; it's not built for that.While Babel standalone is great for quick iterations and demos, it's not suitable for production use due to its performance implications and size.The browser will warn you when using the in-browser Babel transformer.

**Quick Recap**

- **JSX makes life easier**: It makes your code cleaner and your life simpler.
- **Babel is crucial**: It's what makes JSX usable by translating it into browser-friendly JavaScript.
- **Real-world Apps**: In a production setting, you'd use build tools like Webpack to handle Babel and other tasks.

Task : Create a p element which has following text "Seize the day"; But use JSX for the same; Display the same element onto DOM;

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>react-5 | example-2</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      // Create a p element which has following text "Seize the day"; But use JSX for the same; Display the same element onto DOM;
    </script>
  </body>
</html>
```












# More about JSX - Interpolation, Props, Attributes, Events and More

### More About JSX :

Two tools that can be very handy when you are starting out : 

1. Use [Babel Try It Out Page](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=MYewdgzgLgBAtgTwCoFMAesC8MBEBhAQwCcAHFGAEQEsU4cBuAKFElhQBtaUwsYAeACZUAbgD4A3olQYAvnwD0QsfSA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact&prettier=true&targets=&version=7.23.6&externalPlugins=&assumptions=%7B%7D) to see how JSX is converted to Non JSX Code ( JS Code ) that your browser can understand by using babel. 
2. This [HTML TO JSX tool](https://transform.tools/html-to-jsx) converts your HTML Code to JSX. 

1. You can add properties and attributes in JSX similar to how you’d add properties and attributes to HTML elements.   

```jsx
const element = (
        <p id="quote" className="message">
          Carpe Diem
        </p>
      );
```

```jsx
// The same code gets transpiled/converted by babel like this in browser
const element = React.createElement(
  "p",
  {
    id: "quote",
    className: "message"
  },
  "Carpe Diem"
);
```

1. **Interpolation** is your friend : 
    1.  ****You can add in any javascript variable directly into your JSX. For example 
        
        
        ```jsx
        const myText = "Carpe Diem";
        const element = <div>{myText}</div>;
        ```
        
        ```jsx
        // The same code gets transpiled/converted by babel like this in browser
        const myText = "Carpe Diem";
        const element = React.createElement("div", null, myText);
        ```
        
    2. Props Too ! : Want to make your HTML classes dynamic ? Here's how :
        
        
        ```jsx
        const myClassName = "message";
        const myText = "Carpe Diem";
        const element = <div className={myClassName}>{myText}</div>;
        ```
        
        ```jsx
        // The same code gets transpiled/converted by babel like this in browser
        const myClassName = "message";
        const myText = "Carpe Diem";
        const element = React.createElement(
          "div",
          {
            className: myClassName
          },
          myText
        );
        ```
        
2. Self-Closing Tags are also acceptable in JSX. In some cases it’s mandatory like for an img.
    
    
    ```jsx
    const element = (
            <img src="https://placehold.co/400" alt="some placeholder image" />
          );
    ```
    
    ```jsx
    const element = React.createElement("img", {
      src: "https://placehold.co/400",
      alt: "some placeholder image"
    });
    ```
    
3. **Event Handlers in JSX :** 
    
    
    ```jsx
    const alertFunc = () => {
      alert("Button Clicked!");
    };
    const element = <button onClick={alertFunc}>Click Me</button>;
    ```
    
    - The **`onClick`** attribute is an event handler. It tells React to listen for a click event on this button. When the button is clicked, the **`alertFunc`** function will be called.
    - **`alert("Button Clicked!")`** displays a pop-up message box with the text "Button Clicked!".
    - In React, we often define functions to handle events like clicks, mouse movements, form submissions, etc. These functions define what should happen when the event occurs. These functions are called event handlers. Remember you have similar thing in javascript `button.addEventListener('click', alertFunc)`
    
    ```jsx
    const alertFunc = () => {
      alert("Button Clicked!");
    };
    const element = React.createElement(
      "button",
      {
        onClick: alertFunc
      },
      "Click Me"
    );
    ```
    
4. **Properties/Attributes and Spread Operator** `{...}` :
This one's cool. Make an object with all the props you want, and then just spread 'em
    
    
    ```jsx
    const alertFunc = () => {
      alert("Button Clicked!");
    };
    const buttonClassName = "button";
    const buttonId = "click-button";
    
    const props = {
      className: buttonClassName,
      id: buttonId,
      onClick: alertFunc,
    };
    
    const element = <button {...props}>Click Me</button>;
    ```
    
    ```jsx
    const alertFunc = () => {
      alert("Button Clicked!");
    };
    const buttonClassName = "button";
    const buttonId = "click-button";
    const props = {
      className: buttonClassName,
      id: buttonId,
      onClick: alertFunc
    };
    const element = React.createElement("button", props, "Click Me");
    ```
    
5. Rendering Multiple elements in JSX : 
    
    Try this below code and see what happens. why you can't put two React elements next to each other like this ?
    
    ```jsx
      <body>
        <div id="root"></div>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
        <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
        <script type="text/babel">
    
          const element = ( // why you can't put two React elements next to each other like this ?
              <span>Carpe</span>
              <span>Diem</span>
          )
    
          const reactRoot = ReactDOM.createRoot(document.getElementById("root"))
    
          reactRoot.render(element)
        </script>
      </body>
    </html>
    ```
    
    You usually have to wrap them inside another element like a `<div>` and then it’ll work
    
    ```jsx
     <body>
        <div id="root"></div>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
        <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
        <script type="text/babel">
    
          const element = (
            <div>
              <span>Carpe</span>
              <span>Diem</span>
            </div>
          )
    
          const reactRoot = ReactDOM.createRoot(document.getElementById("root"))
    
          reactRoot.render(element)
        </script>
      </body>
    </html>
    ```
    

Try putting the code even in a babel try out page and you’ll encounter this error

![Screenshot 2023-12-21 at 12.52.08 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/7049eaa7-2e7f-4f42-8d53-aafcd9a6d760/Screenshot_2023-12-21_at_12.52.08_PM.png)

This JSX basically boils down to `React.createElement` code so let’s go back to that.

a. **Making A Single Element**: Normally, you create React elements with `React.createElement`. But I need one main element to be rendered. reactRoot.render accepts one element.

```jsx
<script type="text/babel">
    const carpeElement = React.createElement('span', null, 'Carpe');
		const diemElement = React.createElement('span', null, 'Diem');

    const reactRoot = ReactDOM.createRoot(document.getElementById("root"))
    reactRoot.render( /********** I CAN ONLY KEEP ONE ELEMENT HERE ********/ )
</script>
```

b. **The Side-By-Side Issue**: With `React.createElement`, placing two elements side by side is tough. So you might end up creating a wrapper element with using a div or some other HTML tag

```jsx
 <script type="text/babel">
    const carpeElement = React.createElement('span', null, 'Carpe');
		const diemElement = React.createElement('span', null, 'Diem');

		const wrapperElement = React.createElement('div', null, carpeElement, diemElement)

    const reactRoot = ReactDOM.createRoot(document.getElementById("root"))
    reactRoot.render(wrapperElement) // this wrapper element has all the elements required inside it as children
</script>
```

c. The same above thing if you write in JSX

```jsx
const carpeElement = <span>Carpe</span>;
const diemElement = <span>Diem</span>;
const wrapperElement = (
  <div>
    {carpeElement}
    {diemElement}
  </div>
);
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(wrapperElement);
```

d. **Introducing Fragments**: Enter React Fragments, a solution to keep things clean.

```jsx
const carpeElement = <span>Carpe</span>;
      const diemElement = <span>Diem</span>;

      const wrapperElement = (
        <React.Fragment>
          <span>Carpe</span>
          <span>Diem</span>
        </React.Fragment>
      );
      const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

      reactRoot.render(wrapperElement);
```

```jsx
const carpeElement = React.createElement("span", null, "Carpe");
const diemElement = React.createElement("span", null, "Diem");

const wrapperElement = React.createElement(
  React.Fragment,
  null,
  carpeElement,
  diemElement
);
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(wrapperElement); // this wrapper element has all the elements required inside it as children
```

Think of a React Fragment as a container that doesn't mess with your DOM structure. With this you have the wrapper but at the same time no additional divs are created. This Same fragment can also be written as `<></>` in JSX

```jsx
const carpeElement = <span>Carpe</span>;
const diemElement = <span>Diem</span>;

const wrapperElement = (
  <> // This is React Fragment for lazy coders; Just as effective, but way simpler. 
    <span>Carpe</span>
    <span>Diem</span>
  </>
);
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(wrapperElement);
```

1. **Inline styling in React** : 
    
    React allows you to use a `style` attribute to add inline styles directly to your JSX elements.
    
    Here's how you can do it:
    
    ```jsx
    <div style={{ color: "red" }}>
    ```
    
    The `style` attribute accepts an object where the keys are camelCased versions of the CSS property names, and the values are CSS values as strings.
    
    Here’s a box styled completely inline as an example:
    
    ```jsx
    const carpeElement = <span>Carpe</span>;
    const diemElement = <span>Diem</span>;
    
    const element = (
      <div
        style={{
          margin: "20px",
          padding: "20px",
          border: "1px solid cyan",
          color: "darkcyan",
          backgroundColor: "lightcyan",
        }}
      >
        Here is a box with styling done using inline styling
      </div>
    );
    const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
    
    reactRoot.render(element);
    ```
    
    📌 **When to use Inline Styling?**
    
    - When you want to dynamically set styles.
    - For one-off unique styles that don't make sense to put in a CSS class.
    
    ---
    
    Task : Create a React element using JSX which has the following 
    
    - It should be wrapped using React Fragment
    - Inside this fragment; There should be
        - a `p` element with text “React is a javascript library”
        - a `div` element which should have class `“main”` . This `div` should contain the following
            - A `p` element which says “click the below button to alert `Hello`
            - A button with text “Alert Hello” . Clicking on which an alert pops up with the same message