import React, { Component } from "react";
import { connect } from "react-redux";
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo
} from "../actions/todos";
import Loader from "./Loader";
import List from "./List";

class Todos extends Component {
  handleAddItem = e => {
    e.preventDefault();
    const name = this.input.value;
    this.props.dispatch(handleAddTodo(name, () => (this.input.value = "")));
  };

  removeItem = todo => {
    this.props.dispatch(handleDeleteTodo(todo));
  };

  toggleItem = id => {
    //first we update the store for instant UI feedback
    this.props.dispatch(handleToggleTodo(id));
  };

  render() {
    const { todos, isLoading } = this.props;
    const listItems = isLoading ? (
      <Loader />
    ) : (
      <List
        toggleItem={this.toggleItem}
        removeItem={this.removeItem}
        items={todos}
      />
    );

    return (
      <div className="row">
        <div className="col-12">
          <h2>Todos List</h2>
        </div>
        <div className="col-8">
          <input
            className="form-control"
            id="todo"
            type="text"
            placeholder="Add Todo"
            ref={input => (this.input = input)}
          />
        </div>
        <div className="col-4">
          <button
            id="todoBtn"
            className="btn btn-primary"
            onClick={this.handleAddItem}
          >
            Add Todo
          </button>
        </div>
        <div className="col-12">{listItems}</div>
      </div>
    );
  }
}

/**
 * Export connected component
 */
export default connect(state => ({
  todos: state.todos,
  loading: state.loading
}))(Todos);
