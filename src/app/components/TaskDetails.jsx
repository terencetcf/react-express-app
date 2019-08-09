import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as mutations from "../store/mutations";

const TaskDetails = ({
  id,
  comments,
  task,
  isComplete,
  groups,
  setTaskCompletion,
  setTaskGroup,
  setTaskName
}) => (
  <div className="row w-50 mx-auto">
    <div className="col">
      <div className="form-group">
        <input
          type="text"
          value={task.name}
          onChange={setTaskName}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <button
          onClick={() => setTaskCompletion(id, !isComplete)}
          className="form-control"
        >
          {isComplete ? "Reopen" : "Complete"}
        </button>
      </div>
      <div className="form-group">
        <select
          onChange={setTaskGroup}
          value={task.group}
          className="form-control"
        >
          {groups.map(group => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
        </select>
      </div>
      <Link to="/dashboard">
        <button className="btn btn-dark">&lt; back</button>
      </Link>
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  let task = state.tasks.find(task => task.id === id);
  let groups = state.groups;

  return {
    id,
    task,
    groups,
    isComplete: task.isComplete
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    setTaskCompletion(id, isComplete) {
      dispatch(mutations.setTaskCompletion(id, isComplete));
    },
    setTaskGroup(e) {
      dispatch(mutations.setTaskGroup(id, e.target.value));
    },
    setTaskName(e) {
      dispatch(mutations.setTaskName(id, e.target.value));
    }
  };
};

export const ConnectedTaskDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDetails);
