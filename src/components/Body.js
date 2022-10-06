import classes from "./Body.module.css";
import Form from "./Form";
import TasksList from "./TasksList";
import { useSelector } from "react-redux";

const Body = () => {
  const items = useSelector((state) => state.form.items);
  const form = useSelector((state) => state.form.formIsVisible);

  const notEmpty = items.length > 0;

  return (
    <div className={classes.body}>
      {form && <Form />}
      {!notEmpty && <p>No tasks available. Try to add some!</p>}
      {notEmpty && <TasksList />}
    </div>
  );
};

export default Body;
