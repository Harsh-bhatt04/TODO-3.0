// // import Navigation from '../components/Navigation';

// // function DeleteTask({state}) {
// //   const {contract,account} = state
// //   const deleteTask = async (e)=>{
// //     e.preventDefault();
// //     const taskId = document.querySelector('#Id').value;
// //     try{
// //       const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/delete-task/${taskId}`,{
// //         method: "delete",
// //         headers:{
// //           "content-type":"application/json"
// //         },
// //         // body: JSON.stringify({taskDate:taskDate})
// //     })
// //     const data = await res.json()
// //     console.log(data)
// //     if(data.status == 200){
// //         await contract.method.deleteTask(id).send({from:account})
// //   }}
// //     catch(err){
// //       console.log(err)
// //     }
// //   }

// //   return (
// //     <div>
// //       <Navigation />
// //       <form action="" onSubmit={deleteTask}>
// //         <label htmlFor="Id">ID:</label>
// //         <input type="text" id='Id'/>
// //         <button>Delete</button>
// //       </form>
      
// //       </div>
// //   )
// // }

// // export default DeleteTask
// import Navigation from '../components/Navigation';

// function DeleteTask({state}) {



//   const {contract,account} = state
//   const deleteTask = async (e)=>{

//     e.preventDefault();
//     const taskId = document.querySelector('#Id').value;
//     try {
//       const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/delete-task/${taskId}`,{
//         method: "delete",
//         headers:{
//           "content-type":"application/json"
//         }
//         // body: JSON.stringify({taskId:taskId})
//     })
//     console.log(res)
//     const data = await res.json()
//     console.log(data)
//     if(data.status == 200){
//         await contract.methods.deleteTask(taskId).send({from:account})

//     }
//     } catch (error) {
//       console.log(error)
//     }
//   };

//   return (
//     <div>
//       <Navigation />
//       <form action="" onSubmit={deleteTask}>
//         <label>ID:</label>
//         <input type="text" id='Id'/>
//         <button>Delete</button>
//       </form>
      
//       </div>
//   )
// }

// export default DeleteTask

// import Navigation from '../components/Navigation';

// function DeleteTask({state}) {
//   const {contract,account} = state
//   const deleteTask = async (e)=>{
//     e.preventDefault();
//     const taskId = document.querySelector('#Id').value;
//     try{
//       const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/delete-task/${taskId}`,{
//         method: "delete",
//         headers:{
//           "content-type":"application/json"
//         },
//         // body: JSON.stringify({taskDate:taskDate})
//     })
//     const data = await res.json()
//     console.log(data)
//     if(data.status == 200){
//         await contract.method.deleteTask(id).send({from:account})
//   }}
//     catch(err){
//       console.log(err)
//     }
//   }

//   return (
//     <div>
//       <Navigation />
//       <form action="" onSubmit={deleteTask}>
//         <label htmlFor="Id">ID:</label>
//         <input type="text" id='Id'/>
//         <button>Delete</button>
//       </form>
      
//       </div>
//   )
// }

// export default DeleteTask
// import { useState } from 'react';
// import Navigation from '../components/Navigation';

// function DeleteTask({ state }) {
//   const { contract, account } = state;
//   const [taskId, setTaskId] = useState("");

//   const deleteTask = async (e) => {
//     e.preventDefault();
//     try {
//        console.log(import.meta.env.VITE_API_BASE_URL);

//       const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/delete-task/${taskId}`, {
//         method: "delete",
//         headers: {
//           "content-type": "application/json"
//         }
//       });
//       // console.log("issue");
//       const data = await res.json();
//       console.log(data);
//       //  console.log("issue");
      
//       if (data.status == 200) {
//         await contract.methods.deleteTask(taskId).send({ from: account });
//       }else{
//         console.log("issue");
        
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <Navigation />
//       <form
//         className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md mt-8"
//         onSubmit={deleteTask}
//       >
//         <label htmlFor="taskId" className="block text-gray-200 text-sm font-bold mb-2" />
//           ID:
//         <input
//           type="text"
//           id="taskId"
//           value={taskId}
//           onChange={e => setTaskId(e.target.value)}
//           className="w-full px-4 py-2 mb-4 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Enter Task ID"
//         />
        
//         <button
//           type="submit"
//           className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200"
//         >
//           Delete
//         </button>
//       </form>
//     </>
//   );
// }

// export default DeleteTask;

import React, { useState } from 'react';
import Navigation from '../components/Navigation';

function DeleteTask({ state }) {
  const { contract, account } = state;
  const [taskId, setTaskId] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const deleteTask = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/delete-task/${taskId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();
      console.log(data)
      if (data.status === 200) {
        await contract.methods.deleteTask(taskId).send({ from: account });
        setModalContent("Task successfully deleted!");
        setModalVisible(true);
      } else if(data.status === 404){
        setModalContent("Task does not exist!");
        setModalVisible(true);
      }
    } catch (error) {
      console.error(error);
      setModalContent("An error occurred while trying to delete the task.");
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
      <form
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md mt-8"
        onSubmit={deleteTask}
      >
        <label htmlFor="taskId" className="block text-gray-200 text-sm font-bold mb-2">
          Task ID:
        </label>
        <input
          type="text"
          id="taskId"
          value={taskId}
          onChange={(e) => setTaskId(e.target.value)}
          className="w-full px-4 py-2 mb-4 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Task ID"
        />

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200"
        >
          Delete Task
        </button>
      </form>

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
    </>
  );
}

export default DeleteTask;
