import React, { useEffect } from "react";
import MessagesList from "../components/MessagesList";
import SendMessage from "../components/SendMessage";
import { useDispatch, useSelector } from "react-redux";
import { requestGetMessage } from "../store/actions/actions";

const Chat = () => {
  const dispatch = useDispatch();
  const { messages, lastDate } = useSelector(state => state);

  useEffect(() => {
    dispatch(requestGetMessage());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (lastDate) {
        dispatch(requestGetMessage(lastDate));
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [lastDate, dispatch]);

  return (
    <div className="container">
      <div
        className="row flex-column"
        style={{ height: "100vh", flexWrap: "nowrap" }}
      >
        <MessagesList messages={messages} />
        <SendMessage />
      </div>
    </div>
  );
};

export default Chat;
