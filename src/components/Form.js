import classes from "./Form.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formActions } from "../store/form-slice";

const Form = () => {
  const dispatch = useDispatch();

  const [titleValue, setTitleValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [error, setError] = useState(false);
  const [titleTouched, setTitleTouched] = useState(false);
  const [descTouched, setDescTouched] = useState(false);

  const titleChangeHandler = (e) => {
    setTitleValue(e.target.value);
  };

  const descChangeHandler = (e) => {
    setDescValue(e.target.value);
  };

  const titleTouchedHandler = () => {
    setTitleTouched(true);
  };

  const descTouchedHandler = () => {
    setDescTouched(true);
  };

  const formData = {
    id: Math.random(),
    title: titleValue,
    description: descValue,
  };

  const reset = () => {
    setTitleValue("");
    setDescValue("");
    setError(false);
    setTitleTouched(false);
    setDescTouched(false);
  };

  const formShowHandler = () => {
    dispatch(formActions.toggleForm());
    reset();
  };

  const submissionHandler = (e) => {
    e.preventDefault();

    if (titleValue.trim() !== "" && descValue.trim() !== "") {
      dispatch(formActions.addTask(formData));
      reset();
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (titleValue.trim() !== "" && descValue.trim() !== "") {
      setError(false);
    } else if (titleTouched && descTouched) {
      setError(true);
    }
  }, [titleValue, descValue]);

  return (
    <form onSubmit={submissionHandler} className={classes.cart}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={titleValue}
        onChange={titleChangeHandler}
        onBlur={titleTouchedHandler}
      ></input>
      <label htmlFor="desc">Description</label>
      <input
        id="desc"
        type="text"
        value={descValue}
        onChange={descChangeHandler}
        onBlur={descTouchedHandler}
      ></input>
      {error && <p>Inputs must not be empty!</p>}
      <div className={classes.bottom}>
        <button>Add Task</button>
        <button type="button" onClick={formShowHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;
