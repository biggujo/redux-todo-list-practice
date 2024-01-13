import { Layout } from "../Layout/Layout.jsx";
import { AppBar } from "../AppBar/AppBar.jsx";
import { TaskForm } from "../TaskForm/TaskForm.jsx";
import { TaskList } from "../TaskList/TaskList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectTasksItems } from "../../redux/selectors.js";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/operations.js";

export const App = () => {
  const tasks = useSelector(selectTasksItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (<Layout>
    <AppBar/>
    <TaskForm/>
    {tasks.length > 0 && <TaskList/>}
  </Layout>);
};
