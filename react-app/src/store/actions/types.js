export const GET_MESSAGES = "GET_MESSAGES";
export const SET_ERROR = "SET_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const getMessages = messages => ({
  type: GET_MESSAGES,
  payload: messages
});

export const setError = error => ({ type: SET_ERROR, payload: error });
export const clearError = () => ({ type: CLEAR_ERROR });
