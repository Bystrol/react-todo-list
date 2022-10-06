import classes from "./EditItemModal.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/form-slice";
import { modalActions } from "../store/modal-slice";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const EditItemModal = () => {
  const titleToEdit = useSelector((state) => state.modal.titleToEdit);
  const descToEdit = useSelector((state) => state.modal.descToEdit);
  const itemId = useSelector((state) => state.modal.itemId);

  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [error, setError] = useState(false);
  const [titleTouched, setTitleTouched] = useState(false);
  const [descTouched, setDescTouched] = useState(false);

  useEffect(() => {
    setNewTitle(titleToEdit);
    setNewDesc(descToEdit);
  }, []);

  const titleChangeHandler = (e) => {
    setNewTitle(e.target.value);
  };

  const descChangeHandler = (e) => {
    setNewDesc(e.target.value);
  };

  const titleTouchedHandler = () => {
    setTitleTouched(true);
  };

  const descTouchedHandler = () => {
    setDescTouched(true);
  };

  const modalData = {
    id: itemId,
    title: newTitle,
    description: newDesc,
  };

  const reset = () => {
    setNewTitle("");
    setNewDesc("");
    setError(false);
    setTitleTouched(false);
    setDescTouched(false);
  };

  const formShowHandler = () => {
    dispatch(modalActions.toggleModal());
    reset();
  };

  const submissionHandler = (e) => {
    e.preventDefault();

    if (newTitle.trim() !== "" && newDesc.trim() !== "") {
      dispatch(formActions.editTask(modalData));
      dispatch(modalActions.toggleModal());
      reset();
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (newTitle.trim() !== "" && newDesc.trim() !== "") {
      setError(false);
    } else if (titleTouched && descTouched) {
      setError(true);
    }
  }, [newTitle, newDesc]);

  return (
    <div className={classes.modal}>
      <Backdrop onClick={formShowHandler} />
      <form onSubmit={submissionHandler} className={classes.cart}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter the title here..."
          value={newTitle}
          onChange={titleChangeHandler}
          onBlur={titleTouchedHandler}
        ></input>
        <label htmlFor="desc">Description</label>
        <input
          id="desc"
          type="text"
          placeholder="Enter the description here..."
          value={newDesc}
          onChange={descChangeHandler}
          onBlur={descTouchedHandler}
        ></input>
        {error && <p>Inputs must not be empty!</p>}
        <div className={classes.bottom}>
          <button>Change</button>
          <button type="button" onClick={formShowHandler}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditItemModal;
