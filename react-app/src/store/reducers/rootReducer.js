import { CLEAR_ERROR, GET_MESSAGES, SET_ERROR } from "../actions/types";

const initialState = {
  messages: [],
  lastDate: null,
  errors: null
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, ...payload],
        lastDate: payload[payload.length - 1].date
      };
    case SET_ERROR:
      return {
        ...state,
        errors: payload
      };
    case CLEAR_ERROR:
      return {
        ...state,
        errors: null
      };
    default:
      return state;
  }
}
