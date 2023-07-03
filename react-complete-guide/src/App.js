import Expenses from "./components/Expenses/Expenses";

const App = () =>{
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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
