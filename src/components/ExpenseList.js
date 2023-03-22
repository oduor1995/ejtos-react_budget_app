import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses, currency } = useContext(AppContext);

    const handleIncrease = (id) => {
        // logic to increase expense cost by 10
    };

    const handleDecrease = (id) => {
        // logic to decrease expense cost by 10
    };

    const handleDelete = (id) => {
        // logic to delete expense by id
    };

    return (
        <table className='table'>
            <thead className="thead-light">
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">{`Allocated Budget (${currency})`}</th>
                    <th scope="col">Increase by 10</th>
                    <th scope="col">Decrease by 10</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <ExpenseItem
                        id={expense.id}
                        key={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                        currency={currency}
                        handleIncrease={() => handleIncrease(expense.id)}
                        handleDecrease={() => handleDecrease(expense.id)}
                        handleDelete={() => handleDelete(expense.id)}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;

