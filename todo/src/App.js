import TodosList from "./TodosList";
import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //create a todo
  const creatodo = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };
  //Read todos from firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosarray = [];
      querySnapshot.forEach((doc) => {
        todosarray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosarray);
    });
    return () => unsub();
  }, []);
  //update todos in firebase
  const toggleComplete = async (todos) => {
    await updateDoc(doc(db, "todos", todos.id), {
      completed: !todos.completed,
    });
  };
  //delete todos from firebase
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-r from-[#6157ff] to-[#ee49Fd] p-2">
        <div className="w-[600px] bg-slate-50 shadow-lg  rounded my-32 p-4 mx-auto">
          <h1 className="uppercase text-center text-bold text-4xl">Todo app</h1>
          <form
            onSubmit={creatodo}
            className="p-2 flex justify-center items-center my-4"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className="text-xl p-2 outline-none border-none rounded w-full"
              placeholder="Add Task"
            />
            <button className="bg-[#6157ff] rounded p-2 ml-4 text-gray-100">
              ADD
            </button>
          </form>
          <ul>
            {todos.map((todo, indx) => (
              <TodosList
                key={indx}
                todos={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            ))}
          </ul>
          {todos.length < 1 ? null : (
            <p className="text-center py-2">You have {todos.length} todos</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
