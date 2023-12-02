import { useState } from "react";
import "./styles/App.css";
import Login from "./pages/auth/Login";

function App() {
  const [counter, setCounter] = useState(2);

  return (
    <>
      <div style={{ marginLeft: "15px" }}>UseState techniques</div>
      <div style={{ marginLeft: "15px" }}>{counter}</div>

      <div style={{ marginLeft: "15px" }}>
        <button>Incrementer</button>
      </div>
    </>
  );
}

export default App;
