import React, { useRef } from "react";
import Hover from "./components/Hover";
import useHover from "./hooks/useHover";

function App() {
  const ref = useRef();
  const isBlackHovering = useHover(ref);

  return (
    <div>
      <Hover />
      <div ref={ref} style={{ width: 300, height: 300, background: isBlackHovering ? 'blue' : 'black' }}>
      </div>
    </div>
  );
}

export default App;
