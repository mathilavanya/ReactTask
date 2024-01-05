import React, { useEffect } from "react";
import { useContext } from "react";
import { TableContext } from "./ContextApi";

const Invoice = () => {
  const {
    row, name, email, number, address, date, bill,counter,setBill,view,grandTotal
  } = useContext(TableContext);

  useEffect(()=>{
  
  },[])

  return (
    <div className="container card invoice p-5  mt-5">
      <div className=" container text-start">
        <hr></hr>
        <p>
          <span className="fw-bold">Name: </span>
          {view.name}
        </p>
        <p>
          {" "}
          <span className="fw-bold">Bill No:</span> {view.bill}
        </p>
        <p>
          <span className="fw-bold">Email:</span> {view.email}
        </p>
        <p>
          <span className="fw-bold">Phone Number:</span> {view.number}
        </p>
        <p>
          <span className="fw-bold">Address:</span> {view.address}
        </p>
        <p>
          <span className="fw-bold">Date: </span>
          {view.date}
        </p>

        <hr></hr>
      </div>
      <div className=" container mt-3 text-start">
        <h6>Product details</h6>
        <table className="table mt-3 ">
          <thead>
            <tr className="table-info">
              <th scope="col">SI.NO</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Amount</th>
              <th scope="col">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {view.row.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.productName}</td>
                <td>{data.quantity}</td>
                <td>{data.amount}</td>
                <td>{data.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-5">
        <p className="fw-bold text-dark">Grand Total: {view.grandTotal}</p>
        </div>
    </div>
  );
};

export default Invoice;