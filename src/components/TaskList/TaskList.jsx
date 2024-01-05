import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors.js";

export const TaskList = () => {
  const tasks = useSelector(getTasks);

  return (<ul className={css.list}>
    {tasks.map(task => (<li className={css.listItem} key={task.id}>
      <Task task={task}/>
    </li>))}
  </ul>);
};
