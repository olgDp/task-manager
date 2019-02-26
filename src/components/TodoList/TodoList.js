import React from "react";
import TodoListItem from "../TodoListItem";
import "./TodoList.css";
import PropTypes from "prop-types";

const TodoList = props => {
  const { todos, ...functions } = props;

  const todoItems = todos.map(todo => {
    return (
      <li className="list__item" key={todo.id}>
        <TodoListItem {...todo} {...functions} />
      </li>
    );
  });

  return <ul className="list">{todoItems}</ul>;
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default TodoList;
