import React, { useState } from 'react'

export default function ReplayComponent() {
    const [replay, setreplay] = useState("");
  const [replays, setreplays] = useState([]);

  const addreplay = () => {
    setreplays([...replays, { list: replay, id: Date.now() }]);
    setreplay("");
    console.log(replay);
  };
  return (
    <div
    className="coment h-auto rounded"
    style={{ backgroundColor: "#E1E1E1" }}
  >
    <div className="comment_profile">
      <ul>
        {replays.map((values) => (
          <>
            <div className="chat chat-end">
              <div className="srutheesh  ">
                <img src={surthess} alt="" />
              </div>
              <div className="userName flex ">
                <span className="mr-3 mt-1">
                  <h6>srutheesh</h6>
                </span>
                <p>1week ago</p>
              </div>
              <div className="chat-bubble bg-black-200 w-full">
                {values.list}
              </div>
            </div>
          </>
        ))}
      </ul>
      {replay && (
      <div className='w-full  h-96'>
        <ReplayComponent/>
      </div>
    )}
    </div>
    <div className="input_area col-12">
      <div className="coment_input col-10 relative">
        <input
          style={{ backgroundColor: "red" }}
          className="h-14 col-12  text-black m-14 border-none rounded-box input-comment "
          type="text"
          placeholder="Replay"
          value={replay}
          onChange={(event) => setreplay(event.target.value)}
          required
        />

        <button
          className="absolute right-0 top-0 bottom-0 m-auto"
          onClick={addreplay}
        >
          Add
        </button>
      </div>
    </div>
  </div>
  )
}
