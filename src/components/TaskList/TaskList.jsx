import { Task } from "../Task/Task";
import css from "./TaskList.module.css";

export const TaskList = ({ items }) => {
  return (<ul className={css.list}>
    {items.map(task => (<li className={css.listItem} key={task.id}>
      <Task task={task}/>
    </li>))}
  </ul>);
};
