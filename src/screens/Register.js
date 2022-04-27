import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <form className="form w-100">
      <div className="col-sm-12 col-md-6 col-log-4 col-xl-4 m-3 p-3 bg-info">
        <div className="form-group m-2">
          <lable htmlFor="username">username</lable>
          <input
            type="username"
            className="form-control"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group m-2">
          <lable htmlFor="email">email</lable>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group m-2">
          <lable htmlFor="password">password</lable>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="btn btn-primary m-2">
          Creat account
        </button>
        <div>
          I already have an account
          <Link to="/" className="nav-link">
            Login
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Register;
