import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItem from "./components/TodoItem";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handelNewItem = (itemname, itemdueDate) => {
    console.log(`The new item added ${itemname},date:${itemdueDate}`);

    const newTodoItems = [
      ...todoItems,
      { name: itemname, dueDate: itemdueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handelDeleteButton = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handelNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onClickDelete={handelDeleteButton}
      ></TodoItems>
    </center>
  );
}

export default App;
