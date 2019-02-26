import React from "react";
import "./AppHeader.css";
import { PropTypes } from "prop-types";

const AppHeader = ({ todos }) => {
  const done = todos.reduce((total, current) => {
    if (current.done === true) {
      total = total + 1;
    }
    return total;
  }, 0);

  const todo = todos.length - done;

  return (
    <div className="AppHeader">
      <h1>Task manager</h1>
      <span>
        {todo} more to do, {done} done
      </span>
    </div>
  );
};

AppHeader.propTypes = {
  todos: PropTypes.array.isRequired
};

export default AppHeader;
