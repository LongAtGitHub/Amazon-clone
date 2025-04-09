// reducers/authReducer.js
const initialState = {
    uid: null,
    email: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          uid: action.payload.uid,
          email: action.payload.email,
        };
      case "LOGOUT":
        return {
          ...state,
          uid: null,
          email: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  