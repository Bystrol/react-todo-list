import { formActions } from "./form-slice";

export const sendData = async (items) => {
  try {
    const response = await fetch(
      "https://react-app-5ba93-default-rtdb.firebaseio.com/tasks.json",
      {
        method: "PUT",
        body: JSON.stringify(items),
      }
    );

    if (!response.ok) {
      throw new Error();
    }
  } catch (error) {}
};

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://react-app-5ba93-default-rtdb.firebaseio.com/tasks.json"
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      dispatch(formActions.replaceTasks(data || []));
    } catch (error) {}
  };
};
