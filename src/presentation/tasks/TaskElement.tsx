import DeleteIcon from "@mui/icons-material/Delete";
import { useRef, useContext, useState } from "react";
import { Task } from "../../interfaces/Task";
import UserContext from "../context/UserContext";
import styles from "./TaskElement.module.scss";
// import TaskInfo from "./TaskInfo";

const TaskElement = ({ title, description, index }: Task) => {
  // const [openTaskInfo, setopenTaskInfo] = useState<boolean>(false);
  const userContext = useContext(UserContext);
  if (!userContext) {
    return <div>Error: Context not available</div>;
  }
  const { tasks, settasks } = userContext;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const task = useRef<HTMLDivElement>(null);

  const onRemoveTask = () => {
    console.log(index);
    if (task.current != null) {
      let newTasks: Task[] = [...tasks];
      newTasks = newTasks.filter((task: Task) => task.index !== index);
      console.log(newTasks);
      settasks([...newTasks]);
    }
  };

  const onOpenTask = () => {
    // console.log("Task opened");
    // setopenTaskInfo(true);
  };

  return (
    <>
      <div ref={task} key={index} className={styles.task} onClick={onOpenTask}>
        <h5>{title}</h5>
        <div className={styles.deleteIcon} onClick={onRemoveTask}>
          <DeleteIcon />
        </div>
      </div>
      {/* {openTaskInfo && (
        <div style={{ position: "relative" }}>
          <TaskInfo />
        </div>
      )} */}
    </>
  );
};

export default TaskElement;
