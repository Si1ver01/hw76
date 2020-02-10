import React from "react";

const MessageItem = ({ author, message, date }) => {
    const formatDate = new Date(date).toLocaleString()
  return (
    <li className="border rounded p-2 d-flex flex-column mt-1">
      <div className="row">
        <div className="col-8">
          <h5 className="">Author : {author}</h5>
        </div>
        <div className="col-4 text-right">
          <strong className="">Date : {formatDate}</strong>
        </div>
      </div>
      <p className="py-1 mb-0 border-top">{message}</p>
    </li>
  );
};

export default MessageItem;
