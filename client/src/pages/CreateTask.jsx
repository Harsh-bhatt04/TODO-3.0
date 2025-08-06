import { useState } from 'react';
import Navigation from '../components/Navigation';
export const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

function CreateTask({state}) {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const closeModal = () => {
    setModalOpen(false);
    setModalContent("");
  };

  const CreateTask = async(e)=>{
    e.preventDefault();
    
    const {contract,account} = state
    const taskName = document.querySelector("#taskName").value
    const taskDate = document.querySelector('#taskDate').value
    try{
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/create-task`,{
        method: "post",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify({taskDate:taskDate})
      })  
      const data = await res.json()
      if(data.status===200){
        if(contract && contract.methods){
          await contract.methods
            .createTask(taskName,taskDate)
            .send({from:account});
          setModalContent(`Task ${taskName} added at ${taskDate}`);
        } else {
          setModalContent("Contract not available.");
        }
      }else{
        setModalContent("Task cannot be added.");
      }
    }catch(err){
      setModalContent(`MetaMask issue`);
    }finally {
      setModalOpen(true);
    }
  }

  return (
    <>
      <Navigation />
      {/* <div className="min-h-screen bg-[#18122B] flex flex-col items-center pt-10"> */}
        <form
          onSubmit={CreateTask}
          className="bg-gray-900 shadow-lg rounded-lg p-8 w-full max-w-md mt-8 flex flex-col gap-6"
        >
          <label className="flex flex-col text-[#e1e0e3] font-semibold">
            Name:
            <input
              placeholder='Enter the task name...'
              type="text"
              id="taskName"
              className="mt-2 px-3 py-2 border border-[#e1e1e1] bg-[#1211171c] text-[#ffffff] rounded focus:outline-none focus:ring-2 focus:ring-[#A084E8]"
              required
            />
          </label>
          <label className="flex flex-col text-[#e1e1e1] font-semibold">
            Date:
            <input
              id="taskDate"
              type="date"
              className="mt-2 px-3 py-2 border border-[#e1e1e1] bg-[#1211171c] text-[#ebe4ff] rounded focus:outline-none focus:ring-2 focus:ring-[#A084E8]"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-[#A084E8] text-#646cff py-2 rounded hover:bg-[#856f59] transition font-bold  border-white"
          >
            Create Task
          </button>
        </form>
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-[#393053] rounded-lg shadow-xl p-6 w-full max-w-sm relative">
              <button
                className="absolute top-2 right-2 text-[#A084E8] hover:text-white text-2xl font-bold"
                onClick={closeModal}
                aria-label="Close"
              >
                &times;
              </button>
              <p className="text-center text-lg text-[#A084E8]">{modalContent}</p>
            </div>
          </div>
        )}
      
    </>
  )
}

export default CreateTask
