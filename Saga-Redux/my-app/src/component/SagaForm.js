import React, { useCallback, useState, useEffect } from "react";
import "./SagaStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postRequest, putRequest } from "../redux-saga/action/Action";
import {  useFormik } from "formik";

const SagaForm = () => {
  const state = useSelector((res) => res.ReducerSaga);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setCpassword] = useState("");
  const [language, setLanguage] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    console.log(state.editObj);
    if (state.editObj) {
      setName(state.editObj.name);
      setEmail(state.editObj.email);
      setPhone(state.editObj.phone);
      setPassword(state.editObj.password);
      setCpassword(state.editObj.c_password);
      setLanguage(state.editObj.language);
      setGender(state.editObj.gender);
      setDate(state.editObj.date);
    }
  }, [state.editObj]);
  // const validationShema= Yup.object().shape({
  //   name:Yup.string().required("Name Required")
  //   email:Yup.string().required("Email Required")
  //   phone:Yup.string().required("PhoneNumber Required")
  //   password:Yup.string().required("Password Required")
  //   c_password:Yup.string().required("
  //    Required")
  //   gender:Yup.string().required("Name Required")
  //   language:Yup.string().required("Name Required")
  //   date:Yup.string().required("Name Required")

  // })
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      c_password: "",
      phone: "",
      date: "",
      language: "",
      gender: "",
    },
    validate: (values) => {
      const error = {};
      if (values.name.length < 3) {
        error.name = "Name required";
      }
      if (!values.email) {
        error.email = "Email required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        error.email = "Invail email address";
      }
      if (!values.phone) {
        error.phone = "PhoneNumber Required";
      } else if (!/^\d{10}$/i.test(values.phone)) {
        error.phone = "Invalid phone number";
      }
      if (!values.password) {
        error.password = "Password required";
      } else if (/^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8,}$/i.test(values.password)) {
        error.password = "Invalid password ";
      }
      if (!values.c_password) {
        error.c_password = "c-password required";
      } else if (values.c_password !== values.password) {
        error.c_password = "Invalid password ";
      }
      if (!values.date) {
        error.date = " Date required";
      }
      if (!values.language) {
        error.language = " Language required";
      }
      if (!values.gender) {
        error.gender = " Gender required";
      }

      return error;
    },
    onSubmit: (values) => {
      const formData = {
        name: values.name,
        email: values.email,
        password: values.password,
        c_password: values.c_password,
        phone: values.phone,
        date: values.date,
        language: values.language,
        gender: values.gender,
      };
      if (state.editObj) {
        formData.id = state.editObj.id;
        dispatch(putRequest(formData));
      } else {
        dispatch(postRequest(formData));
        nav(`/SagaList`);
      }
      formik.resetForm();
    },
  });
  console.log(formik);
  // const submit=useCallback(()=>{
  //   const formValue={
  //     name,email,phone,password,c_password,gender,language,date
  //   }
  //   if(state.editObj){
  //     formValue.id = state.editObj.id
  //     dispatch(putRequest(formValue))
  //   }else{
  //     dispatch(postRequest(formValue))
  //   }
  //   nav('/SagaList')
  // },[dispatch,name,email,phone,password,c_password,language,gender,date])
  return (
    <div>
      <div className="center">
        <form className="form1" onSubmit={formik.handleSubmit}>
          <h4 className="text-primary">FORM</h4>
          <div className="color form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              // onChange={(e) => {
              //    setName(  e.target.value );
              //  }}
              placeholder="Name"
            />
            <label htmlFor="name" className="fw-bold">
              NAME
            </label>
            {formik.touched.name && formik.errors.name && (
              <div className="text-danger">
                {formik.errors.name}
                <span>*</span>
              </div>
            )}{" "}
          </div>
          <div className=" form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="email"
              // value={email}
              // onChange={(e) => {
              //    setEmail(  e.target.value );
              //  }}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <label htmlFor="email" className="fw-bold">
              EMAIL
            </label>
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger">
                {formik.errors.email}
                <span>*</span>
              </div>
            )}{" "}
          </div>
          <div className="color form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Phone "
              // value={phone}
              // onChange={(e) => {
              //    setPhone(  e.target.value );
              //  }}
              value={formik.values.phone}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <label htmlFor="phone" className="fw-bold">
              PHONE NUMBER
            </label>
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-danger">
                {formik.errors.phone}
                <span>*</span>
              </div>
            )}{" "}
          </div>
          <div className=" form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <label htmlFor="password" className="fw-bold">
              PASSWORD
            </label>
            {formik.touched.password && formik.errors.password && (
              <div className="text-danger">
                {formik.errors.password}
                <span>*</span>
              </div>
            )}{" "}
          </div>
          <div className="color form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="c_password"
              name="c_password"
              placeholder="password"
              value={formik.values.c_password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <label for="c_password" className="fw-bold">
              CONFIRM PASSWORD
            </label>
            {formik.touched.c_password && formik.errors.c_password && (
              <div className="text-danger">
                {formik.errors.c_password}
                <span>*</span>
              </div>
            )}{" "}
          </div>
          <div>
            <label className="fw-bold">GENDER:</label>
            <br></br>
            <input
              type="checkbox"
              name="gender"
              id="male"
              value="male"
              checked={formik.values.gender === "male"}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}

              // style={{ height: '20px', width: '20px' }}
            />
            <label htmlFor="male">Male</label>
            <input
              type="checkbox"
              name="gender"
              id="female"
              value="female"
              checked={formik.values.gender === "female"}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}

              // style={{ height: '20px', width: '20px' }}
            />
            <label htmlFor="female">Female</label>
            {formik.touched.gender && formik.errors.gender && (
              <div className="text-danger">
                {formik.errors.gender}
                <span>*</span>
              </div>
            )}{" "}          </div>
          <div className="color form-floating mb-3">
            <select
              className="form-select"
              id="language"
              value={formik.values.language}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              aria-label="Floating label select example"
            >
              <option>Select</option>
              <option>Tamil</option>
              <option>English</option>
              <option>Hindi</option>
              <option>Malayalam</option>
            </select>
            <label htmlFor="language" className="fw-bold text-dark">
              LANGUAGE
            </label>
            {formik.touched.language && formik.errors.language && (
              <div className="text-danger">
                {formik.errors.language}
                <span>*</span>
              </div>
            )}{" "}
          </div>
          <div className="color form-floating mb-3">
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              placeholder="date"
              value={formik.values.date}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <label htmlFor="date" className="fw-bold text-dark">
              DATE OF BIRTH
            </label>
            {formik.touched.date && formik.errors.date && (
              <div className="text-danger">
                {formik.errors.date}
                <span>*</span>
              </div>
            )}{" "}
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary border-0 rounded text-white p-2"
              // onClick={submit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SagaForm;
