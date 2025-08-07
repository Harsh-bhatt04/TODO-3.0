
import Navigation from '../components/Navigation';
import { useState,useEffect } from 'react'
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


function ViewAllTask() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const allTask = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/view-all-task`, {
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