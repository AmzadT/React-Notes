// React -> Js Framework, -> Fast
// HTML + CSS + JS < ReactJs

// Html -> .html <body></body>
// css -> .css <style></style>
// js -> .js <script></script>

// React -> css -> style.module.css || style.css
//       -> .jsx -> index.jsx
//       -> jsx -> Javascript Xml -> html + CSS + Javascript code

// ** Advantages/benefits of using ReactJs -> 

//    1. Fast loading code,
//    2. Javascript Framework,
//    3. We can write html, css, and js code in a single line in a single file,
//    4. We can use different css libraries to make our UI look good, ex; Chakra UI, Material UI, Talwind css, Bootstrap.,

//    5. 
//    index.js -> Parent code.
//    App.js   -> Parent code.

//    * Commands 
//    1. Create a react app -> npx create-react-app app-name
//    2. cd root directory -> head over to the root directory
//    3.  npm start -> to run your react app.


//    * You want to make 20 pages:
//    1. Create Different Components folder
//    2. Create your files inside the Components

//    * .jsx file structure
//    1. import React from 'react'
//    2. Make Function
//    3. Export
//    4. import function in App and use it

//    * useState hook
//    1. hook function that used to store the data and update the data;
//    2. you'll have to import useState from react,
//    3. syntax -> 
//    const [name, setName] = useState("Amzad");
//    console.log(name) -> Amzad;

//    * useEffect ->
//    1. Run all the code only once







//  Introduction of React

//  React is a library that allows you to create a web application that is fast, efficient, and user-friendly. It is a JavaScript library that is used to build user interfaces. It is a library that allows you to create a web application that is fast, efficient, and user-friendly. It is a library that allows you to.

//  React Owner --> FaceBook

//  1. React is a JavaScript library for building user interfaces.

// 2. React is used to build single-page applications.

// 3. React allows us to create reusable UI Components.



//  What is React ?

// 1. React is a declarative, efficient and flexible JavaScript library for building user interfaces. it lets you compose complex UIs from small and isolated pieces of code called "Components".

// 2. React, sometimes referred to as a Frontend javascript Framework, is a JavaScript library created by FaceBook.

// 3. React is a tool for build UI components.



//  How does React Work

// Instead of manipulating the DOM directly, React uses virtual DOM to create a virtual representation of the DOM. This virtual DOM is then compared to the real DOM to determine if any changes need to be made. This comparison is done using a virtual DOM diff algorithm.


// React.JS was first released in 2006. React.JS was first used in 2011 for FaceBook's Newsfeed feature.

//  create-react-app includes built tools such as webpack, Babel and ESLint.

//  FaceBook software engineer, "jordan walke", created React.Js.


//  Declarative Approach :-  You tell the browser exactly what to do, instead of telling it what you need. the React declarative Approach abstracts that for us.

// with declarative code, we tell JavaScript what we want to be done, and let JavaScript take care of performing the steps.






//  ** CLASS-NOTES **



// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>React Template</title>
//   </head>
//   <body>
//     <div id="root"></div>
//     <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
//     <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
//     <script></script>
//   </body>
// </html>

// Task : Write a ui which looks like this using React API

// <div className="wrapper">
//   <p id="quote">Carpe Diem</p>
//   <p>Seize the day</p>
//   <div>
//     <p>
//       This is <span>Sparta</span>
//     </p>
//   </div>
// </div>;

// Template with babel CDN link included

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>React Template</title>
//   </head>
//   <body>
//     <div id="root"></div>
//     <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
//     <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
//     <script type="text/babel"></script>
//   </body>
// </html>




// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>React Intro</title>
//   </head>
//   <body>
//     <div id="root"></div>
//   </body>
//   <script src="https://www.unpkg.com/react@18.2.0/umd/react.development.js"></script>
//   <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
//   <script>
//     // My Code goes here;
//   </script>
// </html>







// # Pre Class Notes

// - Intro to react
// - Framework vs Library
// - Why react?
//     - Developer Experience
//     - Single Page Application ( SPA )
//     - Performance
//         - Virtual DOM
//         - Batch updates

// # React Intro :

// React is a JavaScript library that's your best friend when it comes to building cool user interfaces (UIs) for web applications. It's a creation of Facebook and is loved by developers for making UI building a breeze. It lets you create reusable UI components and manage how data is displayed and updated on web pages. And the good news? It keeps getting better with new features!

// Here is the link to it’s docs

// [React](https://react.dev/)

// # **Framework and Library** :

// In the coding world, libraries and frameworks are your toolkit and blueprint, respectively.

// - **Library**:
//     - It's a collection of ready-to-use code snippets that you can call upon.
//     - *Example*: Imagine a library as a toolbox. You pick the tools you need, when you need them.
// - **Framework**:
//     - It's a structured template that tells you how to build your application.
//     - *Example*: It’s like a recipe. You follow the steps and add your ingredients to cook up an app.

// In a nutshell, a library gives you tools, while a framework gives you a structured plan. The use case is basically the same, Both helps developer build web applications  faster and better

