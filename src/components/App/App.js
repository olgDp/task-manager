import React, { Component } from "react";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far, faCircle as circle } from "@fortawesome/free-regular-svg-icons";
import {
  fas,
  faSave,
  faCircle,
  faTrashAlt,
  faPen,
  faCheckCircle,
  faExclamation
} from "@fortawesome/free-solid-svg-icons";

import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import Filter from "../Filter";
import TodoList from "../TodoList";
import AddTodo from "../AddTodo";

library.add(
  fas,
  faSave,
  faCircle,
  faTrashAlt,
  faPen,
  faCheckCircle,
  faExclamation
);
library.add(far, circle);

// console.log(fas);

class App extends Component {
  state = {
    todoData: [
      this.createNewTask("Drink coffee"),
      this.createNewTask("Make react app"),
      this.createNewTask("Chill and relax"),
      this.createNewTask("Sleep"),
      this.createNewTask("Eat")
    ],
    term: "",
    filterBy: "all"
  };

  createNewTask(text) {
    return {
      label: text,
      important: false,
      done: false,
      id: Math.floor(
        Math.random() * 1000 + Math.random() * 100 + Math.random() * 10
      )
    };
  }

  onDelete = itemId => {
    this.setState(state => {
      const todoData = state.todoData.filter(({ id }) => id !== itemId);
      return {
        todoData
      };
    });
  };

  onToggle = (itemId, key) => {
    this.setState(state => {
      const todoData = state.todoData.map(task => {
        if (task.id === itemId) {
          task[key] = !task[key];
        }
        return task;
      });

      return {
        todoData
      };
    });
  };

  onEdit = (itemId, text) => {
    if (text !== "") {
      this.setState(state => {
        const todos = state.todoData.map(todo => {
          if (todo.id === itemId) {
            todo.label = text;
          }

          return todo;
        });

        return { todos };
      });
    }
  };

  onAdd = label => {
    this.setState(state => {
      const newTask = this.createNewTask(label);
      const todoData = [...state.todoData, newTask];

      return {
        todoData
      };
    });
  };

  onFilterChange = filterBy => {
    this.setState({
      filterBy
    });
  };

  filter = (todos, filter) => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter(({ done }) => done !== true);
      case "done":
        return todos.filter(({ done }) => done === true);
      default:
        return todos;
    }
  };

  onSearchChange = text => {
    this.setState({
      term: text
    });
  };

  search = text => {
    const { todoData } = this.state;

    if (!text) {
      return todoData;
    }

    return todoData.filter(
      ({ label }) => label.toLowerCase().indexOf(text.toLowerCase()) !== -1
    );
  };

  render() {
    const { todoData, filterBy, term } = this.state;
    const visibleItems = this.filter(this.search(term), filterBy);

    return (
      <div className="App">
        <AppHeader todos={todoData} />
        <SearchPanel onSearchChange={this.onSearchChange} />
        <Filter filterBy={filterBy} onFilterChange={this.onFilterChange} />
        <TodoList
          todos={visibleItems}
          onDelete={this.onDelete}
          onToggle={this.onToggle}
          onEdit={this.onEdit}
        />
        <AddTodo onAdd={this.onAdd} />
      </div>
    );
  }
}

export default App;
