import { useParams } from 'react-router-dom'
import Task from '../../task/Task'
import './TaskPage.css'
import { useEffect, useState } from 'react'
import { collection, getFirestore,getDocs } from 'firebase/firestore'

interface TaskType {  
  id: string;
  text: string;
  isCompleted: boolean;
}

const TaskPage = () => {
  const [tasks, setTasks] = useState<any>([{}])
  const {listId} = useParams()

  useEffect(() => {
    const fetchTasks = async () => {
      const db = getFirestore();
      const tasksRef = collection(db, 'lists', listId!, 'tasks');
      const querySnapshot = await getDocs(tasksRef);

      const tasksData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setTasks(tasksData);
    };

    fetchTasks();
  }, [listId]);
  return (
    <div className='container-task'>
        <div className="capabilities">
          <h1>To-do</h1>
          <button className="btn add-task">Add task</button>
        </div>

     
        <div className="task-container">
          {
            tasks.length === 0 && <p className="no-tasks">No tasks</p>
          }
        {
          tasks.map((task: TaskType, index: number) => (
            <Task key={task.id} text={task.text} isCompleted={task.isCompleted} />
          ))
        }
        </div>
    </div>
  )
}

export default TaskPage