// - **Click here if you need more detailed explanation about Frameworks and Libraries**
    
//     # **Framework and Library** :
    
//     ## **Library** :
    
//     A library is a collection of reusable code that provides specific functionality. You can think of it as a set of tools that you can choose to use in your project. You are in control of when and how you use these tools. Libraries help you avoid rewriting common functionality and save time.
    
//     ## **Framework** :
    
//     A framework, on the other hand, provides a structure and a set of rules for building applications. You can think of it as a blueprint that guides you on how to build your project. When using a framework, you need to follow its conventions and design patterns, and it often dictates the application's structure. In essence, a framework provides a foundation, and you fill in the specific details of your application.
    
//     To summarise, a library is like a set of tools you can use in your project as needed, while a framework is a blueprint that provides a structure and rules for your project.
    
//     Need more understanding ? Okay how about this ?
    
//     ## **Library** :
    
//     Let's say you want to build a house. A library would be like buying pre-made building materials like bricks, lumber, nails, and roofing shingles that you can use to build your house. You have control over how you use those materials, and you can use them to build the house you want, but you have to do all the work yourself.
    
//     ## **Framework** :
    
//     If you happened to order some furniture on e-commerce ( any DIY kit ) website. Let’s take an example of cupboard. It comes with all the necessary parts. There will be a manual which contains all the instructions on how to assemble it. You have less control over how the cupboard looks and functions, but it's easier and faster to assemble since you're following a pre-set structure and guidelines.
    
//     Frameworks provides a general structure ( a particular way of writing code ) and you as a developer have to follow that exact same structure. Library on the other hand provides you some tools( code to work with ) and does not enforce developer to follow any structure. 
    
//     Both makes development process faster and better. 
    

// # Why is React so popular :

// React shines bright for a few solid reasons:

// - **Ease of Development**:
//     - React lets you create reusable components, making development quicker and collaborative fun. Check the comparison below to see how React simplifies code compared to Vanilla JavaScript:
        
//         ![Screenshot 2022-11-11 at 4.38.49 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/e5103672-7e05-43fa-8812-6bd25346278b/Screenshot_2022-11-11_at_4.38.49_PM.png)
        
// - **Single Page Applications (SPAs)**:
//     - Think of a Single Page Application like using an advanced remote control for your TV. In a traditional website, every time you click a button or a link, it's like changing the channel: the screen goes blank for a second, and then the new channel (or page) loads. With an SPA, it's like switching from live TV to a smart TV where you can smoothly scroll through options, preview shows, and choose what you want to watch without any delay or "blackout" screen. Everything happens seamlessly on the same screen.
//     - React is your go-to buddy for building SPAs as it handles dynamic updates like a champ, ensuring a smooth user experience.
//     - ************************Click here if you need more detailed explanation about SPA************************
        
        
//         ****React is a JavaScript library that's excellent for building SPAs. But what is Single Page Application or in short SPA
        
//         ### ****What's a Single Page Application (SPA)?****
        
//         Think of a Single Page Application like using an advanced remote control for your TV. In a traditional website, every time you click a button or a link, it's like changing the channel: the screen goes blank for a second, and then the new channel (or page) loads. With an SPA, it's like switching from live TV to a smart interface where you can smoothly scroll through options, preview shows, and choose what you want to watch without any delay or "blackout" screen. Everything happens seamlessly on the same screen.
        
//         ### **How Does SPA Work?**
        
//         In traditional websites, every action usually involves a request to the server, and the server sends back an entirely new page. This is like the "blackout" when changing channels. 
//         Say in a traditional Multi Page Application when you click on `About` link, a new request is sent to server and server has to send a completely new page `about.html`.  This process can cause delays and result in a less responsive user experience.
        
//         ![Class.pptx (3).png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/9b763f95-f727-49de-8fa2-f434d847c1bb/Class.pptx_(3).png)
        
//         In SPAs, however, most of this work happens on the client-side (your browser). When a SPA is initially loaded, the required JavaScript files are downloaded and executed. As users interact with the application, these JavaScript files are responsible for dynamically updating the content. JavaScript fetches data as needed and updates only the parts of the page that change without requiring a full page refresh.. No more "blackout" screens, just a smooth experience.
        
//         ![Class.pptx (4).png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/19154b16-f1ee-47d7-afe8-27b253958f3d/Class.pptx_(4).png)
        
//         **In a nutshell** : 
        
//         - Single Page Applications (SPAs) are web applications that load a single HTML page( index.html ) and dynamically update its content as the user interacts with the app. SPAs load and display content much faster, providing a smoother and more engaging experience
//         - React makes building SPAs more accessible
// - **Fast Performance**:
//     - React's secret sauce for speed includes Batch Updates and Virtual DOM.
//         - **Batch Updates**: React waits to group together multiple updates, making the process more efficient, like jotting down a shopping list before heading to the store.
//         - **Virtual DOM**: Instead of making direct changes to the actual webpage (DOM), React uses a lighter copy called Virtual DOM to track changes, making updates faster and smoother.
//         - ************************Click here if you need more detailed explanation about Batch updates and Virtual DOM************************
            
