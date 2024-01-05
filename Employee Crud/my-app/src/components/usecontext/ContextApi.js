import React, { createContext, useEffect, useState } from "react";

export const TableContext = createContext();

const ContextApi = ({ children }) => {
  const [row, setrow] = useState([]);
  const [obj, setObj] = useState(null);
  const [view, setView] = useState(null);
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [bill, setBill] = useState("");
  const [editrows, seteditrows] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [counter, setCounter] = useState(0);
  const [editingFlag, setEditingflag] = useState(false);
  const [flag, setflag] = useState(false);
  const initialRowState = {
    product: [{ productName: "", quantity: 0, amount: 0, totalAmount: 0 }],
  };
  const productAmounts = {
    Pen: 10,
    Pencil: 5,
    Eraser: 2,
    Scale: 5,
  };
  useEffect(() => {
    console.log(obj);
    if (obj) {
      setList([...list, obj]);
    }
  }, [obj]);

  const addRow = () => {
    setEditingflag(true)

    const lastRow = row[row.length - 1];
    if (lastRow && !lastRow.flag) {
      alert("Please save the last row before adding a new one.");
      return;
    }

    const newRow = {
      productName: "",
      quantity: 0,
      amount: 0,
      totalAmount: 0,
      flag: false,
      edit: false,
    };
    setrow([...row, newRow]);
    seteditrows([...editrows, true]);
  };

  const Products = (index, value) => {
    const updatedRow = [...row];
    updatedRow[index].productName = value;
    updatedRow[index].quantity = 0;
    updatedRow[index].amount = 0;
    updatedRow[index].totalAmount = 0;
    setrow(updatedRow);
  };

  const Quantity = (index, value) => {
    const updatedRow = [...row];
    updatedRow[index].quantity = value;
    const selectedProduct = updatedRow[index].productName;
    updatedRow[index].amount = productAmounts[selectedProduct];
    updatedRow[index].totalAmount = value * productAmounts[selectedProduct];
    const totalAmounts = updatedRow.reduce(
      (total, row) => total + row.totalAmount,
      0
    );
    setGrandTotal(totalAmounts);
    setrow(updatedRow);
  };

  const edit = (ind) => {
    const updatedRow = row[ind];
    updatedRow.flag = false;
    const up = row.map((res, index) =>
      index === ind ? { ...res, updatedRow } : res
    );
    setrow(up);
    setEditingflag(true)
 
  };

  const save = (ind) => {
    console.log(ind);
    const updatedRow = row[ind];
    if (
      !updatedRow.productName ||
      updatedRow.quantity === 0 ||
      !updatedRow.amount ||
      !updatedRow.totalAmount
    ) {
      alert("Please fill in all the fields before saving.");
      return;
    }
    updatedRow.flag = true;
    const up = row.map((res, index) =>
      index === ind ? { ...res, updatedRow } : res
    );
    console.log(up);

    setrow(up);
    console.log(updatedRow);
    console.log(ind);
    console.log(row);
    setEditingflag(false)
    // edit(index);
  };

  const cancel = (index, data) => {
    const updatedRow = [...row];
    updatedRow.splice(index, 1);
    setrow(updatedRow);
    console.log(data);
    console.log(data.totalAmount);
    const resAmount = grandTotal - data.totalAmount;
    setGrandTotal(resAmount);
    console.log(obj);
    const updatededitrows = [...editrows];
    updatededitrows.splice(index, 1);
    seteditrows(updatededitrows);
    setEditingflag(false)

  };

  const Delete = (index, data) => {
    const updatedRow = [...row];
    updatedRow.splice(index, 1);
    setrow(updatedRow);
    console.log(data);
    console.log(data.totalAmount);
    const resAmount = grandTotal - data.totalAmount;
    setGrandTotal(resAmount);
    console.log(obj);
    const updatededitrows = [...editrows];
    updatededitrows.splice(index, 1);
    seteditrows(updatededitrows);
    setEditingflag(false)

  };
  const generateBillNumber = () => {
    const formattedBillNumber = `AA-${counter.toString().padStart(4, "0")}`;
    setBill(formattedBillNumber);
    setCounter((prevCounter) => prevCounter + 1);
    console.log(bill);
  };

  return (
    <div>
      <TableContext.Provider
        value={{
          obj,
          setObj,
          counter,
          setCounter,
          list,
          setList,
          row,
          addRow,
          setrow,
          productAmounts,
          initialRowState,
          Delete,
          cancel,
          edit,
          save,
          Quantity,
          Products,
          editrows,
          seteditrows,
          name,
          setName,
          email,
          setEmail,
          number,
          setNumber,
          address,
          setAddress,
          date,
          setDate,
          bill,
          setBill,
          grandTotal,
          setGrandTotal,
          generateBillNumber,
          view,
          setView,editingFlag, setEditingflag
        }}
      >
        {children}
      </TableContext.Provider>
    </div>
  );
};

export default ContextApi;
