import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const { id } = useParams();
  const [fname, setfName] = useState();
  const [sname, setsName] = useState();
  const [email, setEmail] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser/" + id)
      .then((result) => {
        console.log(result);
        setfName(result.data.fname);
        setsName(result.data.sname);
        setEmail(result.data.email);
      })
      .catch((err) => console.log(err));
  }, []);

  const update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateUser/" + id, { fname, sname, email })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-light d-flex justify-content-center align-items-center vh-100">
      <div className="w-50 bg-white rounded p-3 shadow-sm">
        <h3>Update User</h3>
        <form onSubmit={update}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your First Name"
              value={fname}
              onChange={(e) => setfName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="pass"
              placeholder="Enter Your Last Name"
              value={sname}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary me-2">
            Save Changes
          </button>
          <Link to="/" className="btn btn-outline-primary">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;
