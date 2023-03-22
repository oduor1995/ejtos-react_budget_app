import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  const increaseAllocation = () => {
    const expense = {
      name: props.name,
      cost: 14 // convert 10 to USD, assuming the GBP to USD exchange rate is 1.4
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  const decreaseAllocation = () => {
    const expense = {
      name: props.name,
      cost: -14, // convert 10 to USD, assuming the GBP to USD exchange rate is 1.4
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency === 'GBP' ? `£${props.cost}` : `$${(props.cost / 1.4).toFixed(2)}`}
      </td>
      <td>
        <button className="btn btn-sm rounded-circle bg-success text-white" onClick={increaseAllocation}>
          <span className="visually-hidden">Increase by 10</span>
          +
        </button>
      </td>
      <td>
        <button className="btn btn-sm rounded-circle bg-danger text-white" onClick={decreaseAllocation}>
          <span className="visually-hidden">Decrease by 10</span>
          -
        </button>
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;



