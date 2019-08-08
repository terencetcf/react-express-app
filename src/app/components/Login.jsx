import React from "react";
import { connect } from "react-redux";
import * as mutations from "../store/mutations";

const LoginComponent = ({ authenticateUser, authenticated }) => {
  return (
    <div>
      <h2>Please Login</h2>
      <form onSubmit={authenticateUser}>
        <div>
          <input
            type="text"
            placeholder="username"
            name="username"
            defaultValue="Dev"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            name="password"
            defaultValue="TUPLES"
          />
        </div>
        {authenticated === mutations.NOT_AUTHENTICATED ? (
          <p>Invalid login</p>
        ) : null}
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
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
