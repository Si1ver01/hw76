import { getMessages } from "./types";

export const requestGetMessage = (date = null) => async dispatch => {
  try {
    let baseUrl = "/messages";

    if (date) {
      baseUrl += `?datetime=${date}`;
    }

    const response = await fetch(baseUrl);
    const { messages } = await response.json();

    if (messages.length) {
      return dispatch(getMessages(messages));
    }
  } catch (e) {
    console.log(e.message);
  }
};
