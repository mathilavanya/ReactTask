import React, { useEffect, useReducer, useState } from 'react'
import Reducer, { initialValue } from './Reducer'
import { deleteData, getData } from '../constants/Url'
import { getSuccess,getError, deleteSuccess, deleteError } from './Action'
import { useNavigate } from 'react-router-dom'

const ReducerList = () => {
  // const[array,setArray]=useState([])

  const [state, dispatch] = useReducer(Reducer, initialValue);
let nav = useNavigate()
  let getItem = async () => {
    try {
      const res = await getData();
      // setArray(res.data)
      // console.log(res.data);
      if (res.status == 200 || res.status == 201) {
        dispatch(getSuccess(res.data));
      }
    } catch (error) {
      dispatch(getError(error));
    }
  };
  useEffect(() => {
    getItem();
  }, []);

    const Edit =  (id) =>{
      nav(`/rform/${id}`);
  };

  let Delete = async (id) => {
    try {
      const res = await deleteData(id);

      if (res.status == 200 || res.status == 201) {
        dispatch(deleteSuccess(id));
      }
    } catch (error) {
      dispatch(deleteError(error));
    }
  };
  return (
    <div>
      <h1 className="text-dark mt-5">STUDENTLIST</h1>
      <div className="table1">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="table-info">
                SI.NO
              </th>
              <th scope="col" className="table-info">
                EMPLOYEE NAME
              </th>
              <th scope="col" className="table-info">
                EMAIL
              </th>
              <th scope="col" className="table-info">
                EMPLOYEE ID
              </th>
              <th scope="col" className="table-info">
                JOIN DATE
              </th>
              <th scope="col" className="table-info">
                ATTENDANCE
              </th>
              <th scope="col" className="table-info">
                JOB
              </th>
              <th scope="col" className="table-info">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {state.item.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.number}</td>
                <td>{data.date}</td>
                <td>{data.attendance}</td>
                <td>{data.job}</td>
                <td>
                  <button
                    className="rounded-2 border-0 bg-primary text-light"
                    onClick={() => Edit(data.id)}
                  >
                    Edit
                  </button>{" "}
                  <button
                    className="rounded-2  border-0 bg-danger text-light"
                    onClick={() => Delete(data.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReducerList