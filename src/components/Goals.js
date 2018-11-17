import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddGoal, handleDeleteGoal } from "../actions/goals";
import List from "./List";
import Loader from "./Loader";

class Goals extends Component {
  handleAddItem = e => {
    e.preventDefault();
    const name = this.input.value;
    this.props.dispatch(handleAddGoal(name, () => (this.input.value = "")));
  };

  removeItem = goal => {
    this.props.dispatch(handleDeleteGoal(goal.id));
  };

  render() {
    const { goals, isLoading } = this.props;
    const listItems = isLoading ? (
      <Loader />
    ) : (
      <List removeItem={this.removeItem} items={goals} />
    );

    return (
      <div className="row">
        <div className="col-12">
          <h2>Goals List</h2>
        </div>
        <div className="col-8">
          <input
            className="form-control"
            id="goal"
            name="name"
            type="text"
            placeholder="Add Goal"
            ref={input => (this.input = input)}
          />
        </div>
        <div className="col-4">
          <button
            id="goalBtn"
            className="btn btn-primary"
            onClick={this.handleAddItem}
          >
            Add Goal
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
  goals: state.goals,
  loading: state.loading
}))(Goals);
