import classes from "./TaskItem.module.css";

const TaskItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.left}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div className={classes.right}>
        <button onClick={props.onEdit}>
          <i className="fa-sharp fa-solid fa-pen"></i>
        </button>
        <button onClick={props.onRemove}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
