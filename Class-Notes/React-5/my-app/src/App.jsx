// import { useState } from 'react'
// import './App.css'
// import counter from './component/counter'

// function App() {
//   const [showCounter, setShowCounter] = useState(true);

//   return (
//     <>
//        //  <counter />
//        //  <button onClick={() => setShowCounter(!showCounter)}>Display or Hide Counter</button>

//        // The component counter is unmounted/removed from the UI.

//        {showCounter ? <counter/> : null}

//        <button onClick={function (){
//          setShowCounter(!showCounter)
//        }}>Display or Hide Counter</button>
//     </>
//   )
// }

// export default App





// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [data, setData] = useState([]);

//   async function fetchAndUpdateData() {
//     // Clicking on the button Get and Display post should make an API request to https://jsonplaceholder.typicode.com/posts?_limit=5
//     // console.log(response)
//     // use data to save the response in data state
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`);
//       const data = await response.json();
//       setData(data);

//     } catch (error) {
//       console.log(error);
//     }
//   }

//     console.log(data);

//   return (
//     <>
//       <h1>
//         Clicking on this button should fetch the data from JSON Placeholder API{" "}
//       </h1>
//       <button onClick={fetchAndUpdateData}>Get and Display Post</button>
//       <hr />
//       <ul>
//         {data.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>

  
//     </>
//   );
// }

// export default App;

  // {
  //   data.map((post) =>{
  //     <div 
  //     key={post.id} 
  //     style={{border:"2px solid black",margin:"10px",padding:"10px"}}>
  //     <h2>{post.title}</h2>
  //     <p>{post.id}</p>
  //     <p>{post.body}</p>
  //     </div>
  //   })
  // }







import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  async function fetchAndUpdateData() {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`);
      const data = await response.json();
      setData(data);

    } catch (error) {
      console.log(error);
    }
  }
    
    useEffect(() =>{
      fetchAndUpdateData();
    },[]);

    console.log(data);

  return (
    <>
      <hr />
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

  
    </>
  );
}

export default App;
