import * as Type from "../../type/Type";

const initialState = {
    count:0
  };
  
  const CalculationReducer = (state = initialState, action) => {
    console.log(state)
    console.log(action)
    switch (action.type) {
        case Type.INCREMENT:
            return {...state,count:state.count+1}
            case Type.DECREMENT:
            return {...state,count:state.count-1}
      default:
        return state;
    }
  };
  
  export default CalculationReducer;