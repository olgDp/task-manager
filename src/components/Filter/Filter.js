import React, { Component } from "react";
import "./Filter.css";
import { PropTypes } from "prop-types";

class Filter extends Component {
  render() {
    const { onFilterChange, filterBy } = this.props;

    const labels = [
      { name: "all", label: "All tasks" },
      { name: "active", label: "Active" },
      { name: "done", label: "Done" }
    ];

    const buttons = labels.map(({ name, label }) => {
      const btnActive = name === filterBy ? "btn active" : "btn";

      return (
        <button
          className={btnActive}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="Filter">{buttons}</div>;
  }
}

Filter.propTypes = {
  filterBy: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default Filter;
