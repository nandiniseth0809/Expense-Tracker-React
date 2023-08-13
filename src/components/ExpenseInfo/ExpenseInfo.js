import React from "react";
import styles from "./ExpenseInfo.module.css";

export default class ExpenseInfo extends React.Component {
  render() {
    const { expenses, balance, totalProfit,totalExpense} = this.props;

    return (
      <div className={styles.expenseInfoContainer}>
        <div className={styles.balance}>
          <h4>YOUR BALANCE</h4>
          <h1>${balance.toFixed(2)}</h1>
        </div>
        <div className={styles.incomeExpenseContainer}>
          <div>
            <h4>Income</h4>
            <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
              +${totalProfit.toFixed(2)}
            </p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
              -${totalExpense.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

