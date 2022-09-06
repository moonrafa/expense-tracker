import React from 'react'
import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { uid } from 'uid/secure'

export const Transaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext)
  const onSubmit = e => {
    e.preventDefault()
    const newTransaction = {
      id: uid(9),
      text,
      amount: +amount
    }
    addTransaction(newTransaction)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description:</label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Description"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
