import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {

  const { expenses } = useContext(AppContext);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  const handleChange = (e) => {
    const searchResults = expenses.filter((filteredExpense) => filteredExpense.name.toLowerCase().includes(e.target.value));
    setFilteredExpenses(searchResults);
  }
  

  return (
    <>
      <input
        type='text'
        className='form-control mb-2 mr-sm-2'
        placeHolder='type to search...'
        onChange={handleChange}
      />
      <ul className='list-group mt-3 mb-3'>
        {filteredExpenses.map((e) => (
          <ExpenseItem 
            id={e.id}
            name={e.name}
            cost={e.cost}
          />
        ))}
      </ul>
    </>
  )
}

export default ExpenseList;