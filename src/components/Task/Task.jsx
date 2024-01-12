import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTaskById, toggleTaskByTask } from "../../redux/operations.js";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleCompletedToggle = () => dispatch(toggleTaskByTask(task));

  const handleCloseClick = () => dispatch(deleteTaskById(task.id));

  return (<div className={css.wrapper}>
    <input
      type="checkbox"
      className={css.checkbox}
      checked={task.completed}
      onChange={handleCompletedToggle}
    />
    <p className={css.text}>{task.text}</p>
    <button className={css.btn}
            onClick={handleCloseClick}
    >
      <MdClose size={24}/>
    </button>
  </div>);
};
