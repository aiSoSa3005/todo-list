import Task from '../../task/Task'
import './TaskPage.css'
import { useState } from 'react'

const TaskPage = () => {
  const [tasks, setTasks] = useState(['Work', 'Study', 'Code', 'Have fun', 'Code', 'Code', 'Code', 'Code', 'Code', 'Code', 'Code', 'Code'])

  return (
    <div className='container-task'>
        <div className="capabilities">
          <h1>To-do</h1>
          <button className="btn add-task">Add task</button>
        </div>

     
        <div className="task-container">
        {
          tasks.map((task,index) =>(
            <Task key={index} text={task} isCompleted={true}/>
          ))
        }
        </div>
    </div>
  )
}

export default TaskPage
