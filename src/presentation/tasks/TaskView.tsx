import { useContext, useState } from "react";
import TaskElement from "./TaskElement";
import AddIcon from "@mui/icons-material/Add";
import styles from "./TaskView.module.scss";
import UserContext from "../context/UserContext";

const TaskView = () => {
  const userContext = useContext(UserContext);
  const [numberId, setnumberId] = useState<number>(0);

  if (!userContext) {
    return <div>Error: Context not available</div>;
  }
  const { tasks, settasks } = userContext;

  const onAddTask = () => {
    settasks([
      ...tasks,
      {
        title: "Nueva tarea " + numberId,
        description: "Descripción de la tarea",
        index: numberId,
      },
    ]);
    setnumberId(numberId + 1);
  };

  return (
    <>
      <div className={styles.tasksSection}>
        <div className={styles.titleSection}>
          <h2>TAREAS</h2>
          <button onClick={onAddTask}>
            <AddIcon />
          </button>
        </div>
        <div className={styles.taskList}>
          {tasks.map((task) => (
            <TaskElement
              title={task.title}
              description={task.description}
              index={task.index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskView;
