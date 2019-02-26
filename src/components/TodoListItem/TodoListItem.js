import React, { Component } from "react";
import "./TodoListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

class TodoListItem extends Component {
  state = {
    editing: false,
    text: ""
  };

  editIconHandler = () => {
    this.setState(state => {
      return {
        editing: !state.editing
      };
    });
  };

  onInputHandler = e => {
    const text = e.target.value;

    this.setState({
      text
    });
  };

  onSubmitHandler = (e, id, text) => {
    e.preventDefault();

    this.props.onEdit(id, text);

    this.setState(state => {
      return {
        editing: !state.editing
      };
    });
  };

  render() {
    const { editing, text } = this.state;
    const { label, id, done, important, onDelete, onToggle } = this.props;

    let classNames = ["TodoListItem"];
    if (done) {
      classNames.push("done");
    }

    if (important) {
      classNames.push("important");
    }

    const iconStyle = ["far", "circle"];

    if (done) {
      iconStyle[0] = "fas";
      iconStyle[1] = "check-circle";
    }

    const item = !editing ? (
      <div className={classNames.join(" ")}>
        <span onClick={() => onToggle(id, "done")}>{label}</span>
        <div className="icons">
          <FontAwesomeIcon
            className="svgIcon"
            style={{ color: "red" }}
            icon={["fas", "trash-alt"]}
            onClick={() => onDelete(id)}
          />
          <FontAwesomeIcon
            className="svgIcon"
            style={{ color: "lightgreen" }}
            icon={["fas", "pen"]}
            onClick={this.editIconHandler}
          />
          <FontAwesomeIcon
            className="svgIcon"
            style={{ color: "#0ebef5" }}
            icon={["fas", "exclamation"]}
            onClick={() => onToggle(id, "important")}
          />
          <FontAwesomeIcon
            className="svgIcon"
            style={{
              width: "24px",
              height: "24px",
              opacity: "1",
              color: "lightgreen"
            }}
            icon={iconStyle}
            onClick={() => onToggle(id, "done")}
          />
        </div>
      </div>
    ) : (
      <form
        className="TodoItemForm"
        onSubmit={e => this.onSubmitHandler(e, id, text)}
      >
        <input
          type="text"
          placeholder="type new text here..."
          value={text}
          onChange={this.onInputHandler}
        />
        <button type="submit">
          <FontAwesomeIcon
            className="svgIcon"
            style={{
              width: "24px",
              height: "24px",
              opacity: "1",
              color: "lightgreen"
            }}
            icon={["fas", "save"]}
          />
        </button>
      </form>
    );

    return item;
  }
}

// const TodoListItem = ({ label, id, done, important, onDelete, onToggle }) => {
//   let classNames = ["TodoListItem"];
//   if (done) {
//     classNames.push("done");
//   }

//   if (important) {
//     classNames.push("important");
//   }

//   const iconStyle = ["far", "circle"];

//   if (done) {
//     iconStyle[0] = "fas";
//     iconStyle[1] = "check-circle";
//   }

//   return (
//     <div className={classNames.join(" ")}>
//       <span onClick={() => onToggle(id, "done")}>{label}</span>
//       <div className="icons">
//         <FontAwesomeIcon
//           className="svgIcon"
//           style={{ color: "red" }}
//           icon={["fas", "trash-alt"]}
//           onClick={() => onDelete(id)}
//         />
//         <FontAwesomeIcon
//           className="svgIcon"
//           style={{ color: "lightgreen" }}
//           icon={["fas", "pen"]}
//         />
//         <FontAwesomeIcon
//           className="svgIcon"
//           style={{ color: "#0ebef5" }}
//           icon={["fas", "exclamation"]}
//           onClick={() => onToggle(id, "important")}
//         />
//         <FontAwesomeIcon
//           className="svgIcon"
//           style={{
//             width: "24px",
//             height: "24px",
//             opacity: "1",
//             color: "lightgreen"
//           }}
//           icon={iconStyle}
//           onClick={() => onToggle(id, "done")}
//         />
//       </div>
//     </div>
//   );
// };

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
  important: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default TodoListItem;