//             React is fast performance wise but how ?
            
//             In order to understand that, we need to understand two concepts
            
//             - Batch Updates
//             - Virtual DOM
            
//             ### Batch updates :
            
//             Slowest part of page loading is DOM’s UI rendering. For each change the entire UI reloads. Its like making one trip per shopping item. ( to buy 10 items in supermarket; you are basically making 10 trips to supermarket )
            
//             ![1.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/36bf1918-fd56-4d18-a5be-bd85117cab03/1.gif)
            
//             Even the fastest systems will get dead tired by the end!
            
//             ![2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/9e9e3d9e-0f56-4f16-aebe-f6eca1f49062/2.gif)
            
//             React batches all your updates i.e. it doesn’t do the update when you change something - instead it simply keeps noting all your updates. ( Noting down all the items required in the supermarket )
            
//             ![3.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/df845873-8dfc-4194-8bbe-7ddf72d24b7b/3.gif)
            
//             React figures out the best time to do the update and then it does all the updates in one Go
//             ( going to supermarket and buying those 10 items in one go )
            
//             ![4.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/f0fba9aa-7e3a-452a-96e7-e525eaa1a5a6/4.gif)
            
             
            
//             And it ONLY updates the required items, not the whole DOM tree. 
            
//             But how does React know what to update and what not ? How does React keeps a track of this ?? 
            
//             Enters **Virtual DOM**
            
//             ### Virtual DOM :
            
//             Imagine you're working on a webpage, and you want to update its content frequently based on user interactions. Traditionally, making these updates would involve manually changing the actual webpage's structure, known as the Document Object Model (DOM). However, updating the real DOM can be slow and inefficient.
            
//             React introduced a concept called the Virtual DOM to address this problem. The Virtual DOM is like a lightweight copy of the actual DOM. Instead of making changes directly to the real DOM, React first updates the Virtual DOM.
            
//             When an update is needed, React compares the Virtual DOM with the actual DOM, a process known as "diffing." It identifies the differences, or the parts that need to be changed, and then updates only those parts in the actual DOM. This process is called "reconciliation.”
            
//             The Virtual DOM is a smart and efficient way to update webpages. It allows React to make changes behind the scenes before applying them to the real DOM, resulting in faster and smoother updates to the user interface.
            
//             https://twitter.com/asidorenko_/status/1614935783906893824?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1614935783906893824%7Ctwgr%5E440599b2a4c470a50e3ea4bb2072c96a297253d8%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Fquery%3Dhttps3A2F2Ftwitter.com2Fasidorenko_2Fstatus2F1614935783906893824widget%3DTweet
            
//             Need more understanding ? Okay how about this ?
            
//             Say you want to renovate a room in your house ( like redoing a part of the DOM tree on your webpage )
            
//             **First Approach ( With Vanilla JS & DOM )**
            
//             - Break down the whole house and make the new room for every change ( Destroy the old DOM tree and rebuild the entire DOM tree with changes )
            
//             ![Screenshot 2023-09-28 at 4.35.31 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/89f85a79-f0dd-4ab0-9c64-5c015a16cc66/Screenshot_2023-09-28_at_4.35.31_PM.png)
            
//             **Second Approach ( React )**
            
//             - Take 2 copies of the Blueprint of the house - a Master copy and a Working copy
//             - Keep marking the changes on the Working copy
//             - Once done - compare with the Master copy to see what all changes are needed
//             - Do the changes in one go and JUST to that room
//             - After the changes are done - the Working copy becomes the new Master copy. Discard the old Master copy.
            
//             ![Screenshot 2023-09-28 at 4.40.11 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/c2aae1f8-0f3a-4247-9c52-50329e0842b4/Screenshot_2023-09-28_at_4.40.11_PM.png)
            
//             - The way React does that is via Virtual DOMs
//             - It keeps two copies of the DOM, known as Virtual DOMs - a sort of Master copy and a Working copy
//             - Whenever you make a change - it adds it to the Working copy. It keeps adding these changes till its time to update.
//             - At that time it compares the Working copy with the Master copy and computes the “diff” - or the list of changes to be made to the Real DOM.
//             - Then it makes those changes and ONLY those changes to the Real DOM
            
//             ![Screenshot 2023-09-28 at 4.40.25 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/fb9f4934-fd0e-4d91-9f9b-73cfee85c8c5/Screenshot_2023-09-28_at_4.40.25_PM.png)
            
//             **In a nutshell :**
            
//             - React is faster performance wise and it is because of
//                 - Based on user interaction, if the updates have to be made. Instead of doing one update at a time. React batches all the updates. Batching is super useful for performance
//                 - The Virtual DOM is a smart and efficient way to update webpages. It allows React to make changes behind the scenes before applying them to the real DOM, resulting in faster and smoother updates to the user interface.
            
//             Note : This is theory more on how things work behind the hood. As a developer, it’s good to know these things but you won’t be directly working with Virtual DOM ( This is for understanding )

