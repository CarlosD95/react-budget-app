import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import EditBudget from './EditBudget';

function Budget() {

  const { budget, dispatch } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);

  const handleSaveClick = (value) => {
    dispatch ({
      type: 'SET_BUDGET',
      payload: value,
    });
    setIsEdit(false);
  }


  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      {isEdit ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        <>
          <span>Budget: ${budget}</span>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default Budget;