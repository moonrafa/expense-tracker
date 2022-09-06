import React from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'

export const HistoryCard = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)
  const sign = transaction.amount < 0 ? '-' : '+'
  const border = transaction.amount < 0 ? 'minus' : 'plus'
  return (
    <>
      <li className={border}>
        {transaction.text}
        <span>
          {sign}R$ {Math.abs(transaction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </li>
    </>
  )
}
