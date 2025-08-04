import React from 'react'
import { useState } from 'react'
import Navigation from '../components/Navigation';
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ViewTask() {
  const [task,setTask] = useState({tId:null,name:null,date:null})
  const [modalVisible, setModalVisible] = useState(false);
      const [modalContent, setModalContent] = useState("");
  const viewTask = async(e)=>{
    try{
      e.preventDefault()
      const taskID = document.querySelector("#taskID").value
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/view-task/${taskID}`,{
        method:"GET",
        headers:{
          "content-type":"application/json"
        }
      })
      const data = await res.json()
      console.log(data);
      
      if(data.status === 200){
        setTask(data.obj)
      }
      else{
        throw new Error
      }
      
    }
    catch(err){
      setModalContent("Task does not exist");
        setModalVisible(true);    
      
    }
  }
  const closeModal = () => {
      setModalVisible(false);
      setModalContent("");
    };
  return (
    <div>
      <Navigation />
      <div className="view_task todo_btn">
     {task.tId!==null && task.name!==null && task.date!==null ? (
          <div className="view_task_by_id  view_all_tasks_card">
            <p>Task ID: {task.tId}</p>
            <p>Task Name: {task.name}</p>
            <p>Task Date: {task.date}</p>
          </div>
        ) : (
          <div className="empty_div"></div>
        )}
        <form onSubmit={viewTask}>
          <label>
            ID:
            <input id="taskID" />
          </label>
          <button type="submit">View Task</button>
        </form>
        {modalVisible && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <p>{modalContent}</p>
            </div>
          </div>
        )}
    </div>
    </div>
  )
}

export default ViewTask