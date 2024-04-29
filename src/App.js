import { useState, useEffect, useCallback } from "react";
import "./styles.css";

export default function App() {
  const [state1, setState1] = useState(1);
  const [state2, setState2] = useState(1);

  useEffect(() => {
    console.log({ state1, state2 });
  }, [state2]);

  const runOnButton2 = useCallback(() => {
    console.log({ state1, state2 });
  }, [state2]);

  return (
    <div className="App">
      <button onClick={() => setState1((prev) => prev + 1)}>setState1</button>
      <button
        onClick={() => {
          setState2((prev) => prev + 1);
        }}
      >
        setState2
      </button>
      <button onClick={runOnButton2}>runOnButton2</button>
    </div>
  );
}
