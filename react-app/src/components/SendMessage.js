import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { clearError, setError } from "../store/actions/types";

const SendMessage = () => {
  const [data, setData] = useState({
    author: "",
    message: ""
  });
  const dispatch = useDispatch();
  const { errors } = useSelector(state => state);

  const inputHandler = e => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = async e => {
    e.preventDefault();
    try {
      const response = await fetch("/messages", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const { errors } = await response.json();
      if (errors) {
        dispatch(setError(errors));
      }
      setData({ ...data, message: "" });
    } catch (e) {
      console.log(e);
    }
  };

  const modalHandler = () => {
    dispatch(clearError());
  };

  if (errors) {
    return <Modal errors={errors} closeModal={modalHandler} />;
  }

  return (
    <div className="border rounded mb-2 p-2">
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className="col-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nickname"
              name="author"
              value={data.author}
              onChange={inputHandler}
            />
          </div>
          <div className="col-7">
            <input
              type="text"
              className="form-control"
              placeholder="Message"
              name="message"
              value={data.message}
              onChange={inputHandler}
            />
          </div>
          <div className="col-2">
            <button className="btn btn-primary btn-block" type="submit">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
