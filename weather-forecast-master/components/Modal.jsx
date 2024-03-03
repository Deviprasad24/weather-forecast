import React, { useState } from "react";
import "./Modal.css";
import Axios from "axios";


export default function Modal() {
  const [modal, setModal] = useState(false);

  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");

  const addFeedback = () => {
    Axios.post("http://localhost:5174/create", {
      name: name,
      email: email,
      feedback: feedback,
    }).then(( ) => console.log('success') )
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }


  return (
    <>
      <button
        onClick={toggleModal}
        className="btn-modal border-2 border-black rounded-xl mb-8"
      >
        Feedback
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content ">
            <div>
              <h1 className="text-2xl pb-3 pl-2">Feedback Form</h1>
              <div>
                <div className="flex gap-2 p-2  mt-5 text-xl ">
                  <p className="justify-start">Name: </p>
                  <input
                    type="text"
                    className="rounded-md w-[370px] ml-7 "
                    onChange={(event) => setName(event.target.value)}
                  ></input>
                </div>

                <div className="flex gap-2 p-2  mt-5 text-xl  ">
                  <p className="justify-start">Email: </p>
                  <input
                    type="email"
                    className="rounded-md w-[370px] ml-9"
                    onChange={(event) => setEmail(event.target.value)}
                  ></input>
                </div>
                <div className="flex gap-2 p-2  mt-5 text-xl ">
                  <p className="justify-start">Feedback: </p>
                  <input
                    type="text"
                    className="rounded-md w-[370px]"
                    onChange={(event) => setFeedback(event.target.value)}
                    onSubmit={toggleModal}
                  ></input>
                </div>
              </div>
            </div>

            <button
              className="close-modal border-2 rounded-xl border-black"
              onClick={toggleModal}
            >
              Close
            </button>

            <button
              className="border-2 border-black rounded-xl mt-6 p-2 w-1/2 ml-[25%]"
              onClick={addFeedback}
              
            >
              Submit
            </button>

            
          </div>
        </div>
      )}
    </>
  );
}
