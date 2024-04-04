import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [fname, setfName] = useState();
  const [sname, setsName] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUser", { fname, sname, email })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-light d-flex justify-content-center align-items-center vh-100">
      <div className="w-50 bg-white rounded p-3 shadow-sm">
        <h3>Create User</h3>
        <form onSubmit={Submit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your First Name"
              onChange={(e) => setfName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="sname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="pass"
              placeholder="Enter last name"
              onChange={(e) => setsName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary me-2">
            Submit
          </button>
          <Link to="/" className="btn btn-outline-primary">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Create;
