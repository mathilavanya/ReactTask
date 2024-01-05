import * as type from './type'

export const postSuccess= (data)=>{

    return {
        type : type.POST_SUCCESS,
        payload : data
    };
       
}
export const postError= (data)=>{

    return {
        type : type.POST_ERROR,
        payload : data
    };
       
}

export const getSuccess= (data)=>{

    return {
        type : type.GET_SUCCESS,
        payload:data
    };
       
}

export const getError= (data)=>{

    return {
        type : type.GET_ERROR,
        payload:data

    };
       
}
export const putSuccess= (data)=>{

    return {
        type : type.PUT_SUCCESS,
        payload : data

    };
       
}

export const putError= (data)=>{

    return {
        type : type.PUT_ERROR,
        payload : data

    };
       
}
export const getidSuccess= (data)=>{

    return {
        type : type.GETID_SUCCESS,
        payload : data

    };
       
}

export const getidError= (data)=>{

    return {
        type : type.GETID_ERROR,
        payload : data

    };
       
}
export const deleteSuccess= (data)=>{

    return {
        type : type.DELETE_SUCCESS,
        payload : data

    };
       
}

export const deleteError= (data)=>{

    return {
        type : type.DELETE_ERROR,
        payload : data

    };
       
}