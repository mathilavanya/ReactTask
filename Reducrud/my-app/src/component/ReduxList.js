import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { viewValue } from "./redux/action/Action";

const ReduxList = () => {
  const state = useSelector((res) => res.ReduxReducer);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleEdit = (data) => {
    dispatch({ type: "Edit", payload: data });
    nav("/ReduxForm");
  };
  const handleDelete = (index) => {
    dispatch({ type: "Delete", payload: index });
  };
  const handleView = (data) => {
    dispatch({ type: "View", payload: data });
    nav("/ReduxView");
  };
  return (
    <div>
      <div>
        
      </div>
      <table className="table mt-4 container border-1">
        <thead>
          <tr className="table-dark text-center">
            <th scope="col">
            SL.NO
            </th>
            <th scope="col">Country</th>
            <th scope="col">remarks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.productDetails &&
            state.productDetails.map((row, index) => (
              <tr key={index} className="text-center">
                <td>{index + 1}</td>
                <td>{row.country === "" ? "India" : row.country}</td>
                <td>{row.remarks}</td>
                <td>
                  <button
                    type="submit"
                    className="bg-primary border-0 rounded text-light"
                    onClick={() => handleEdit(row)}
                  >
                    Edit
                  </button>

                  <button
                    type="submit"
                    className="bg-danger rounded border-0 text-light mx-2"
                    onClick={() => handleDelete(row.id)}
                  >
                    Delete
                  </button>
                  <button
                    type="submit"
                    className="bg-success rounded border-0 text-light mx-2"
                    onClick={() => handleView(row)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReduxList;
