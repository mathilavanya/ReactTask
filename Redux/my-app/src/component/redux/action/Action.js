import  * as Type from '../type/Type'

export const increment=()=>{
    return{
        type:Type.INCREMENT
    }
}

export const decrement=()=>{
    return{
        type:Type.DECREMENT
    }
}