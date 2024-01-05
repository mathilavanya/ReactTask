import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteReq, getRequest, putRequest, getIdRequest } from '../redux-saga/action/Action'
import { useNavigate } from 'react-router-dom'

const SagaList = () => {
 
  let nav =useNavigate()
    const dispatch = useDispatch()
    const state = useSelector((res)=>res.ReducerSaga)
    console.log(state);
    const getItem = useCallback(()=>{
        dispatch(getRequest())
    },[dispatch])
    useEffect(()=>{
        getItem()
    },[getItem])
    const Edit = (data) => {
      dispatch(getIdRequest(data.id))
      nav(`/SagaForm/${data.id}`)
    };
    const Delete=(id)=>{
    
      dispatch(deleteReq(id))
  }
  return (
    <div className="mt-5">
          <table class="table">
        <thead>
          <tr class="table table-dark">
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">PHONE NUMBER</th>
            <th scope="col">PASSWORD</th>
            <th scope="col">CONFIRM PASSWORD</th>
            <th scope="col">GENDER</th>
            <th scope="col">LANGUAGE</th>
            <th scope="col">DATE OF BIRTH</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
            {state.list && state.list.map(res=>
            <tr key={res}>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>{res.phone}</td>
                <td>{res.password}</td>
                <td>{res.c_password}</td>
                <td>{res.gender}</td>
                <td>{res.language}</td>
                <td>{res.date}</td>
                <td>
                <button
                    className="rounded-2 border-0 bg-primary text-light"
                    onClick={() => Edit(res)}
                  >
                    Edit
                  </button>{" "}
                  <button
                    className="rounded-2  border-0 bg-danger text-light"
                    onClick={() => Delete(res.id)}
                  >
                    Delete
                  </button>
                </td>

            </tr>
                )}
        </tbody>
      </table>
    </div>
  )
}

export default SagaList