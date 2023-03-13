import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [editMode, setEditMode] = useState(false);
  const [newBudget, setNewBudget] = useState(budget);

  const handleIncrease = () => {
    setNewBudget(prevBudget => {
      const increasedBudget = prevBudget + 10;
      if (increasedBudget > 20000) {
        alert('Budget cannot exceed 20000!');
        return prevBudget;
      } else {
        return increasedBudget;
      }
    });
  };

  const handleDecrease = () => {
    setNewBudget(prevBudget => prevBudget - 10);
  };

  const handleSave = () => {
    if (newBudget > 20000) {
      alert('Budget cannot exceed 20000!');
    } else {
      dispatch({ type: 'SET_BUDGET', payload: newBudget });
    }
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
    setNewBudget(budget);
  };

  return (
    <div className="alert alert-secondary">
      {editMode ? (
        <>
          <input
            type="number"
            value={newBudget}
            onChange={(e) => setNewBudget(parseInt(e.target.value))}
            max="20000"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span>Budget: £{budget}</span>
          <button onClick={() => setEditMode(true)}>Edit</button>
          <button onClick={handleIncrease}>Increase</button>
          <button onClick={handleDecrease}>Decrease</button>
        </>
      )}
    </div>
  );
};

export default Budget;







