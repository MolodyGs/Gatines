import DeleteIcon from "@mui/icons-material/Delete";
import { useRef, useContext } from "react";
import { Task } from "../../interfaces/Task";
import UserContext from "../context/UserContext";

function TaskElement({ title, description, index }: Task) {
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

  return (
    <>
      <div ref={task} key={index} className="task">
        <div className="delete-icon" onClick={onRemoveTask}>
          <DeleteIcon />
        </div>
        <h3>{title}</h3>
        <p>{"index " + index}</p>
      </div>
    </>
  );
}

export default TaskElement;
