import React from "react";
import MessageItem from "./MessageItem";

const MessagesList = ({ messages }) => {
  if (!messages.length) {
    return (
      <div
        className="col-12 d-flex flex-column flex-grow-1 justify-content-center"
        style={{ flexShrink: 1 }}
      >
        <strong className="text-primary text-center">
          No posts yet. You can be the first
        </strong>
      </div>
    );
  }

  return (
    <ul
      className="col-12 d-flex flex-column flex-grow-1"
      style={{ overflowY: "scroll", flexShrink: 1 }}
    >
      {messages.map(message => (
        <MessageItem
          message={message.message}
          author={message.author}
          date={message.date}
          key={message.id}
        />
      ))}
    </ul>
  );
};

export default MessagesList;
