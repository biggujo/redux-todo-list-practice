import { Button } from "../Button/Button";
import css from "./TaskForm.module.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/operations.js";
import { useAddTaskMutation } from "../../redux/query/tasksQuery.js";

export const TaskForm = () => {
  const [addTask] = useAddTaskMutation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const todoText = form.elements["text"].value;

    addTask(todoText);

    form.reset();
  };

  return (<form className={css.form} onSubmit={handleSubmit}>
    <input
      className={css.field}
      type="text"
      name="text"
      placeholder="Enter task text..."
    />
    <Button type="submit">Add task</Button>
  </form>);
};
