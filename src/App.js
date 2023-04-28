import SignIn from "./components/SignIn";
import Line from "./components/Line";
import SignOut from "./components/SignOut";

// import "firebase/compat/auth";
// import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";
import "./App.css";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? <Line /> : <SignIn />}
      <SignOut />
    </div>
  );
}

export default App;
