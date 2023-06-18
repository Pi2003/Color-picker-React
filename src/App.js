import React, { useState } from "react";
import { SketchPicker } from "react-color";
import "./App.css";
export default function App() {
  const [color, setColor] = useState("lightblue");
  const [hidden, setHidden] = useState(false);
  const pickerStyle = {
    default: {
      picker: {
        position: "absolute",
        bottom: "30px",
        left: "100px"
      }
    }
  };
  return (
    <div className="App" style={{ background: color }}>
      <div className="container">
        {hidden && (
          <SketchPicker
            styles={pickerStyle}
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        )}

        <button onClick={() => setHidden(!hidden)}>
          {hidden ? "Close Color Picker" : "Open Color Picker"}
        </button>
      </div>
    </div>
  );
}