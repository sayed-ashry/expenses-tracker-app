import { Fragment } from 'react';

const DUMMY_EXPENSES = [
  {
    id: Math.random(),
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: Math.random(),
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: Math.random(),
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: Math.random(),
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  return (
    <Fragment>
      <h1>Expenses List</h1>
      <ul>
        {DUMMY_EXPENSES.map(el => (
          <li>{el.title}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default App;
