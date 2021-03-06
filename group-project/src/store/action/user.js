import axios from "axios";

const baseUrlUser = "https://5eb3a672974fee0016ecd736.mockapi.io/user";

export const changeInputUsername = (e) => {
  return {
    type: "CHANGE_INPUT_USERNAME",
    payload: e,
  };
};

export const changeInputPassword = (e) => {
  return {
    type: "CHANGE_INPUT_PASSWORD",
    payload: e,
  };
};

export const getListUser = () => {
  return async (dispatch) => {
    const response = await axios.get(baseUrlUser);
    dispatch({ type: "GET_LIST_USER", payload: response.data });
  };
};

export const doLogin = () => {
  return async (dispatch, getState) => {
    const dataUsername = getState().user.inputNamaLengkap;

    const dataPassword = getState().user.inputPassword;

    const dataUser = getState().user.listUser;

    const filterDataUsername = dataUser.filter((item) => {
      return item.username === dataUsername;
    });

    const filterData = filterDataUsername.filter((item) => {
      return item.password === dataPassword;
    });

    if (filterData.length === 1) {
      dispatch({ type: "DO_LOGIN", payload: filterData[0] });
    }
  };
};

export const doLogout = () => {
  return {
    type: "DO_LOGOUT",
  };
};
