import { Layout } from "../Layout/Layout.jsx";
import { AppBar } from "../AppBar/AppBar.jsx";
import { TaskForm } from "../TaskForm/TaskForm.jsx";
import { TaskList } from "../TaskList/TaskList.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/operations.js";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (<Layout>
    <AppBar/>
    <TaskForm/>
    <TaskList/>
  </Layout>);
};
