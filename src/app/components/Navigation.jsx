import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = () => (
  <h1 className="display4 text-center mt-3">My ToDoList</h1>
);

export const ConnectedNavigation = connect(state => state)(Navigation);
