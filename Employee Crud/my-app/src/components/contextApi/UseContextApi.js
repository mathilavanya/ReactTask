import React, { useContext } from 'react'
import { ContextApi } from './Increment';

const UseContextApi = () => {
    const { count, increment, decrement } = useContext(ContextApi);
  return (
    <div>
        <h2>Counter: {count}</h2>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
        
    </div>
  )
}

export default UseContextApi