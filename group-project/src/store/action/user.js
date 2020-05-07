import axios from "axios";

const baseUrlUser = "https://ajay123.free.beeceptor.com/login";

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

    // console.log("DATAUSERNAME", dataUsername);

    const dataPassword = getState().user.inputPassword;

    // console.log("DATAUPASSWORD", dataPassword);

    const dataUser = getState().user.listUser;

    // console.log("DATAUSER", dataUser);

    const filterDataUsername = dataUser.filter((item) => {
      return item.username === dataUsername;
    });

    // console.log("FILTER DATA USERNAME", filterDataUsername);

    const filterData = filterDataUsername.filter((item) => {
      return item.password === dataPassword;
    });

    // console.log("FILTER DATA", filterData);

    if (filterData.length === 1) {
      dispatch({ type: "DO_LOGIN", payload: filterData[0] });
      console.log(filterData);
    }
  };
};

export const doLogout = () => {
  return {
    type: "DO_LOGOUT",
  };
};
