import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

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

export default App;




// import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = React.useState(0);

//   const handleClick = () => {
//     setCount((prevCount) => prevCount + 1);
//     setCount((prevCount) => prevCount + 1);
//     setCount((prevCount) => prevCount + 1);
//     console.log(count); // It will log 3
//   };

//   return (
//     <div>
//       <p>Button is clicked {count} times</p>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App;
