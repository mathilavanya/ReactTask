import * as type from "./type";

export const initialValue = {
  item: [],
  error: null,
};

const Reducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case type.POST_SUCCESS:
      return { ...state, item: [...state.item, action.payload] };
    case type.POST_ERROR:
    case type.GET_ERROR:
    case type.DELETE_ERROR:
      case type.PUT_ERROR:
        case type.GETID_ERROR:
          return { ...state, error: action.payload };
    case type.GET_SUCCESS:
      return { ...state, item: action.payload };
    case type.DELETE_SUCCESS:
      return {
        ...state,
        item: state.item.filter((items) => items.id !== action.payload),
      };
    case type.PUT_SUCCESS:
      return { 
        ...state,
        item: state.item.map((items) =>
          items.id === action.payload.id ? action.payload : items
        ),
       };
       case type.GETID_SUCCESS:
        return { ...state, item: action.payload };
  
    default:
      return state;
  }
};

export default Reducer;
