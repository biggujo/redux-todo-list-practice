import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants.js";
import { getStatusFilter, getTasks } from "../../redux/selectors.js";

const getVisibleTasks = (tasks, filterValue) => {
  switch (filterValue) {
    case statusFilters.active:
      return tasks.filter(({ completed }) => completed === false);
    case statusFilters.completed:
      return tasks.filter(({ completed }) => completed === true);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const filter = useSelector(getStatusFilter);

  const visibleTasks = getVisibleTasks(tasks, filter);

  return (<ul className={css.list}>
    {visibleTasks.map(task => (<li className={css.listItem} key={task.id}>
      <Task task={task}/>
    </li>))}
  </ul>);
};
