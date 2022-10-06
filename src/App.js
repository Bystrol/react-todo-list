import Body from "./components/Body";
import Header from "./components/Header";
import EditItemModal from "./components/EditItemModal";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { sendData } from "./store/http-actions";
import { fetchData } from "./store/http-actions";

let isInitial = true;

function App() {
  const modal = useSelector((state) => state.modal.modalIsVisible);
  const items = useSelector((state) => state.form.items);
  const changed = useSelector((state) => state.form.changed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (changed) {
      sendData(items);
    }
  }, [items]);

  return (
    <div>
      {modal && <EditItemModal />}
      <Header />
      <Body />
    </div>
  );
}

export default App;
