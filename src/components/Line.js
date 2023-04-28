// import React from "react";
import SignOut from "./SignOut";
import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase.js";
import SendMessage from "./SendMessage.js";
function Line() {
  const [messages, setMessages] = useState([]);
  //   setmessageという関数を使って、messageという変数に入れる
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      {console.log(messages)}
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
              <SendMessage />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Line;
