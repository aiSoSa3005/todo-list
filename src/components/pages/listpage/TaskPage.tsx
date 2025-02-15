import { useParams } from 'react-router-dom';
import Task from '../../task/Task';
import './TaskPage.css';
import { useEffect, useState } from 'react';
import { collection, getFirestore, getDocs, addDoc } from 'firebase/firestore';
import Popupform from '../../popupform';

interface TaskType {
  id: string
  description: string;
  isCompleted: boolean;
}

const TaskPage = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const { listId } = useParams();

  const fetchTasks = async () => {
    const db = getFirestore();
    const tasksRef = collection(db, 'lists', listId!, 'tasks');
    const querySnapshot = await getDocs(tasksRef);

    const tasksData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as TaskType[];

    setTasks(tasksData);
  };

  useEffect(() => {
    fetchTasks();
  }, [listId]);

  const handlePopup = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleAddTask = async (description: string) => {
    if (!description.trim()) return;

    const db = getFirestore();
    const tasksRef = collection(db, 'lists', listId!, 'tasks');
    await addDoc(tasksRef, {
      description,
      isCompleted: false,
    });

    fetchTasks(); 
  };

  return (
    <>
      <div className='container-task'>
        <div className="capabilities">
          <h1>To-do</h1>
          <button className="btn add-task" onClick={handlePopup}>
            Add task
          </button>
        </div>

        <div className="task-container">
          {tasks.length === 0 && <p className="no-tasks">No tasks</p>}
          {tasks.map((task: TaskType) => (
            <Task key={task.id} text={task.description} isCompleted={task.isCompleted} />
          ))}
        </div>
      </div>
      {showPopup && <Popupform onClose={handleClose} onAddTask={handleAddTask} />}
    </>
  );
};

export default TaskPage;