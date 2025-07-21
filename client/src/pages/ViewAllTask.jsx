// import React from 'react'
// import Navigation from '../components/Navigation';
// import { useState,useEffect } from 'react'
// function ViewAllTask() {

//   const [taskList,setTaskList] = useState([])
  
//   useEffect(()=>{
//     const allTask = async ()=>{
//       try {
//         const res = await fetch("http://localhost:3000/api/ethereum/view-all-task",{
//           method:"GET",
//           headers:{
//             "content-type": "application/json"
//           }
//         })

//         const data = await res.json()
//         console.log(data)
//         if(data.status === 200)
//           setTaskList(data.taskList)
//       } catch (err) {
//         console.log(err)
//   }
//     }
//     allTask()
//   },[])
//   const closeModal = () => {
//       setModalVisible(false);
//       setModalContent("");
//     };
//   return (
//     <div>
//       <Navigation />
      
//        <div className="view_all_tasks">
//       {taskList.map((task)=>{
//         return(
//             <div 
//             className="view_all_tasks_card"
//             key={task.tId ? task.tId : `${Math.random()}`}
//             style={task.tId!=="" && task.name!=="" && task.date!=="" ? {} : {display:"none"}}
//             >   
//                 <p>{task.tId}</p>
//                 <p>{task.name}</p>
//                 <p>{task.date}</p>
//             </div>
//         )
//       })}
//       </div>
//       </div>
//   )
// }

// export default ViewAllTask

import React from 'react'
import Navigation from '../components/Navigation';
import { useState,useEffect } from 'react'
function ViewAllTask() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const allTask = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/ethereum/view-all-task", {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        });

        const data = await res.json();
        if (data.status === 200) setTaskList(data.taskList);
      } catch (err) {
        console.log(err);
      }
    };
    allTask();
  }, []);

  return (
    <div>
      <Navigation />
      <div className="max-w-4xl mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-100">All Tasks</h2>
        <div className="flex flex-wrap gap-6">
          {taskList.map((task) => (
            <div
              className="bg-gray-800 shadow rounded-lg p-6 flex flex-col gap-2 border border-gray-700 min-w-[250px] flex-1 sm:max-w-[48%] md:max-w-[32%] lg:max-w-[24%]"
              key={task.tId ? task.tId : `${Math.random()}`}
              style={
                task.tId !== "" && task.name !== "" && task.date !== ""
                  ? {}
                  : { display: "none" }
              }
            >
              <p className="text-sm text-gray-400">Task ID:</p>
              <p className="font-medium text-gray-200">{task.tId}</p>
              <p className="text-sm text-gray-400">Name:</p>
              <p className="font-medium text-gray-200">{task.name}</p>
              <p className="text-sm text-gray-400">Date:</p>
              <p className="font-medium text-gray-200">{task.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewAllTask