import React, { Component } from "react";
import "./AddTodo.css";
import { PropTypes } from "prop-types";

class AddTodo extends Component {
  state = {
    value: ""
  };

  onInput = e => {
    this.setState({
      value: e.target.value
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();

    if (this.state.value !== "") {
      this.props.onAdd(this.state.value);
      this.setState({
        value: ""
      });
    }
  };

  render() {
    const { value } = this.state;
    return (
      <form className="AddTodo" onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          placeholder="Add new task"
          value={value}
          onChange={this.onInput}
        />{" "}
        <button type="submit"> Add </button>{" "}
      </form>
    );
  }
}

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default AddTodo;
