import * as Types from "../../type/Type";

const initialState = {
  list: [],
  editObj:null,
};

const ReducerSaga = (state = initialState, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state };
    case Types.GET_SUCCESS:
      return { ...state, list: action.payload };
    case Types.GET_ERROR:
      return { ...state, error: action.payload };
    case Types.POST_REQUEST:
      return { ...state };
    case Types.POST_SUCCESS:
      return { ...state, list: [...state.list, action.payload] };
    case Types.POST_ERROR:
      return { ...state, error: action.payload };
    case Types.PUT_REQUEST:
      return { ...state };
    case Types.PUT_SUCCESS:
      return {
        ...state,
        list: state.list.map((items) =>
          items.id === action.payload.id ? action.payload : items
        ),
      };
    case Types.PUT_ERROR:
      return { ...state, error: action.payload };
    case Types.DELETE_SUCCESS:
      return {
        ...state,
        list: state.list.filter((items) => items.id !== action.payload),
      };
    case Types.DELETE_ERROR:
      return {
        ...state,
      };
    case Types.GETID_SUCCESS:
      return { ...state, editObj: action.payload };
    default:
      return state;
  }
};

export default ReducerSaga;
