import React, { Component, Fragment } from "react";
import { uuid } from "uuidv4";

import Form from "./Form";
import List from "./List";

/* eventually refactor this class component to a function component
that uses hooks to manage state */
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          description: "add more features to this shitty app",
          id: uuid(),
          done: false,
          timeCreated: new Date()
        }
      ],
      newTodo: ""
    };
  }

  updateNewTodo = value => this.setState({ newTodo: value });

  addNewTodo = () => {
    const newTodo = {
      description: this.state.newTodo,
      id: uuid(),
      done: false,
      timeCreated: new Date()
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      newTodo: ""
    });
  };

  toggleDone = id => {
    const todos = this.state.todos.map(item => {
      if (item.id === id) {
        /* this sets the property of done to the opposite of what it currently is */
        item.done = !item.done;
      }
      return item;
    });
    this.setState({ todos });
  };

  render() {
    return (
      <Fragment>
        <h2>Todo</h2>
        <Form
          newTodo={this.state.newTodo}
          updateNewTodo={this.updateNewTodo}
          addNewTodo={this.addNewTodo}
        />
        <List todos={this.state.todos} toggleDone={this.toggleDone} />
      </Fragment>
    );
  }
}
