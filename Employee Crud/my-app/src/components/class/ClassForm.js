import React, { Component } from "react";
import { API } from "../constants/Url";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";

const withRouter=WrappedComponent=>props=>{
  const params=useParams()

  return(
    <WrappedComponent {...props} params={params.id} navigate={useNavigate()}/>
  )
}

 class ClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        name: "",
        email: "",
        number: "",
        date: "",
        attendance: "",
        job: "",
      },
      nameError: "",
      emailError: "",
      idError: "",
      dateError: "",
      attendanceError: "",
      jobError: "",
    };
  }

  store = async (e) => {
    e.preventDefault();
    const { formValue } = this.state;

    console.log(formValue);
    const valid = await this.validation();
    console.log(valid);
    if (valid) {
      if (this.props.params) {
        // console.log(id);
        console.log(formValue);
        await this.Edit(this.props.params, this.state.formValue);
      } else {
        await this.post(this.state.formValue);
      }
    } else {
      return;
    }

    this.setState({
      formValue: {
        name: "",
        email: "",
        number: "",
        date: "",
        attendance: "",
        job: "",
      },
    });
  };

  async validation() {
    let errorValue = false;
    const { formValue } = this.state;

    if (formValue.name.length < 3) {
      this.setState({ nameError: "*NAME REQUIRED*" });
      errorValue = true;
    } else {
      this.setState({ nameError: "" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (!emailRegex.test(formValue.email)) {
      this.setState({ emailError: "*EMAIL REQUIRED*" });
      errorValue = true;
    } else {
      this.setState({ emailError: "" });
    }

    if (formValue.number.length < 6) {
      this.setState({ idError: "*EMPLOYEE ID REQUIRED*" });
      errorValue = true;
    } else {
      this.setState({ idError: "" });
    }

    if (formValue.date === "") {
      this.setState({ dateError: "*DATE REQUIRED*" });
      errorValue = true;
    } else {
      this.setState({ dateError: "" });
    }

    if (formValue.attendance === "") {
      this.setState({ attendanceError: "*ATTENDANCE REQUIRED*" });
      errorValue = true;
    } else {
      this.setState({ attendanceError: "" });
    }

    if (formValue.job === "") {
      this.setState({ jobError: "*JOB REQUIRED*" });
      errorValue = true;
    } else {
      this.setState({ jobError: "" });
    }

    if (errorValue) {
      return false;
    }
    return true;
  }

  async post(formValue) {
    const res = await axios.post(API, formValue);
    this.props.navigate("/classlist");
  }

   Edit = async(id, formValue)=> {
    console.log(this.props.params);
    console.log(formValue);
    const res = await axios.put(API + id,formValue);
    this.props.navigate("/classlist");
  }

  async componentDidMount() {
    console.log(this.props.params);
    if (this.props.params) {
      // console.log(id);
      const getItem = async (data) => {
        console.log(data);
        const res = await axios.get(API + data);
        console.log(res);
        this.setState({
          formValue: { ...this.state.formValue, ...res.data },
      });      };
      getItem(this.props.params);
    }
  }

  attendradio = (e) => {
    const value = e.target.value;
    this.setState({
      formValue: {
        ...this.state.formValue,
        attendance: value,
      },
    });
  };

  render() {
  
    const {
      nameError,
      emailError,
      idError,
      dateError,
      attendanceError,
      jobError,
    } = this.state;

    return (
      <div>
        <div className="form1">
          <form>
            <div className="color form-floating mb-3">
              <input
                type="text"
                className="form-control"
                value={this.state.formValue.name}
                onChange={(e) => {
                  this.setState({
                    formValue: {
                      ...this.state.formValue,
                      name: e.target.value,
                    },
                  });
                  this.setState({ nameError: "" });
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

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                value={this.state.formValue.email}
                onChange={(e) => {
                  this.setState({
                    formValue: {
                      ...this.state.formValue,
                      email: e.target.value,
                    },
                  });
                  this.setState({ emailError: "" });
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

            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                value={this.state.formValue.number}
                onChange={(e) => {
                  this.setState({
                    formValue: {
                      ...this.state.formValue,
                      number: e.target.value,
                    },
                  });
                  this.setState({ idError: "" });
                }}
                id="number"
                name="number"
                placeholder="number"
              />
              <label htmlFor="number">Employee Id</label>
              <p id="id_error" className="text-danger fw-bold">
                {idError}
              </p>
            </div>

            <div className="color form-floating mb-3">
              <input
                type="date"
                className="form-control"
                value={this.state.formValue.date}
                onChange={(e) => {
                  this.setState({
                    formValue: {
                      ...this.state.formValue,
                      date: e.target.value,
                    },
                  });
                  this.setState({ dateError: "" });
                }}
                id="date"
                name="date"
                placeholder="date"
              />
              <label htmlFor="date">Join Date</label>
              <p id="name8" className="text-danger fw-bold">
                {dateError}
              </p>
            </div>

            <div className="attend mb-3">
              <label>Attendance</label>
              <br />
              <label>In</label>
              <input
                type="radio"
                className="in"
                id="in"
                name="attendance"
                value="Present"
                checked={this.state.formValue.attendance === "Present"}
                onChange={this.attendradio}
              />
              <label>Out</label>
              <input
                type="radio"
                className="out"
                name="attendance"
                value="Absent"
                checked={this.state.formValue.attendance === "Absent"}
                onChange={this.attendradio}
              />
              <p id="Attendance_err" className="text-danger fw-bold ms-5">
                {attendanceError}
              </p>
            </div>

            <div className="color form-floating mb-3">
              <select
                className="form-select"
                id="job"
                aria-label="Floating label select example"
                value={this.state.formValue.job}
                onChange={(e) => {
                  this.setState({
                    formValue: { ...this.state.formValue, job: e.target.value },
                  });
                  this.setState({ nameError: "" });
                }}
              >
                <option>Select</option>
                <option>Manager</option>
                <option>Worker</option>
              </select>
              <label htmlFor="job">Job</label>
              <p id="name7" className="text-danger fw-bold">
                {jobError}
              </p>
            </div>

            <div className="form-floating mb-3">
              <input
                type="submit"
                value="Submit"
                className="bg-primary border-0 rounded text-white p-2"
                onClick={this.store}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(ClassForm);
