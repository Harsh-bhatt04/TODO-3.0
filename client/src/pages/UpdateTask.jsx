
import Navigation from '../components/Navigation';
import { useRef, useState } from 'react';
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

function UpdateTask({state}) {
  const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const closeModal = () => {
      setModalVisible(false);
      setModalContent("");
    };


   const taskIDref = useRef();
   const taskNameref = useRef();
   const taskDateref = useRef();

  const {contract,account} = state

  const updateTask = async(e)=>{

    e.preventDefault()
    const taskID = taskIDref.current.value;
    const taskName = taskNameref.current.value;
    const taskDate = taskDateref.current.value;

    
    try{
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/update-task`,{
        method: "post",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify({taskDate:taskDate})
      })  

      const data = await res.json()
      console.log(data);
      
      if(data.status == 200){
        await contract.methods.updateTask(taskID,taskName,taskDate).send({from:account})

        setModalContent(
              `Task ID ${taskID} updated with task name ${taskName} and date ${taskDate}`
            );
            setModalVisible(true);
      }
      else if(data.status === 409){
        setModalContent(
              `Task ID ${taskID} cannot be updated because of date clash`
            );
            setModalVisible(true);

      }
      
    }catch(err){
      console.log(err);
      
        setModalContent("Task cannot be updated");
          setModalVisible(true);
      }

  }
  return (
    <>
      <Navigation />
      <div className="max-w-md mx-auto mt-16 bg-gray-900 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-100 text-center">Update Task</h2>
        <form onSubmit={updateTask} className="space-y-5">
          <div>
            <label htmlFor="taskID" className="block text-l font-medium text-gray-300 mb-1" >ID:</label>
            <input id="taskID" ref={taskIDref} className="w-full px-3 py-2 border border-gray-700 bg-gray-800 text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter ID to update with"/>
          </div>
          <div>
            <label htmlFor="taskName" className="block text-l font-medium text-gray-300 mb-1">Name:</label>
            <input id="taskName" ref={taskNameref} className="w-full px-3 py-2 border border-gray-700 bg-gray-800 text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter updated name" />
          </div>
          <div>
            <label htmlFor="taskDate" className="block text-l font-medium text-gray-300 mb-1">Date:</label>
            <input id="taskDate" ref={taskDateref} type="text" className="w-full px-3 py-2 border border-gray-700 bg-gray-800 text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter date"/>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Update Task</button>
        </form>
      </div>
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 relative max-w-sm w-full border border-gray-700">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 text-xl font-bold"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <p className="text-gray-100">{modalContent}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default UpdateTask