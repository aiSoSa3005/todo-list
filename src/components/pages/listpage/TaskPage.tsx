import { useParams } from "react-router-dom";
import Task from "../../task/Task";
import "./TaskPage.css";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import {
  collection,
  getFirestore,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc
} from "firebase/firestore";
import Popupform from "../../popupform";

interface TaskType {
  id: string;
  description: string;
  isCompleted: boolean;
}

const TaskPage = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const { listId } = useParams();

  const fetchTasks = async () => {
    const db = getFirestore();
    const tasksRef = collection(db, "lists", listId!, "tasks");
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
    const tasksRef = collection(db, "lists", listId!, "tasks");
    await addDoc(tasksRef, {
      description,
      isCompleted: false,
    });

    fetchTasks();
  };

  const deleteTask = async (taskId: string) => {
    const db = getFirestore();
    const taskRef = doc(db, "lists", listId!, "tasks", taskId);
    await deleteDoc(taskRef);

    fetchTasks();

    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }


  const handleToggleComplete = async (taskId: string, isCompleted: boolean) => {
    const db = getFirestore();
    const taskRef = doc(db, "lists", listId!, "tasks", taskId); //Aggiorno lo stato nel database
    await updateDoc(taskRef, {
      isCompleted: !isCompleted,
    });

    fetchTasks();

    setTasks(
      (
        prevTasks //  Aggiorno lo stato localemente
      ) =>
        prevTasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, isCompleted: !task.isCompleted };
          }
          return task;
        })
    );
  };

  return (
    <>
      <div className="container-task">
        <div className="capabilities">
          <h1 id="task-h1">To-do</h1>

          <div className="header-btns">
            <button className="btn add-task" onClick={handlePopup}>
            <span>
              <FaPlus /> 
            </span>New task
            </button>
          <button className="btn filter"><span><FaFilter /></span>Filter</button>
          </div>
        </div>

        <div className="task-container">
          {tasks.length === 0 && <p className="no-tasks">No tasks</p>}
          {tasks.map((task: TaskType) => (
            <Task
              onToggleComplete={() =>
                handleToggleComplete(task.id, task.isCompleted)
              }
              deleteTask={() => deleteTask(task.id)}
              key={task.id}
              text={task.description}
              isCompleted={task.isCompleted}
            />
          ))}
        </div>
      </div>
      {showPopup && (
        <Popupform onClose={handleClose} onAddTask={handleAddTask} />
      )}
    </>
  );
};

export default TaskPage;
