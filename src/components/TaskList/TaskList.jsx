import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
import { selectVisibleTasks } from "../../redux/selectors.js";

export const TaskList = () => {
  const visibleTasks = useSelector(selectVisibleTasks);

  return (<ul className={css.list}>
    {visibleTasks.map(task => (<li className={css.listItem} key={task.id}>
      <Task task={task}/>
    </li>))}
  </ul>);
};
