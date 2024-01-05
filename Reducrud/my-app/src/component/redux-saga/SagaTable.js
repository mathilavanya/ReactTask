import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "../redux/action/ActionSaga";

const SagaTable = () => {
  const[array,setArray]=useState(null)
  const dispatch = useDispatch();
  const state=useSelector((res)=>res.Reducersaga)
  console.log(state);
  const getItem = useCallback(() => {
    dispatch(getRequest());
  }, [dispatch]);

  useEffect(() => {
    getItem();
  }, []);
  useEffect(() => {
    if (state && state.list) {
      setArray(state.list);
    }
  }, [state]);

  return (
    <div className="mt-5 card">
      <table class="table table-white">
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
          {array &&
            array.map((res, index) => (
              <tr key={res}>
                <td>{index + 1}</td>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>{res.phone}</td>
                <td>{res.password}</td>
                <td>{res.c_password}</td>
                <td>{res.gender}</td>
                <td>{res.language}</td>
                <td>{res.date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SagaTable;
