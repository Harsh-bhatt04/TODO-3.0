import {contract} from '../contract/contract.js'
export const dateClashCheck = async(taskDate)=>{
    const tasks = await contract.methods.allTask().call()
    const foundTask = tasks.find(task=>task.date == taskDate)

    if(foundTask)
        return foundTask.name
    return "NO task Found"
}