import React, { Component } from "react";
import "./SearchPanel.css";
import { PropTypes } from "prop-types";

export default class SearchPanel extends Component {
  state = {
    value: ""
  };

  onChangeHandler = e => {
    const text = e.target.value;
    this.setState({
      value: text
    });
    this.props.onSearchChange(text);
  };

  render() {
    return (
      <input
        type="text"
        className="search"
        placeholder="Type here to search"
        value={this.state.value}
        onChange={this.onChangeHandler}
      />
    );
  }
}

SearchPanel.propTypes = {
  onSearchChange: PropTypes.func.isRequired
};
