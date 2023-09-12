import React from 'react';
import { AppProvider } from './context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';

function App() {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3 text-center">My Budget Planner</h1>
        <div className='row mt-3'>
          <div className="col-sm">
            <Budget/>
          </div>
          <div className="col-sm">
            <Remaining/>
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className='row'>
          <div className='col-sm'>
            <ExpenseList/>
          </div>
        </div>
        <h3 className="mt-3">Add Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <AddExpense/>
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
