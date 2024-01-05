import React, { Component } from "react";
import { API } from "../constants/Url";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const withNavigation = (ClassList) => {
  return (props) => <ClassList {...props} navigate={useNavigate()} />;
};

class ClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }
  componentDidMount() {
    this.link();
  }

  async link() {
    try {
      const res = await axios.get(API);
      this.setState({ array: res.data });
    } catch (error) {
      console.error(error);
    }
  }

   Edit=async(id)=> {
    this.props.navigate(`/classform/${id}`);
  }

  async Delete(index, id) {
    try {
      await axios.delete(API + id);
      this.setState((prevState) => ({
        array: prevState.array.filter((val, i) => i !== index),
      }));
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { array } = this.state;
    return (
      <div>
        {this.props.props}
        <h1 className="text-dark mt-5">STUDENTLIST</h1>
        <div className="table1">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="table-info">
                  SI.NO
                </th>
                <th scope="col" className="table-info">
                  EMPLOYEE NAME
                </th>
                <th scope="col" className="table-info">
                  EMAIL
                </th>
                <th scope="col" className="table-info">
                  EMPLOYEE ID
                </th>
                <th scope="col" className="table-info">
                  JOIN DATE
                </th>
                <th scope="col" className="table-info">
                  ATTENDANCE
                </th>
                <th scope="col" className="table-info">
                  JOB
                </th>
                <th scope="col" className="table-info">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {array.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.number}</td>
                  <td>{data.date}</td>
                  <td>{data.attendance}</td>
                  <td>{data.job}</td>
                  <td>
                    <button
                      className="rounded-2 border-0 bg-primary text-light"
                      onClick={() => this.Edit(data.id)}
                    >
                      Edit
                    </button>{" "}
                    <button
                      className="rounded-2  border-0 bg-danger text-light"
                      onClick={() => this.Delete(index, data.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withNavigation(ClassList);
