import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectStatus } from "../../redux/selectors.js";
import { statusFilters } from "../../redux/constants.js";
import { setStatusFilter } from "../../redux/slices/filtersSlice.js";

export const StatusFilter = () => {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  return (<div className={css.wrapper}>
    <Button selected={status === statusFilters.all}
            onClick={() => dispatch(setStatusFilter(statusFilters.all))}>All</Button>
    <Button selected={status === statusFilters.active}
            onClick={() => dispatch(setStatusFilter(statusFilters.active))}>Active</Button>
    <Button selected={status === statusFilters.completed}
            onClick={() => dispatch(setStatusFilter(statusFilters.completed))}>Completed</Button>
  </div>);
};
