import React from 'react';
import { connect } from 'react-redux';
import { increment,decrement } from './redux/action/Action';
const CalculationTwo = (props) => {
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={props.increment} className='bg-success border-0 mx-1'>Increment</button>
      <button onClick={props.decrement} className='bg-danger border-0'>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.CalculationReducer.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalculationTwo);