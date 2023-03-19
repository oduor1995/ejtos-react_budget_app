import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const { expenses, budget, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const remaining = budget - totalExpenses;
  let currencySymbol = '';

  switch (currency) {
    case '$':
      currencySymbol = '$';
      break;
    case '£':
      currencySymbol = '£';
      break;
    case '€':
      currencySymbol = '€';
      break;
    case '₹':
      currencySymbol = '₹';
      break;
    default:
      currencySymbol = '';
      break;
  }

  const alertType = remaining < 0 ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: {currencySymbol}{Math.abs(remaining)}</span>
    </div>
  );
};

export default Remaining;
