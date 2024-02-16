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
    <div>
       <div className="chat chat-end">
       <div className="chat-bubble bg-red-200 ">
       {replays.map((values) => (
          <li key={values.id}>
            {values.list}
            
          </li>
        ))}
       </div>

       </div>
       <input
            style={{ backgroundColor: "rgba(236, 200, 174, 0.5)" }}
            className="h-14 col-9  text-black m-14 border-none rounded-box input-comment "
            type="text"
            placeholder="add replay"
            value={replay}
            onChange={(event) => setreplay(event.target.value)}
            required
          />

          <button
            className="relative right-0 top-0 bottom-0 m-auto"
            onClick={addreplay}
          >
            Add
          </button>
      
    </div>
  )
}
