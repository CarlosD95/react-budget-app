import React from 'react';

const ViewBudget = ( { budget, handleEditclick }) => {
  return (
    <>
      <span>Budget: ${budget}</span>
      <button
        type='button'
        className='btn btn-primary'
        onClick={handleEditclick}
      >Edit</button>
    </>
  )
}

export default ViewBudget