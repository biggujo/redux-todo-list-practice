import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
import { getTasksItems } from "../../redux/selectors.js";

export const TaskList = () => {
  const tasks = useSelector(getTasksItems);

  return (<ul className={css.list}>
    {tasks.map(task => (<li className={css.listItem} key={task.id}>
      <Task task={task}/>
    </li>))}
  </ul>);
};
