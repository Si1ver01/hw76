import React from "react";

const Modal = ({ closeModal, errors }) => {
  return (
    <div className="Modal">
      <div className="row mt-5">
        <div className="col-4 offset-4 p-3 border border-danger bg-white rounded mt-5">
          <ul className="list-unstyled">
            {errors.map(error => (
              <li key={error.msg} className="text-danger text-center">
                {error.msg}
              </li>
            ))}
          </ul>
          <button className="btn btn-block btn-primary" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
