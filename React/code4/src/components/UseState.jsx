import React, { useState } from "react";

const UseState = () => {
  //   const [state,useState]= useState(initialState);

  const [count, setCount] = useState(0);
  function fun() {
    setCount(count + 1);
  }
  function fun1() {
    setCount(count - 1);
  }
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={fun}> add</button>
      <button onClick={fun1}> Sub</button>

      <button onClick={() => setCount(count + 2)}>ADD 2</button>
    </div>
  );
};

export default UseState;
