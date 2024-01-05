import React, { useEffect, useReducer, useState } from 'react'
import Reducer, { initialValue } from './Reducer';
import { getidData, postData, putData} from '../constants/Url';
import { getidError, getidSuccess, postError,postSuccess, putError, putSuccess } from './Action';
import { useNavigate, useParams } from 'react-router-dom';

const ReducerForm = () => {
  const [formValue, setformValue] = useState('')
  const [state, dispatch] = useReducer(Reducer,initialValue);
  const { id } = useParams();
  console.log(id);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [idError, setidError] = useState("");
  const [dateError, setDateError] = useState("");
  const [attendanceError, setAttendanceError] = useState("");
  const [jobError, setJobError] = useState("");
  let nav=useNavigate();

  const attendradio = (e) => {
    const value = e.target.value;
    setformValue({ ...formValue, attendance: value });
  }; 

  const store = async (e) => {
    e.preventDefault();
    console.log(formValue);
    const valid = await validation();
    if(valid){
      if (id) {
        await edit(id, formValue);
      } else {
        await post(formValue);
       
      }
    }else{
      return
    }
      
    setformValue({
      name: "",
      email: "",
      number: "",
      date: "",
      attendance: "",
      job: "",
    });
    }

   
    const post = async () => {
      try {
        const res = await postData(formValue)
      console.log(res);
      if (res.status===200 || res.status===201) {
        dispatch(postSuccess(formValue))
        nav('/rlist')
      }
      } catch (error) {
        dispatch(postError(error))
      }
    } 
     const edit = async () => {
      try {
        const res = await putData(id,formValue)
      console.log(res);
      if (res.status===200 || res.status===201) {
        dispatch(putSuccess(formValue))
        nav('/rlist')
      }
      } catch (error) {
        dispatch(putError(error))
      }
    }

  useEffect(() => {

      const getItem = async () => {
        try {
        const res = await getidData(id);
        if (res.status === 200 || res.status === 201) {
          dispatch(getidSuccess(res.data));
          setformValue(res.data);
        }
        } catch (error) {
          dispatch(getidError(error));
          
        }

      };
      getItem();
    
  }, [id]);

  const validation = async (e) => {
    let errorValue = false;

    if (formValue.name < 3) {
      setNameError("*NAME REQUIRED*");
      errorValue = true;
    } else {
      setNameError("");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValue.email)) {
      setEmailError("*EMAIL REQUIRED*");
      errorValue = true;
    } else {
      setEmailError("");
    }

    if (formValue.number=== 6) {
      setidError("*EMPLOYEE ID REQUIRED*");
      errorValue = true;
    } else {
      setidError("");
    }
    if (formValue.date == "") {
      setDateError("*DATE REQUIRED*");
      errorValue = true;
    } else {
      setDateError("");
    }
    if (formValue.attendance == "") {
      setAttendanceError("*DATE REQUIRED*");
      errorValue = true;
    } else {
      setAttendanceError("");
    }
    if (formValue.job === "") {
      setJobError("*JOB REQUIRED*");
      errorValue = true;
    } else {
      setJobError("");
    }
    if (errorValue) {
      return false;
    }
    return true;
  };
  return (
    <div>
      <div className="form1">
        <form>
          <div className="color form-floating mb-3">
            <input
              type="text"
              className="form-control"
              value={formValue.name}
              onChange={(e) => {
                setformValue({ ...formValue, name: e.target.value });
                setNameError("");
              }}
              id="name"
              name="name"
              placeholder="Name"
            />
            <label htmlFor="name">Employee Name</label>
            <p id="name_error" className="text-danger fw-bold">
              {nameError}
            </p>
          </div>

          <div className=" form-floating mb-3">
            <input
              type="email"
              className="form-control"
              value={formValue.email}
              onChange={(e) => {
                setformValue({ ...formValue, email: e.target.value });
                setEmailError("");
              }}
              id="email"
              name="email"
              placeholder="email"
            />
            <label htmlFor="email">Email</label>
            <p id="name_error" className="text-danger fw-bold">
              {emailError}
            </p>
          </div>

          <div className=" form-floating mb-3">
            <input
              type="number"
              className="form-control"
              value={formValue.number}
              onChange={(e) => {
                setformValue({ ...formValue, number: e.target.value });
                setidError("");
              }}
              id="email"
              name="email"
              placeholder="email"
            />
            <label htmlFor="number">Employee Id</label>
            <p id="id_error" className="text-danger fw-bold">
              {idError}
            </p>
          </div>

          <div class="color form-floating mb-3">
            <input
              type="date"
              class="form-control"
              value={formValue.date}
              onChange={(e) => {
                setformValue({ ...formValue, date: e.target.value });
                setDateError("");
              }}
              id="date"
              name="date"
              placeholder="date"
            />
            <label for="date">Join Date</label>
            <p id="name8" class="text-danger fw-bold">
              {dateError}
            </p>
          </div>

          <div className="attend mb-3">
            <label>Attendance</label>
            <br></br>
            <label>In</label>
            <input
              type="radio"
              className="in"
              id="in"
              name="attendance"
              value="Present"
              checked={formValue.attendance === "Present"}
              onChange={attendradio}
            ></input>
            <label>Out</label>
            <input
              type="radio"
              className="out"
              name="attendance"
              value="Absent"
              checked={formValue.attendance === "Absent"}
              onChange={attendradio}
            ></input>
            <p id="Attendance_err" className="text-danger fw-bold ms-5">
              {attendanceError}
            </p>
          </div>

          <div class="color form-floating mb-3">
            <select
              class="form-select"
              id="job"
              aria-label="Floating label select example"
              value={formValue.job}
              onChange={(e) => {
                setformValue({ ...formValue, job: e.target.value });
                setJobError("");
              }}
            >
              <option>Select</option>
              <option>Manager</option>
              <option>Worker</option>
            </select>
            <label for="job">Job</label>
            <p id="name7" class="text-danger fw-bold">
              {jobError}
            </p>
          </div>

          <div className=" form-floating mb-3">
            <input
              type="submit"
              value="Submit"
              className="bg-primary border-0 rounded text-white p-2"
              onClick={store}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReducerForm