import { Layout } from "../Layout/Layout.jsx";
import { AppBar } from "../AppBar/AppBar.jsx";
import { TaskForm } from "../TaskForm/TaskForm.jsx";
import { TaskList } from "../TaskList/TaskList.jsx";
import { useFetchTasksQuery } from "../../redux/query/tasksQuery.js";

export const App = () => {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useFetchTasksQuery();

  return (<Layout>
    <AppBar/>
    <TaskForm/>
    {isError && <p>{error.data}</p>}
    {isLoading && <p>Loading...</p>}
    {data && !isLoading && <TaskList items={data}/>}
  </Layout>);
};
