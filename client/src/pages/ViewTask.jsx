// import React from 'react'
// import { useState } from 'react'
// import Navigation from '../components/Navigation';
// export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// function ViewTask() {
//   const [task,setTask] = useState({tId:null,name:null,date:null})
//   const [modalVisible, setModalVisible] = useState(false);
//       const [modalContent, setModalContent] = useState("");
//   const viewTask = async(e)=>{
//     try{
//       e.preventDefault()
//       const taskID = document.querySelector("#taskID").value
//       const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/view-task/${taskID}`,{
//         method:"GET",
//         headers:{
//           "content-type":"application/json"
//         }
//       })
//       const data = await res.json()
//       console.log(data);
      
//       if(data.status === 200){
//         setTask(data.obj)
//       }
//       else{
//         throw new Error
//       }
      
//     }
//     catch(err){
//       setModalContent("Task does not exist");
//         setModalVisible(true);    
      
//     }
//   }
//   const closeModal = () => {
//       setModalVisible(false);
//       setModalContent("");
//     };
//   return (
//     <div>
//       <Navigation />
//       <div className="view_task todo_btn">
//      {task.tId!==null && task.name!==null && task.date!==null ? (
//           <div className="view_task_by_id  view_all_tasks_card">
//             <p>Task ID: {task.tId}</p>
//             <p>Task Name: {task.name}</p>
//             <p>Task Date: {task.date}</p>
//           </div>
//         ) : (
//           <div className="empty_div"></div>
//         )}
//         <form onSubmit={viewTask}>
//           <label>
//             ID:
//             <input id="taskID" />
//           </label>
//           <button type="submit">View Task</button>
//         </form>
//         {modalVisible && (
//           <div className="modal">
//             <div className="modal-content">
//               <span className="close" onClick={closeModal}>
//                 &times;
//               </span>
//               <p>{modalContent}</p>
//             </div>
//           </div>
//         )}
//     </div>
//     </div>
//   )
// }

// export default ViewTask

import React from 'react'
import { useState } from 'react'
import Navigation from '../components/Navigation';
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ViewTask() {
  const [task, setTask] = useState({ tId: null, name: null, date: null });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const viewTask = async (e) => {
    try {
      e.preventDefault();
      const taskID = document.querySelector("#taskID").value;
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/view-task/${taskID}`, {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      });
      const data = await res.json();
      if (data.status === 200) {
        setTask(data.obj);
      } else {
        throw new Error();
      }
    } catch (err) {
      setModalContent("Task does not exist");
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalContent("");
  };

  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center py-10">
        <div className="w-full max-w-md">
          
          <form onSubmit={viewTask} className="bg-white dark:bg-gray-800 shadow-md rounded-lg px-8 pt-6 pb-8 mt-6 mb-4 transition-colors duration-300">
            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
              ID:
              <input
                id="taskID"
                className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-100 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                autoComplete="off"
              />
            </label>
            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
            >
              View Task
            </button>
          </form>
          {task.tId !== null && task.name !== null && task.date !== null ? (
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mt-8 mb-6 transition-colors duration-300">
              <p className="text-gray-800 dark:text-gray-100 font-semibold mb-2">Task ID: <span className="font-normal">{task.tId}</span></p>
              <p className="text-gray-800 dark:text-gray-100 font-semibold mb-2">Task Name: <span className="font-normal">{task.name}</span></p>
              <p className="text-gray-800 dark:text-gray-100 font-semibold">Task Date: <span className="font-normal">{task.date}</span></p>
            </div>
          ) : (
            <div className="h-24"></div>
          )}
        </div>
        {modalVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-sm relative">
              <span
                className="absolute top-2 right-3 text-2xl text-gray-600 dark:text-gray-300 cursor-pointer hover:text-red-500"
                onClick={closeModal}
                role="button"
                aria-label="Close"
              >
                &times;
              </span>
              <p className="text-gray-800 dark:text-gray-100">{modalContent}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ViewTask