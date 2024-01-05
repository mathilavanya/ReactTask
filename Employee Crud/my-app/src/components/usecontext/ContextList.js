import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TableContext } from "./ContextApi";

const ContextList = () => {
  const { row,bill,list,setList,setrow,setName,setEmail,setNumber,setAddress,setDate, setBill,view,setView} = useContext(TableContext);
  let nav = useNavigate();
  const Back = () => {
    nav("/Context");
  };

  const Delete = (index) => {
    const updatedList = [...list];

    updatedList.splice(index, 1);

    setList(updatedList);
  };
  const View=(data)=>{
setView(data)
nav('/Invoice')
  }
  const Edit = (index) => {
    setrow(list[index].row);
    
    setName(list[index].name);
    setEmail(list[index].email);
    setNumber(list[index].number);
    setAddress(list[index].address);
    setDate(list[index].date);
    setBill(list[index].bill);
    
        
    const updatedList = [...list];
    updatedList.splice(index, 1);

   
    
    setList(updatedList);

    nav("/Context");
  };
  
  return (
    <div className="container outer">
      <div className="mt-2 d-flex justify-content-start">
        <button
          type="submit"
          className="rounded fw-bold text-dark border-0 btn btn-info"
          onClick={Back}
        >
          Back
        </button>
      </div>

      <table className="table mt-4   border-1">
        <thead>
          <tr>
            <th scope="col">SI.NO</th>
            <th scope="col">Name</th>
            <th scope="col">Bill No</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Date</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr> 
        </thead>
        <tbody>
          {list.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.bill}</td>
              <td>{data.email}</td>
              <td>{data.number}</td>
              <td>{data.date}</td>
              <td>{data.address}</td>
              <td>
                <button
                  className="rounded-2 border-0 bg-primary text-light"
                  onClick={() => Edit(index)}
                >
                  Edit
                </button>
                <button
                  className="rounded-2  border-0 bg-danger text-light mx-1"
                  onClick={() => Delete(index)}
                >
                  Delete
                </button>
                <button
            type="submit"
            className="rounded-2 fw-bold text-dark border-0  bg-warning"
            onClick={() => View(data)}
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

export default ContextList;