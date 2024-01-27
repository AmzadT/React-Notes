import { useState } from "react";

// 1st Way :-

// const counter = ()=>{
//     const [count, setCount] = useState(3);

//     return (
//         <>
//             <h1>Counter: {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//         </>
//     )
// }



// 2nd Way :-

// const counter = ()=>{
//     const [count, setCount] = useState(3);

//     const handleIncrease = ()=>{
//         setCount(count + 1);
//     }

//     return (
//         <>
//             <h1>Counter: {count}</h1>
//             <button onClick={handleIncrease}>Increment</button>
//         </>
//     )
// }



// 3rd Way :-

const counter = () =>{
    const [count, setCount] = useState(3);

    const handleIncrease = () =>{
        // Both are same
        setCount( (previousCount) =>{   // Pass a CallBack Function.
            return previousCount + 1;
        });
        
        // setCount( function (previousCount){   // Anonymous CallBack Function.
        //     return previousCount + 1;
        // });
    }

    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrease}>Increment</button>
        </>
    )
}

export default counter