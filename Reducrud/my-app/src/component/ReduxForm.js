import React, { useEffect, useState } from "react";
import "./ReduxStyle.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addRow,
  cancelRow,
  deleteRow,
  editRow,
  saveRow,
} from "./redux/action/Action";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import International from "./International";
import National from "./National";
const ReduxForm = () => {
  const [active, setActive] = useState("national");
  const handleTabChange = (data, dt) => {
    console.log(dt);
    setActive(dt);
  };

  const countryData = [
    {
      countryName: "Canada",
      stateData: [
        {
          stateName: "Alberta",
          city: [
            {
              cityName: "Edmonton",
            },
            {
              cityName: "Calgary",
            },
          ],
        },
        {
          stateName: "Manitoba",
          city: [
            {
              cityName: " Winkler",
            },
            {
              cityName: "Thompson",
            },
          ],
        },
      ],
    },
    {
      countryName: "India",
      stateData: [
        {
          stateName: "Tamil Nadu",
          city: [
            {
              cityName: "Chennai",
            },
            {
              cityName: "Thanjavur",
            },
          ],
        },
        {
          stateName: "Kerala",
          city: [
            {
              cityName: "Thrissur",
            },
            {
              cityName: "Trivandrum",
            },
          ],
        },
      ],
    },
    {
      countryName: "Germany",
      stateData: [
        {
          stateName: "Bavaria",
          city: [
            {
              cityName: "Munich",
            },
            {
              cityName: "Nuremberg",
            },
          ],
        },
        {
          stateName: "Berlin",
          city: [
            {
              cityName: "Bernau",
            },
            {
              cityName: "Strausberg",
            },
          ],
        },
      ],
    },
  ];
  const dispatch = useDispatch();
  let nav = useNavigate();
  const state = useSelector((res) => res.ReduxReducer);
  const [newObj, setNewObj] = useState({
    location: false,
    country: "",
    remarks: "",
  });
  const [newRow, setNewRow] = useState({
    state: "",
    city: "",
    remarks: "",
    saved: true,
  });
  const handleChecked = (e) => {
    setNewObj({ ...newObj, location: e.target.checked });

    if (e.target.checked) {
      dispatch({
        type: "Checked",
        payload: { flag: e.target.checked, country: "India" },
      });
    } else {
      dispatch({
        type: "Checked",
        payload: { flag: e.target.checked, country: null },
      });
    }
  };
  const handleCountry = (e) => {
    setNewObj({ ...newObj, country: e.target.value });
    if (e.target.value !== "") {
      dispatch({
        type: "Country",
        payload: { flag: true, country: e.target.value },
      });
    } else {
      dispatch({ type: "Country", payload: { flag: false, country: null } });
    }
  };
  const add = () => {
    const headerObj = newObj;
    console.log(headerObj);

    if (
      (headerObj.country !== "" || headerObj.location) &&
      headerObj.remarks !== ""
    ) {
      console.log("success", newRow);
      dispatch(addRow(newRow));
    } else {
      console.log("error");
      toast("Please select either checkbox or country before adding a row");
    }
  };
 

  const handleChange = (e, ind) => {
    console.log(e.target.name);
    let name = e.target.name;
    let value = e.target.value;
    let obj = {
      [name]: value,
      index: ind,
    };
    console.log(obj);
    dispatch({ type: "rowColumn", payload: obj });
  };
  const Save = (index) => {
    const updatedRow = state.rows[index];
    if (updatedRow.state || updatedRow.city || updatedRow.remarks) {
      dispatch(saveRow(index));

      setNewRow({
        state: "",
        city: "",
        remarks: "",
        saved: true,
      });
    } else {
      toast("Please fill in all the fields before saving.");
      return;
    }
  };

  const Cancel = (index) => {
    dispatch(cancelRow(index));
  };
  const Edit = (index) => {
    console.log(index);
    dispatch(editRow(index));
  };

  const Delete = (index) => {
    dispatch(deleteRow(index));
  };

  const handelSubmit = () => {
    const unsavedRows = state.rows.filter((row) => row.saved === true);
    if (unsavedRows.length > 0) {
      toast("Please save all rows before submitting.");
      return;
    }
    if (
      state.rows.length !== 0 &&
      (newObj.location === true || newObj.country !== "") &&
      newObj.remarks
    ) {
      toast("Success");
      if (state.editObj) {
        const obj = newObj;
        obj.products = state.rows;
        obj.id = state.editObj.id;
        console.log(obj);
        dispatch({ type: "Update", payload: obj });
        setNewObj({
          location: false,
          country: "",
          remarks: "",
        });
      } else {
        const obj = newObj;
        obj.products = state.rows;
        obj.id = uuidv4();
        console.log(obj);
        dispatch({ type: "Submit", payload: obj });
        setNewObj({
          location: false,
          country: "",
          remarks: "",
        });
      }
      nav("/ReduxList");
    } else {
      toast("Please select either checkbox or country before adding a row");
      return;
    }
  };

  const clear = () => {
    nav("/ReduxList");
  };
  useEffect(() => {
    console.log(state.editObj);
    if (state.editObj) {
      setNewObj({
        ...newObj,
        remarks: state.editObj.remarks,
        country: state.editObj.country,
        location: state.editObj.location,
      });
      if (state.editObj.location) {
        dispatch({
          type: "Checked",
          payload: { flag: state.editObj.location, country: "India" },
        });
      }
      if (state.editObj.country !== "") {
        dispatch({
          type: "Country",
          payload: { flag: true, country: state.editObj.country },
        });
      }
      dispatch({ type: "EditAddRow", payload: state.editObj.products });
    }
  }, []);
  return (
    <div className="first card container">
      <div className="top d-flex justify-content-center">
        <div className="card outer">
          <form className="d-flex justify-content-center">
            <div className="d-flex">
              <label htmlFor="check" className="fw-bold">
                Current location
              </label>
              <input
                type="checkbox"
                checked={newObj.location}
                disabled={state.selectCountry || state.addRowFlag}
                onChange={handleChecked}
                className="me-5 ms-2 "
                name="check"
                id="check"
              />
            </div>
            <div className="d-flex">
              <label htmlFor="country" className="fw-bold">
                Country
              </label>
              <select
                id="country"
                className="me-5 ms-2 "
                required
                value={newObj.country}
                disabled={state.checked || state.addRowFlag}
                onChange={handleCountry}
              >
                <option value="">Select a Country</option>
                {countryData
                  .filter((country) => country.countryName !== "India")
                  .map((country) => (
                    <option
                      key={country.countryName}
                      value={country.countryName}
                    >
                      {country.countryName}
                    </option>
                  ))}
              </select>
            </div>
            <div className="d-flex">
              <label htmlFor="remark" className="fw-bold">
                Remark
              </label>
              <textarea
                type="text"
                className="ms-2 "
                disabled={state.addRowFlag}
                value={newObj.remarks}
                onChange={(e) =>
                  setNewObj({ ...newObj, remarks: e.target.value })
                }
                id="remark"
                name="remark"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex justify-content-end col-11 ">
        {active === "national" ? (
          <button
            type="button"
            className="text-white border-0 rounded-1 mb-4 btn btn-success me-4"
            onClick={add}

          >
            National Row
          </button>
        ) : (
          <button
            type="button"
            className="text-white border-0 rounded-1 mb-4 btn btn-success me-4"
            onClick={add}
            // disabled={state.addRowFlagTwo}
          >
            International Row
          </button>
        )}
      </div>
      <div className="container outer">
        <nav className="navbar  navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li
                  className={`nav-item ${
                    active === "national"
                      ? "active bg-primary text-light "
                      : "text-warning"
                  }`}
                >
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    onClick={(e) => handleTabChange(e, "national")}
                  >
                    National
                  </a>
                </li>
                <li
                  className={`nav-item ${
                    active === "international"
                      ? "active bg-primary text-light "
                      : "text-warning"
                  }`}
                >
                  <a
                    className="nav-link active"
                    href="#"
                    onClick={(e) => handleTabChange(e, "international")}
                  >
                    International
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {active === "international" ? (
       
        <>
         <International data={state.rows} handelSubmit={handelSubmit} handleChange={handleChange} countryData={countryData} Save={Save} Cancel={Cancel} Edit={Edit} Delete={Delete} clear={clear} state={state}/>
          {/* <div>
            <table className="table container outer border-1 mt-5">
              <thead>
                <tr className="table-secondary">
                  <th>S.No</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Remark</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {state.rows &&
                  state.rows.map((res, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        {res.saved ? (
                          <select
                            id="state"
                            name="state"
                            value={res.state}
                            onChange={(e) => handleChange(e, index)}
                            //   disabled={!res.editable && res.readonly}
                          >
                            <option value="">Select a State</option>
                            {countryData
                              .find(
                                (country) =>
                                  country.countryName === state.country
                              )
                              ?.stateData.map((stateData) => (
                                <option
                                  key={stateData.stateName}
                                  value={stateData.stateName}
                                >
                                  {stateData.stateName}
                                </option>
                              ))}
                          </select>
                        ) : (
                          <>{res.state}</>
                        )}
                      </td>
                      <td>
                        {res.saved ? (
                          <select
                            id="city"
                            name="city"
                            value={res.city}
                            onChange={(e) => handleChange(e, index)}
                            //   disabled={!res.editable && res.readonly}
                          >
                            <option value="">Select a City</option>
                            {countryData
                              .find(
                                (country) =>
                                  country.countryName === state.country
                              )
                              ?.stateData.find(
                                (stateData) => stateData.stateName === res.state
                              )
                              ?.city.map((city) => (
                                <option
                                  key={city.cityName}
                                  value={city.cityName}
                                >
                                  {city.cityName}
                                </option>
                              ))}
                          </select>
                        ) : (
                          <>{res.city}</>
                        )}
                      </td>
                      <td>
                        {res.saved ? (
                          <textarea
                            type="text"
                            name="remarks"
                            id="remarks"
                            value={res.remarks}
                            onChange={(e) => handleChange(e, index)}
                            //   disabled={!res.editable && res.readonly}
                          />
                        ) : (
                          <>{res.remarks}</>
                        )}
                      </td>

                      <td>
                        {res.saved ? (
                          <>
                            <button
                              type="submit"
                              className="bg-success rounded text-light mx-2"
                              onClick={() => Save(index)}
                            >
                              Save
                            </button>
                            <button
                              type="submit"
                              className="bg-danger rounded text-light mx-2"
                              onClick={() => Cancel(index)}
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              type="submit"
                              className="bg-primary rounded text-light mx-2"
                              onClick={() => Edit(index)}
                              disabled={state.addRowFlagTwo}
                            >
                              Edit
                            </button>
                            <button
                              type="submit"
                              className="bg-danger rounded text-light mx-2"
                              onClick={() => Delete(index)}
                              disabled={state.addRowFlagTwo}
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-2">
            <div className="d-flex justify-content-center mb-3">
              <button
                type="submit"
                className="rounded fw-bold text-dark border-0 btn btn-warning mx-2"
                onClick={clear}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded fw-bold text-light border-0 btn btn-primary mx-2"
                onClick={handelSubmit}
              >
                Submit
              </button>
            </div>
          </div> */}
        </>
      ) : active === "national" ? (
        <>
        <National  data={state.rows} handelSubmit={handelSubmit} handleChange={handleChange} countryData={countryData} Save={Save} Cancel={Cancel} Edit={Edit} Delete={Delete} clear={clear} state={state} />
        </>
      ):(
        <></>
      )}
      <ToastContainer />
    </div>
  );
};

export default ReduxForm;
