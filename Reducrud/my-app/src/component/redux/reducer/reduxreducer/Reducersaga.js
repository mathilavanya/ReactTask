import * as Types from "../../type/TypeSaga";

const initialState = {
  list: [],
};

const Reducersaga = (state = initialState, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case Types.GET_REQUEST:
      return {...state};
    case Types.GET_SUCCESS:
      return {...state};
    case Types.GET_ERROR:
      return {...state};
      default:
        return state;
  }
}

export default Reducersaga;
