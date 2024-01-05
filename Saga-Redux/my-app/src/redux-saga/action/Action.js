import * as Types from "../type/Type";

export const getRequest = () => {
    return {
      type: Types.GET_REQUEST
    };
  }
  export const getSuccess = (data) => {
    return {
      type: Types.GET_SUCCESS,
      payload:data
    };
  }
  export const getError = () => {
    return {
      type: Types.GET_ERROR,

    };
  }
  export const postRequest = (data) => {
    return {
      type: Types.POST_REQUEST,
      payload:data

    };
  }
  export const postSuccess = (data) => {
    return {
      type: Types.POST_SUCCESS,
      payload:data
    };
  }
  export const postError = (data) => {
    return {
      type: Types.POST_ERROR,
      payload:data


    };
  }
  export const putSuccess= (id)=>{

    return {
        type : Types.PUT_SUCCESS,
        payload : id

    };
       
}
export const putRequest= (id)=>{

  return {
      type : Types.PUT_REQUEST,
      payload : id

  };
     
}
export const putError= (id)=>{

  return {
      type : Types.PUT_ERROR,
      payload : id

  };
     
}
export  const deleteReq= (data)=>{

  return {
      type:Types.DELETE_REQUEST,
      payload:data
  }
}
export  const deleteSuccess= (data)=>{

  return {
      type:Types.DELETE_SUCCESS,
      payload:data
  }
}
export  const deleteError= (data)=>{

  return {
      type:Types.DELETE_ERROR,
      payload:data
  }
}
export const getIdRequest = (id) => {
  return {
    type: Types.GETID_REQ,
    payload:id
  };
}
export const getIdSuccess = (data) => {
  return {
    type: Types.GETID_SUCCESS,
    payload:data
  };
}
export const getIdError = (data) => {
  return {
    type: Types.GETID_ERROR,

  };
}