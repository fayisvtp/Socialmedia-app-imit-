import React, { useState } from "react";
import surthess from "../assets/srutheesh.png";
import ReplayComponent from "./ReplayComponent";

export default function ComentBox() {
  const [coment, setcoment] = useState("");
  const [coments, setcoments] = useState([]);
  const [replay, setReplay] = useState(false);

  const showReplay = () => {
    setReplay(!replay);
  };

  const addcoment = () => {
    setcoments([...coments, { list: coment, id: Date.now() }]);
    setcoment("");
    console.log(coment);
  };

  const deletcoment = (id) => {
    setcoments(coments.filter((e) => e.id !== id));
  };

  return (
    <div className="coment h-auto rounded" style={{ backgroundColor: "#E1E1E1" }}>
      <div className="comment_profile">
        <ul>
          {coments.map((values) => (
            <div className="chat chat-start" key={values.id}>
              <div className="srutheesh">
                <img src={surthess} alt="" />
              </div>
              <div className="userName flex">
                <span className="mr-3 mt-1">
                  <h6>srutheesh</h6>
                </span>
                <p>1week ago</p>
              </div>
              <div className="chat-bubble bg-red-200 w-full">
                {values.list}
                <button
                  onClick={showReplay}
                  className="absolute right-0 top-0 bottom-0 m-auto"
                >
                  replay
                </button>
              </div>
            </div>
          ))}
        </ul>
        {replay && <ReplayComponent />}
      </div>
      {!replay && (
        <div className="input_area col-12">
          <div className="coment_input col-10 relative">
            <input
              style={{ backgroundColor: "rgba(236, 200, 174, 0.3)" }}
              className="h-14 col-12  text-black m-14 border-none rounded-box input-comment "
              type="text"
              placeholder="add comment"
              value={coment}
              onChange={(event) => setcoment(event.target.value)}
              required
            />

            <button
              className="absolute right-0 top-0 bottom-0 m-auto"
              onClick={addcoment}
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
