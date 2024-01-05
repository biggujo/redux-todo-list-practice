import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompletedTask } from "../../redux/actions.js";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleCompletedToggle = () => dispatch(toggleCompletedTask(task.id));

  const handleCloseClick = () => dispatch(deleteTask(task.id));

  return (<div className={css.wrapper}>
    <input
      type="checkbox"
      className={css.checkbox}
      checked={task.completed}
      onChange={handleCompletedToggle}
    />
    <p className={css.text}>{task.text}</p>
    <button className={css.btn}
            onClick={handleCloseClick}>
      <MdClose size={24}/>
    </button>
  </div>);
};
