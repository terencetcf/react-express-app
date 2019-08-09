import React from "react";
import { connect } from "react-redux";
import { requestTaskCreation } from "../store/mutations";
import { Link } from "react-router-dom";

const getClassNameByGroupID = groupID => {
  switch (groupID) {
    case "G1":
      return "info";
    case "G2":
      return "primary";
    default:
      return "success";
  }
};

export const TaskList = ({ tasks, name, id, createNewTask }) => (
  <>
    <div className="list-group mb-5">
      <div className={`list-group-item bg-${getClassNameByGroupID(id)}`}>
        {name}

        <button
          className="btn btn-warning float-right"
          onClick={() => createNewTask(id)}
        >
          New Task
        </button>
      </div>
      {tasks.map(task => (
        <Link className="list-group-item" key={task.id} to={`/task/${task.id}`}>
          <>{task.name}</>
        </Link>
      ))}
    </div>
  </>
);

const mapStateToProps = (state, ownProps) => {
  let groupID = ownProps.id;
  return {
    name: ownProps.name,
    id: groupID,
    tasks: state.tasks.filter(task => task.group === groupID)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNewTask(id) {
      dispatch(requestTaskCreation(id));
    }
  };
};

export const ConnectedTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
