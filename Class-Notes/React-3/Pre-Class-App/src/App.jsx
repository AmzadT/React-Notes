// // 1. **setState is kind of async**

// import { useState } from 'react'
// import './App.css'


// function App() {
//   const [amount, setAmount] = useState(0);  // 0 + 100 + 200
  
//   const handleDeposite = () =>{
//     setAmount(amount + 100);
//     console.log(`Amount is ${amount}`);
//   }

//   const handleWithdraw = () =>{
//     setAmount(amount - 100);
//     console.log(`Amount is ${amount}`);
//   }
  
//   return (
//     <div className='App'>
//         <h1>Current : {amount}</h1>
//         <button onClick={handleDeposite}>Deposit-100</button>
//         <button onClick={handleWithdraw}>Withdraw-100</button>
//     </div>
//   )
// }

// export default App








// // 2. **setState batches updates**

// import { useState } from 'react'
// import './App.css'


// function App() {
//   const [amount, setAmount] = useState(0);
  
//   const handleDeposite = () =>{
//     setAmount(amount + 100);  // 0 + 100
//     setAmount(amount + 100);  // 0 + 100
//     setAmount(amount + 100);  // 0 + 100
//     setAmount(amount + 100);  // 0 + 100 = 100
//     console.log(`Amount is ${amount}`);
//   }

//   const handleWithdraw = () =>{
//     setAmount(amount - 100);
//     console.log(`Amount is ${amount}`);
//   }
  
//   return (
//     <div className='App'>
//         <h1>Current : {amount}</h1>
//         <button onClick={handleDeposite}>Deposit-100</button>
//         <button onClick={handleWithdraw}>Withdraw-100</button>
//     </div>
//   )
// }

// export default App








// 3. **setState can take updater functions, which will use the value from the react store internally**

import { useState } from 'react'
import './App.css'


function App() {
  const [amount, setAmount] = useState(0);
  
  const handleDeposite = (Amnt) =>{
    setAmount((preAmount) => preAmount + Amnt);  // 0 + 100
    setAmount((preAmount) => preAmount + Amnt);  // 100 + 100
    setAmount((preAmount) => preAmount + Amnt);  // 200 + 100
    setAmount((preAmount) => preAmount + Amnt);  // 300 + 100 = 400
    console.log(`Amount is ${amount}`);
  }

  const handleWithdraw = () =>{
    setAmount(amount - 100);
    console.log(`Amount is ${amount}`);
  }
  
  return (
    <div className='App'>
        <h1>Current : {amount}</h1>
        <button onClick={() => handleDeposite(100)}>Deposit-100</button>
        <button onClick={handleWithdraw}>Withdraw-100</button>
    </div>
  )
}

export default App
