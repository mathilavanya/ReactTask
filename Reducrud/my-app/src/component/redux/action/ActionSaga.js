import * as Types from "../type/TypeSaga";

export const getRequest = () => {
    return {
      type: Types.GET_REQUEST,
    };
  }
  export const getSuccess = (data) => {
    return {
      type: Types.GET_SUCCESS,
      payload:data
    };
  }
  export const getError = (data) => {
    return {
      type: Types.GET_ERROR,
      payload:data

    };
  }