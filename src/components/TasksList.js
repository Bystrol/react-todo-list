import classes from "./TasksList.module.css";
import TaskItem from "./TaskItem";
import { useSelector, useDispatch } from "react-redux";
import { formActions } from "../store/form-slice";
import { modalActions } from "../store/modal-slice";

const TasksList = () => {
  const dispatch = useDispatch();

  const taskItems = useSelector((state) => state.form.items);

  const removeItemHandler = (id) => {
    dispatch(formActions.deleteTask(id));
  };

  const editItemHandler = (item) => {
    dispatch(modalActions.toggleModal());
    dispatch(modalActions.setNewValues(item));
  };

  return (
    <div className={classes.cart}>
      {taskItems.map((item) => {
        return (
          <TaskItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            onEdit={editItemHandler.bind(null, item)}
            onRemove={removeItemHandler.bind(null, item.id)}
          />
        );
      })}
    </div>
  );
};

export default TasksList;
