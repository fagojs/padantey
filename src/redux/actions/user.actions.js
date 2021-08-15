const SET_USER = "SET_USER";

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export default setUser;
