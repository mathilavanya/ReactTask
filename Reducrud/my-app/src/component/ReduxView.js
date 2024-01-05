import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ReduxView = () => {
  const state = useSelector((res) => res.ReduxReducer);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const back = () => {
    nav("/ReduxForm");
  };
  return (
    <div>
      <div className="container card invoice p-5  mt-5">
        <div className=" container text-start">
          <hr></hr>
          <p>
            <span className="fw-bold">Location: </span>
            {state.viewObj.country === "" ? "India" : state.viewObj.country}
          </p>
          <p>
            <span className="fw-bold">Remarks:</span>
            {state.viewObj.remarks}
          </p>
          <hr></hr>
        </div>
        <div className=" container mt-3 text-start">
          <h6>Details</h6>
          <table className="table mt-3 ">
            <thead>
              <tr>
                <th scope="col">SI.NO</th>
                <th scope="col">State</th>
                <th scope="col">City</th>
                <th scope="col">Remarks</th>
              </tr>
            </thead>
            <tbody>
            {state.viewObj.products&&state.viewObj.products.map((row, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{row.state}</td>
                    <td>{row.city}</td>
                    <td>{row.remarks}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <button className="btn btn-dark" onClick={() => back()}>
            back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReduxView;
