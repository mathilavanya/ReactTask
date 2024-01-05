import * as Type from "../type/Type";
import { v4 as uuidv4 } from 'uuid';

export const addRow = (rows) => {
  return {
    type: Type.ADD_ROW,
    payload: rows,
  };
};
export const saveRow = (index) => {
  return {
    type: Type.SAVE_ROW,
    payload: index,
  };
};
export const cancelRow = (index) => {
  return {
    type: Type.CANCEL_ROW,
    payload: index,
  };
};
export const editRow = (index) => {
  return {
    type: Type.EDIT_ROW,
    payload: index,
  };
};
export const deleteRow = (index) => {
  return {
    type: Type.DELETE_ROW,
    payload: { index },
  };
};
export const submitData = () => {
  return {
    type: Type.SUBMIT_DATA,
  };
};

export const editTable = (data) => ({
  type: Type.EDIT_TABLE,
  payload: { id: uuidv4(), data }
});
export const viewValue = (data) => ({
  type: Type.VIEW_VALUE,
  payload: data,
});



