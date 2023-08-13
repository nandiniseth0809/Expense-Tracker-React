import React from "react";
import styles from "./ExpenseList.module.css";

export default class ExpenseList extends React.Component {
  render() {
    const { expenses, balance } = this.props;
    return (
      <div className={styles.expenseListContainer}>
        <h3>Transactions</h3>
   
          {
            expenses.map((expense,index)=>(  <ul className={styles.transactionList}><li  >{expense.name}</li>
          <li>{expense.number}</li>
          </ul> ))
          }

      </div>
    );
  }
}
