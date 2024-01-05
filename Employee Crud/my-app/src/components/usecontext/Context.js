import React, { useContext, useState } from "react";
import "./ContextStyle.css";
import { useNavigate } from "react-router-dom";
import { TableContext } from "./ContextApi";

const Usecontext = () => {
  const [name_error, setNameerr] = useState("");
  const [email_error, setEmailerr] = useState("");
  const [phone_error, setNumbererr] = useState("");
  const [address_error, setAddresserr] = useState("");
  const [date_error, SetDateerr] = useState("");
  const [editIndex, SeteditIndex] = useState("");


  const {
    setObj,
    list,
    setList,
    row,
    setrow,
    addRow,
    productAmounts,
    Delete,
    cancel,
    edit,
    save,
    Quantity,
    Products,
    editrows,
    name,
    setName,
    email,
    setEmail,
    number,
    setNumber,
    address,
    setAddress,
    grandTotal,
    date,generateBillNumber,
    setDate,
    counter,
    setCounter,
    bill,
    setBill,
    setGrandTotal,editingFlag, setEditingflag
  } = useContext(TableContext);

  const validation = () => {
    let hasError = true;
    if (name.length < 3) {
      setNameerr("Name required");
      hasError = false;
    } else {
      setNameerr("");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailerr("Email should be correct format");
      hasError = false;
    } else {
      setEmailerr("");
      hasError = true;
    }
    if (number.length !== 10) {
      setNumbererr("Number required");
      hasError = false;
    } else {
      setNumbererr("");
    }
    if (address === "") {
      setAddresserr("Address required");
      hasError = false;
    } else {
      setAddresserr("");
    }

    if (hasError) {
      return false;
    } else {
      return true;
    }
  };
  

  let nav = useNavigate();

  const submit = async() => {
    if (editIndex !== null) {
      // Perform edit logic
      const updatedList = [...list];
      updatedList[editIndex] = {
        ...updatedList[editIndex],
        name,
        email,
        number,
        address,
        date,
        row,
      };
  
      // Update the context with the edited list
      setList(updatedList);
    }else{
      return
    }
    const formattedBillNumber = `AA-${counter.toString().padStart(4, "0")}`;
    console.log("obj",formattedBillNumber);
    setCounter((prevCounter) => prevCounter + 1)
    setObj({
      name,
      email,
      bill:formattedBillNumber,
      number,
      address,
      date,
      row,grandTotal
    })// 
   
    // generateBillNumber();
    setrow([])
    setName("")
    setDate("")
    setNumber("")
    setBill("")
    setAddress("")
    setEmail("")
    setGrandTotal("")
    nav("/ContextList");
  };

  const Clear = () => {
    
    nav("/ContextList");
  };
  return (
        <div className="container mt-4">
         <div className="card">
           <div className="form">
             <div className="row">
               <div className="col fw-bold input-data">
                 <label htmlFor="name">Name</label>
                 <input
                   type="text"
                   id="name"
                   className="form-control"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   required
                 />
                 <p className="text-danger">{name_error}</p>
                 <div className="underline"></div>
               </div>
               <div className="col fw-bold input-data">
                 <label htmlFor="email">Email</label>
                 <input
                   type="email"
                   id="email"
                   className="form-control"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required
                 />
               </div>
               <div className="mb-2">
                 <p className="text-danger fw-bold">{email_error}</p>
                 <div className="underline"></div>
               </div>
             </div>
             <div className="row">
               <div className="col fw-bold input-data">
                 <label htmlFor="number">Phone Number</label>
                 <input
                   type="text"
                   id="number"
                   className="form-control"
                   value={number}
                   onChange={(e) => setNumber(e.target.value)}
                   required
                 />
                 <div className="mb-2">
                   <p className="text-danger">{phone_error}</p>
                 </div>
                 <div className="underline"></div>
               </div>
               <div className="col fw-bold input-data">
                 <label htmlFor="address">Address</label>
                 <div>
                   <textarea
                     id="address"
                     className="form-control"
                     value={address}
                     onChange={(e) => setAddress(e.target.value)}
                     required
                   ></textarea>
                   <div className="mb-2">
                     <p className="text-danger">{address_error}</p>
                   </div>
                   <div className="underline"></div>
                 </div>
               </div>
               <div className="col fw-bold input-data">
                 <label htmlFor="name">Date</label>
                 <input
                   type="date"
                   id="date"
                   className="form-control"
                   value={date}
                   onChange={(e) => setDate(e.target.value)}
                   required
                 />
                 <p className="text-danger">{date_error}</p>
                 <div className="underline"></div>
               </div>
             </div>
           </div>
         </div>

      <div className=" d-flex mt-4 container outer justify-content-end ">
        <button
          type="submit"
          disabled={editingFlag}
          className="btn btn-success fw-bold"
          onClick={() => {
            addRow();
            
          }}
        >
          {" "}
          Add Row
        </button>
      </div>
      <div>
        <table className="table container outer border-1 ">
          <thead>
            <tr>
              <th scope="col">SI.NO</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Amount</th>
              <th scope="col">Total Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {row.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {!data.flag ? (
                    <select
                      id="productName"
                      value={data.productName}
                      onChange={(e) => Products(index, e.target.value)}
                    >
                      <option value=""></option>
                      <option value="Pen">Pen</option>
                      <option value="Pencil">Pencil</option>
                      <option value="Eraser">Eraser</option>
                      <option value="Scale">Scale</option>
                    </select>
                  ) : (
                    <span>{data.productName}</span>
                  )}
                </td>
                <td>
                  {!data.flag ? (
                    <input
                      id="quantity"
                      type="number"
                      value={data.quantity}
                      onChange={(e) => Quantity(index, e.target.value)}
                    />
                  ) : (
                    <span>{data.quantity}</span>
                  )}
                </td>
                <td>
                  <input
                    type="number"
                    id=" amount"
                    value={productAmounts[data.productName]}
                    readOnly
                  />
                </td>
                <td>
                  <input
                    type="number"
                    id="totalAmount"
                    value={
                      data.quantity *
                      productAmounts[data.productName]
                    }
                    readOnly
                  />
                </td>

                <td>
                  {!data.flag ? (
                    <button
                      type="submit"
                      className="bg-success border-0 rounded text-light"
                      onClick={() => save(index)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={editingFlag}
                      className="bg-primary  border-0 rounded text-light"
                      onClick={() => edit(index)}
                    >
                      Edit
                    </button>
                  )}
                  {!data.flag ? (
                    <button
                      type="submit"
                      className="bg-danger  border-0 rounded text-light mx-2"
                      onClick={() => cancel(index,data)}
                    >
                      Cancel
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={editingFlag}
                      className="bg-danger  border-0 rounded text-light mx-2"
                      onClick={() => Delete(index,data)}
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-5">
        <p className="fw-bold text-light">Grand Total: {grandTotal}</p>
        <div className="d-flex justify-content-center mb-5">
          <button
            type="submit"
            className="rounded fw-bold text-dark border-0 btn btn-warning"
            onClick={Clear}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded fw-bold text-light border-0 btn btn-primary mx-2"
            onClick={submit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usecontext;