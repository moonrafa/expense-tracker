import React, { useContext } from 'react'
import { HistoryCard } from './HistoryCard'
import { GlobalContext } from '../context/GlobalState'

export const History = () => {
  const { transactions } = useContext(GlobalContext)
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <HistoryCard transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  )
}
