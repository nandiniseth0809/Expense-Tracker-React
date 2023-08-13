import React from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      balance: 0,
    };
  }

  addExpenseHandler = (name, number) => {
    const newExpense = {
      name: name,
      number: number,
    };

    this.setState((prevState) => ({
      expenses: [...prevState.expenses, newExpense],
      balance: prevState.balance + Number(number),
    }));
  };

  render() {
    const { expenses, balance } = this.state;
    const totalProfit = expenses
    .filter(expense => expense.number > 0)
    .reduce((total, expense) => total + Number(expense.number), 0);

  const totalExpense = expenses
    .filter(expense => expense.number < 0)
    .reduce((total, expense) => total - Number(expense.number), 0);
    return (
      <>
        <h2 className="mainHeading">Expense Tracker</h2>
        <div className="App">
          <ExpenseForm onAddExpense={this.addExpenseHandler} />
          <div className="expenseContainer">
            <ExpenseInfo expenses={expenses} balance={balance} totalProfit={totalProfit} totalExpense={totalExpense} />
            <ExpenseList expenses={expenses} />
          </div>
        </div>
      </>
    );
  }
}
