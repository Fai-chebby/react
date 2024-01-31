//import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Message from "./components/message";
import Prof from "./components/Prof";
import ExpenseItem from "./Expensecomponent/ExpenseItem";
function App() {
  return (
    <div className="App">
      <Hello />
      <Message messagecontent="the best and blessed" />
      <Prof name=" the best" />
      <Prof name=" blessed" />
      <ExpenseItem />
    </div>
  );
}

export default App;
