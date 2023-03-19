import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider, AppContext } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';


const CurrencyDropdown = () => {
  const { currency, setCurrency } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
    setCurrency(event.target.value);
  };

  return (
    <select
      className='form-select bg-green text-white'
      value={selectedCurrency}
      onChange={handleCurrencyChange}
      style={{
        backgroundColor: '#44a04a',
        ':hover': { backgroundColor: '#fff' }
      }}
    >
      <option value='$'>{"$ Dollar"}</option>
      <option value='£'>{"£ Pound"}</option>
      <option value='€'>{"€ Euro"}</option>
      <option value='₹'>{"₹ Rupee"}</option>
    </select>
  );
};
  

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm'>
                        <CurrencyDropdown />
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;