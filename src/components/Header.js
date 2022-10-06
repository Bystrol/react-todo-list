import classes from "./Header.module.css";
import { formActions } from "../store/form-slice";
import { useDispatch } from "react-redux";

const Layout = () => {
  const dispatch = useDispatch();

  const formShowHandler = () => {
    dispatch(formActions.toggleForm());
  };

  return (
    <div className={classes.header}>
      <h1>To-Do List</h1>
      <button onClick={formShowHandler}>Add New Task</button>
    </div>
  );
};

export default Layout;
