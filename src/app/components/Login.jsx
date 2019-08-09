import React from "react";
import { connect } from "react-redux";
import * as mutations from "../store/mutations";

const LoginComponent = ({ authenticateUser, authenticated }) => {
  return (
    <div class="row w-50 mx-auto mt-4 border p-5 rounded bg-light">
      <div class="col">
        <h2 className="display4 text-center">Login</h2>
        <form onSubmit={authenticateUser}>
          <div className="form-group">
            <input
              type="text"
              placeholder="username"
              name="username"
              defaultValue="Dev"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="password"
              name="password"
              defaultValue="TUPLES"
              className="form-control"
            />
          </div>
          {authenticated === mutations.NOT_AUTHENTICATED ? (
            <p>Invalid login</p>
          ) : null}
          <div className="form-group">
            <button type="submit" class="btn btn-primary w-100">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ session }) => ({
  authenticated: session.authenticated
});

const mapDispatchToProps = dispatch => ({
  authenticateUser(e) {
    e.preventDefault();
    let username = e.target["username"].value;
    let password = e.target["password"].value;
    dispatch(mutations.requestAuthenticateUser(username, password));
  }
});

export const ConnectedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
