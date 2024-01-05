import React from 'react'
import "./SagaStyle.css";


const SagaForm = () => {
  return (
    <div>
         <div className="center">
        <form className="form1">
            <h4 className='text-primary'>FORM</h4>
          <div className="color form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Name"
            />
            <label htmlFor="name" className='fw-bold'>NAME</label>
            <p id="name_error" className="text-danger fw-bold">
            </p>
          </div>
          <div className=" form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="email"
            />
            <label htmlFor="email" className='fw-bold'>EMAIL</label>
            <p id="name_error" className="text-danger fw-bold">
            </p>
          </div>
          <div className="color form-floating mb-3">
      <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone "/>
      <label htmlFor="phone" className='fw-bold'>PHONE NUMBER</label>
      <p id="name3" className="text-danger"></p>

    </div>
          <div className=" form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="password"
            />
            <label htmlFor="password" className='fw-bold'>PASSWORD</label>
            <p id="name_error" className="text-danger fw-bold">
            </p>
          </div>
          <div className="color form-floating mb-3">
      <input type="password" className="form-control" id="c_password" name="c_password" placeholder="password" />
      <label for="c_password" className='fw-bold'>CONFIRM PASSWORD</label>
      <p id="name5" className="text-danger"></p>

    </div>
    <div>
  <label className='fw-bold'>GENDER:</label><br></br>
  <input
    type="checkbox"
    name="gender"
    id="male"
    value="male"
    // style={{ height: '20px', width: '20px' }}
  />
  <label htmlFor="male">Male</label>
  <input
    type="checkbox"
    name="gender"
    id="female"
    value="female"
    // style={{ height: '20px', width: '20px' }}
  />
  <label htmlFor="female">Female</label>
  <p id="gender_err" className="text-danger"></p>
</div>
    <div className="color form-floating mb-3">
      <select className="form-select" id="language" aria-label="Floating label select example">
        <option>Select</option>
        <option>Tamil</option>
        <option>English</option>
        <option>Hindi</option>
        <option>Malayalam</option>
      </select>
      <label htmlFor="language" className='fw-bold text-dark'>LANGUAGE</label>
      <p id="name7" className="text-danger"></p>

    </div>
    <div className="color form-floating mb-3">
      <input type="date" className="form-control" id="date" name="date" placeholder="date" />
      <label htmlFor="date" className='fw-bold text-dark'>DATE OF BIRTH</label>
      <p id="name8" className="text-danger"></p>

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
  )
}

export default SagaForm