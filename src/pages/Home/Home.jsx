// import React from 'react'
// import { FaPaperPlane, FaPlane, FaSeedling } from 'react-icons/fa'
// import { FaRegPaperPlane } from 'react-icons/fa6'

// const Home = () => {
//     const todos = [
//         {
//             id:1,
//             todo:"First todo",
//             isImportant:true,
//             isCompleted:true
//         },
//         {
//             id:2,
//             todo:"Second todo",
//             isImportant:true,
//             isCompleted:true
//         },
//         {
//             id:3,
//             todo:"Third todo",
//             isImportant:true,
//             isCompleted:true
//         },
//     ]

//   return (
//     <div className='min-h-screen max-w-full mt-16 flex flex-col items-center justify-center text-white' >
//         <div className='flex flex-row justify-center items-center w-6/12 h-8'>
//             <input type="text" placeholder='Enter your task' className='w-full h-12 p-4 rounded-l-lg  outline-none' />
//             <button className='h-12 w-12 bg-black flex items-center justify-center rounded-r-lg border-black border-1'><FaPaperPlane/></button>
//         </div>
//         <div className='flex flex-row justify-center items-center w-full max-h-56'>
//             <ul>
//             {todos.map((item)=>(
//                 <li key={item.id}>
//                     <input type="text"  className='p-4 h-12 w-full' placeholder={item.todo} />
//                 </li>
//             ))}
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default Home






import React, { useState } from 'react'
import { FaPaperPlane, FaCheck, FaExclamation, FaRegCheckCircle, FaRegFileExcel } from 'react-icons/fa'

const Home = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "First todo",
      isImportant: false,
      isCompleted: false
    },
    {
      id: 2,
      todo: "Second todo",
      isImportant: false,
      isCompleted: false
    },
    {
      id: 3,
      todo: "Third todo",
      isImportant: false,
      isCompleted: false
    },
  ]);

  const [newTodo, setNewTodo] = useState("");

  // Toggle isCompleted status
  const toggleCompleted = (id) => {
    const updatedTodos = todos.map(item =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(updatedTodos);
  };

  // Toggle isImportant status
  const toggleImportant = (id) => {
    const updatedTodos = todos.map(item =>
      item.id === id ? { ...item, isImportant: !item.isImportant } : item
    );
    setTodos(updatedTodos);
  };

  // Add a new todo
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          todo: newTodo,
          isImportant: false,
          isCompleted: false
        }
      ]);
      setNewTodo(""); // Clear the input field after adding
    }
  };

  return (
    <div className='min-h-screen max-w-full mt-16 flex flex-col items-center justify-start text-white'>
      {/* Input field stays at the top */}
      <div className='relative mt-28 w-6/12 flex flex-row justify-center items-center'>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder='Enter your task'
          className='w-full h-12 p-4 rounded-l-lg outline-none text-black border-2 '
        />
        <button className='h-12 w-12 bg-black flex items-center justify-center rounded-r-lg border-black border-1'
          onClick={addTodo}
        >
          <FaPaperPlane />
        </button>
      </div>

      {/* Scrollable todo list */}
      <div className='flex flex-col items-center w-10/12 max-h-96 overflow-y-auto mt-20 overflow-auto no-scrollbar'>
        <ul className='w-full'>
          {todos.filter((item)=>!item.isCompleted).map((item) => (
            <li key={item.id} className='flex flex-row items-center justify-between p-2 border-b-2'>
              <input
                type="text"
                className={`p-4 h-12 w-8/12 text-black outline-none disabled ${item.isCompleted ? 'line-through' : ''} ${item.isImportant? 'font-extrabold':''}`}
                placeholder={"You're todo appears here"}
                value={item.todo}
                readOnly
              />
              <div className='flex space-x-4'>
                {/* Toggle isImportant */}
                <button
                  onClick={() => toggleImportant(item.id)}
                  className={`text-lg ${item.isImportant ? 'text-red-500' : 'text-gray-500'}`}>
                  {item.isImportant ? <FaExclamation /> : <FaRegFileExcel />}
                </button>

                {/* Toggle isCompleted */}
                <button
                  onClick={() => toggleCompleted(item.id)}
                  className={`text-lg ${item.isCompleted ? 'text-green-500' : 'text-gray-500'}`}>
                  {item.isCompleted ? <FaCheck /> : <FaRegCheckCircle />}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home;
