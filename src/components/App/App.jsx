import { Layout } from "../Layout/Layout.jsx";
import { AppBar } from "../AppBar/AppBar.jsx";
import { TaskForm } from "../TaskForm/TaskForm.jsx";
import { TaskList } from "../TaskList/TaskList.jsx";

export const App = () => {
  return (<Layout>
    <AppBar/>
    <TaskForm/>
    <TaskList/>
  </Layout>);
};
