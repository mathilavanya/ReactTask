import React from "react";
import { increment ,decrement} from "./redux/action/Action";
import { useDispatch, useSelector } from "react-redux";

const Calculation = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.CalculationReducer);
  console.log(user);
  const incrementCount = () => {
    dispatch(increment())
  };
  const decrementCount = () => {
    dispatch(decrement())
  };
  return (
    <div>
      <h1>{user.count}</h1>
      <span>
        <button className="btn btn-primary mx-1" onClick={incrementCount}>
          INCREMENT
        </button>

        <button className="btn btn-danger" onClick={decrementCount}>
          DECREMENT
        </button>
      </span>
    </div>
  );
};

export default Calculation;
