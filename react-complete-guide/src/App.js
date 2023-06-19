import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 94.12,
      date: new Date(2023, 2, 28),
    },
    {
      id: "e1",
      title: "Bike Insurance",
      amount: 194.12,
      date: new Date(2023, 12, 28),
    },
    {
      id: "e3",
      title: "Life Insurance",
      amount: 944.12,
      date: new Date(2023, 5, 28),
    },
    {
      id: "e4",
      title: "Book Insurance",
      amount: 4.12,
      date: new Date(2023, 9, 28),
    },
  ];
  return (
    <div>
      <h1>Let's Get Started!</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
