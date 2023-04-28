import React, { useState } from "react";
import { db, auth } from "../firebase.js";
import firebase from "firebase/compat/app";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import "firebase/firestore";

function SendMessage() {
  const [message, setMessage] = useState("");
  function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    e.preventDefault();
    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder="メッセージを入力してください"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
          />
          <SendIcon />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
