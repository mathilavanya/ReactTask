import React, { createContext, useState } from 'react'

export const ContextApi= createContext();

const Increment = ({children}) => {

const [count, setCount] = useState(0);

const increment = () => {
setCount(count + 1);
};

const decrement = () => {
setCount(count - 1);
};
  return (
    <div>
          <ContextApi.Provider value={{ count, increment, decrement }}>
        {children}
      </ContextApi.Provider>
    </div>
  )
}

export default Increment