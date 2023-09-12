import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = ({ name, cost, id }) => {
  
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch ({
      type: 'DELETE_EXPENSE',
      payload: id,
    });
  };

  return (
    <li className='list-group-item d-flex justify-content-between '>
      {name}
      <div>
        <span className='badge rounded-pill text-bg-primary mr-3 p-2 fs-6'> ${cost}</span>
        <TiDelete cursor='pointer' size='2em' onClick={handleDeleteExpense} />
      </div>
    </li>
  );
}

export default ExpenseItem
