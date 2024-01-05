import axios from "axios";

export const API = "https://65300b826c756603295e2a67.mockapi.io/saga/"

export const getApi = async (data)=>{
    const response = await axios({
        method:'GET',
        url:API,
      data:data

})
return response;
       
}
export const postApi = async (data)=>{
  const response = await axios({
      method:'POST',
      url:API,
    data:data

})
return response;
     
}
export const putData=async (data, id)=>{

  const res = await axios({
    method:'PUT',
    url:API+id,
    data:data
  })

return res;
     
}
export const getidData=async (id)=>{

  const res = await axios({
    method:'GET',
    url:API+id
  })

return res;
     
}
export const deleteData = async (id) => {
  const response = await axios({
    method: "DELETE",
    url: API+id ,
    data: id,
  });
  return response;
  };