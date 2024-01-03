import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/actions.js";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleCompleted = () => dispatch(toggleCompleted(task.id));

  const handleDeleteTask = () => dispatch(deleteTask(task.id));

  return (<div className={css.wrapper}>
    <input
      type="checkbox"
      className={css.checkbox}
      checked={task.completed}
      onChange={handleToggleCompleted}
    />
    <p className={css.text}>{task.text}</p>
    <button className={css.btn}
            onClick={handleDeleteTask}>
      <MdClose size={24}/>
    </button>
  </div>);
};
