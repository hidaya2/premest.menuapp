import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <form className="form" justify-content>
      <div className="col-sm-12 col-md-6 col-log-4 col-xl-4 m-3 p-3 bg-info">
        <div className="form-group">
          <lable htmlFor="email">email</lable>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <lable htmlFor="password">password</lable>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="btn btn-primary m-2">
          Login
        </button>
        <div className="row">
          I don't have an account
          <Link to="/register" className="nav-Link">
            Register
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Login;
