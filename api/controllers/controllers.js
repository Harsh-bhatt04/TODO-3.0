import { dateClashCheck } from "../model/tasks.js";
import { contract } from '../contract/contract.js';

const createTask = async (req, res) => {
    const { taskDate } = req.body;
    const task = await dateClashCheck(taskDate);
    try {
        if (task !== "NO task Found") {
            res.status(409).json({ status: 409, message: "Date clash: Task can't be created" });
        } else {
            res.status(200).json({ status: 200, message: " Task can be created" });
        }
    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal server error" });
        console.error("Error in create-task:", err);
    }
};

const updateTask = async (req, res) => {
    const { taskDate } = req.body;
    const task = await dateClashCheck(taskDate);
    try {
        if (task !== "NO task Found") {
            res.status(409).json({ status: 409, message: "Date clash: Task can't be updated" });
        } else {
            res.status(200).json({ status: 200, message: " Task can be updated" });
        }
    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal server error" });
        console.error("Error in Updating the task:", err);
    }
};

const viewTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const task = await contract.methods.viewTask(taskId).call();
        const { id, name, date } = task;
        const tId = Number(id);
        const obj = { tId, name, date };
        res.status(200).json({ status: 200, obj, message: "Task exist" });
    } catch (err) {
        res.status(404).json({ message: "Task does not exist" });
        console.log("Error occured while fetching the data", err);
    }
};

const viewAllTasks = async (req, res) => {
    try {
        const allTasks = await contract.methods.allTask().call();
        if (allTasks.length > 0) {
            const taskList = allTasks.map(({ id, name, date }) => {
                const tId = Number(id);
                return { tId, name, date };
            });
            return res.status(200).json({ status: 200, taskList, message: "all the task" });
        } else {
            return res.status(404).json({ message: "Task doesn't exist" });
        }
    } catch (error) {
        console.log(error);
    }
};

const deleteTask = async (req, res) => {
    // Your delete logic here
    try{
        const {taskId}=req.params;
        // const isTrue = await priorityCheck(taskId);        
          res.status(200).json({status:200,message:"Task can be deleted"})
        
      }catch(error){
        console.error(error)
      }
};

export {
    createTask,
    updateTask,
    viewTask,
    viewAllTasks,
    deleteTask
};