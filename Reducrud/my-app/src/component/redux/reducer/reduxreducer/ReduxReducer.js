import * as Type from "../../type/Type"
const initialState = {
  rows: [],
  productDetails: [],
  checked: false,
  selectCountry: false,
  editValue: null,
  addRowFlag: false,
  addRowFlagTwo: false,
  editObj: null,
  viewObj: null
}
const ReduxReducer = (state = initialState, action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case Type.ADD_ROW:
      return {
        ...state,
        rows: [...state.rows, action.payload],
        addRowFlag: true,
        addRowFlagTwo: true,
      }
    case "EditAddRow":
      return {
        ...state,
        rows: action.payload,
        addRowFlag: true,
      }
    case "Submit":
      return {
        ...state,
        productDetails: [...state.productDetails, action.payload],
        rows: [],
        checked: false,
        selectCountry: false,
        editValue: null,
        addRowFlag: false,
        addRowFlagTwo: false,
      }
    case "Update":
      return {
        ...state,
        productDetails: state.productDetails.map((res) =>
          res.id === action.payload.id ? action.payload : res
        ),
        rows: [],
        checked: false,
        selectCountry: false,
        editValue: null,
        addRowFlag: false,
        addRowFlagTwo: false,
      }
    case "Edit":
      return { ...state, editObj: action.payload }
    case "View":
      return { ...state, viewObj: action.payload }
    case "Delete":
      return {
        ...state,
        productDetails: state.productDetails.filter(
          (res) => res.id !== action.payload
        ),
      }
    case "Checked":
      return {
        ...state,
        checked: action.payload.flag,
        country: action.payload.country,
      }
    case "Country":
      return {
        ...state,
        selectCountry: action.payload.flag,
        country: action.payload.country,
      }
    // case "remark":
    //   return { ...state, remark: action.payload }
    case "rowColumn":
      const statedata = state.rows.find(
        (res, index) => index === action.payload.index
      )
      action.payload.state
        ? (statedata.state = action.payload.state)
        : action.payload.city
        ? (statedata.city = action.payload.city)
        : (statedata.remarks = action.payload.remarks)
      console.log(statedata)
      const updaterow = state.rows.map((res, index) =>
        index === action.payload.index ? statedata : res
      )
      console.log(updaterow)
      return { ...state, rows: updaterow }
    case Type.SAVE_ROW:
      return {
        ...state,
        rows: state.rows.map((row, index) =>
          index === action.payload
            ? { ...row, saved: false, editable: false, readonly: true }
            : row
        ),
        addRowFlagTwo: false,
      }
    case Type.EDIT_ROW:
      return {
        ...state,
        rows: state.rows.map((row, index) =>
          index === action.payload ? { ...row, saved: true } : row
        ),
      }
    case Type.CANCEL_ROW:
      return {
        ...state,
        addRowFlag: state.rows.length === 1 ? false : true,
        addRowFlagTwo: false,
        rows: state.rows.filter((row, index) => index !== action.payload),
      }

    case Type.DELETE_ROW:
      console.log(state.rows.length)
      return {
        ...state,
        addRowFlag: state.rows.length === 1 ? false : true,
        rows: state.rows.filter((_, index) => index !== action.payload),
      }
   

    default:
      return state
  }
}

export default ReduxReducer