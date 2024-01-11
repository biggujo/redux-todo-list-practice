import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTaskById, toggleTask } from "../../redux/operations.js";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleCompleted = () => dispatch(toggleTask(task));

  const handleDeleteTask = () => dispatch(deleteTaskById(task.id));

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
