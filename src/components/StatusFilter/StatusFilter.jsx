import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants.js";
import { getStatusFilter } from "../../redux/selectors.js";
import { setStatusFilter } from "../../redux/actions.js";

export const StatusFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getStatusFilter);

  return (<div className={css.wrapper}>
    <Button selected={filter === statusFilters.all}
            onClick={() => dispatch(setStatusFilter(statusFilters.all))}>All</Button>

    <Button selected={filter === statusFilters.active}
            onClick={() => dispatch(setStatusFilter(statusFilters.active))}>Active</Button>
    
    <Button selected={filter === statusFilters.completed}
            onClick={() => dispatch(setStatusFilter(statusFilters.completed))}>Completed</Button>
  </div>);
};
