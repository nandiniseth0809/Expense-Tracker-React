import React, { Component } from "react";
import styles from "./ExpenseForm.module.css";

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: 0
    };
  }

  setName = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  setNumber = (e) => {
    this.setState({
      number: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddExpense(this.state.name, this.state.number);
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <h3>Add new transaction</h3>
        <label htmlFor="expenseText">Text</label>
        <input
          id="expenseText"
          className={styles.input}
          type="text"
          placeholder="Enter text..."
          required
          value={this.state.name}
          onChange={this.setName}
        />
        <div>
          <label htmlFor="expenseAmount">Amount</label>
          <div>(negative - expense, positive - income)</div>
        </div>
        <input
          className={styles.input}
          id="expenseAmount"
          type="number"
          placeholder="Enter amount..."
          value={this.state.number}
          onChange={this.setNumber}
          required
        />
        <button className={styles.submitBtn} type="submit">Add Transaction</button>
      </form>
    );
  }
}
