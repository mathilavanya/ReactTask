import axios from "axios";

export const API = "https://65300b826c756603295e2a67.mockapi.io/saga/"


export const getApi=async (data)=>{
    const response = await axios({
      method:'GET',
      url:API,
      data:data
    })
  
  return response;
       
  }