const initialState = {
  username: "",
  email: "",
  nama_lengkap: "",
  avatar: "",
  password: "",
  isLogin: false,
  inputNamaLengkap: "",
  inputPassword: "",
  listUser: [],
};

export default function userReducer(userState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_USERNAME":
      return {
        ...userState,
        inputNamaLengkap: action.payload.target.value,
      };
    case "CHANGE_INPUT_PASSWORD":
      return {
        ...userState,
        inputPassword: action.payload.target.value,
      };
    case "GET_LIST_USER":
      return {
        ...userState,
        listUser: action.payload,
      };
    case "DO_LOGIN":
      return {
        ...userState,
        username: action.payload.username,
        email: action.payload.email,
        nama_lengkap: action.payload.nama_lengkap,
        avatar: action.payload.avatar,
        password: action.payload.password,
        isLogin: true,
      };
    case "DO_LOGOUT":
      return {
        ...userState,
        isLogin: false,
      };
    default:
      return userState;
  }
}
