import express from 'express'
import {createTask,updateTask,deleteTask,viewTask,viewAllTasks} from '../controllers/controllers.js'

const router = express.Router()

router.route('/create-task').post(createTask)
router.route('/update-task').post(updateTask)
router.route('/delete-task/:taskId').delete(deleteTask)
router.route('/view-task/:taskId').get(viewTask)
router.route('/view-all-task').get(viewAllTasks)

export default router