import axios from "axios"

export const API = "https://65300b826c756603295e2a67.mockapi.io/employee/"

export const postData=async (data)=>{
    const res = await axios({
      method:'POST',
      url:API,
      data:data
    })
  return res;
  
       
}

export const getData=async ()=>{
  const res = await axios({
    method:'GET',
    url:API
  })

return res;
     
}

export const putData=async (id,data)=>{

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
export const deleteData=async (id)=>{
  
  const res = await axios({
    method:'DELETE',
    url:API+id,
    data:id
  })

return res;
     
}
