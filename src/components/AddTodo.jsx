import { useRef } from "react";
import { MdOutlineAdd } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handelAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handelAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <MdOutlineAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

// using useState and form concept

// function AddTodo({ onNewItem }) {
//   const [newName, setNewName] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const noOfUpdate = useRef(0);

//   const handelItemName = (event) => {
//     setNewName(event.target.value);
//     noOfUpdate.current += 1;
//   };

//   const handelDueDate = (event) => {
//     setDueDate(event.target.value);
//     console.log(`No of Update is : ${noOfUpdate.current}`);
//   };

//   const handelAddButtonClicked = (event) => {
//     event.preventDefault();
//     onNewItem(newName, dueDate);
//     setDueDate("");
//     setNewName("");
//   };

//   return (
//     <div className="container text-center">
//       <form className="row kg-row" onSubmit={handelAddButtonClicked}>
//         <div className="col-6">
//           <input
//             type="text"
//             placeholder="Enter Todo Here"
//             onChange={handelItemName}
//             value={newName}
//           />
//         </div>
//         <div className="col-4">
//           <input type="date" onChange={handelDueDate} value={dueDate} />
//         </div>
//         <div className="col-2">
//           <button type="submit" className="btn btn-success kg-button">
//             <MdOutlineAdd />
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddTodo;
