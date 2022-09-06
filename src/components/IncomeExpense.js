import React from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext)
  const values = transactions.map(transaction => transaction.amount)
  const income = values
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  const expense = (
    values.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2)
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+R$ {income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-R$ {expense}</p>
      </div>
    </div>
  )
}
