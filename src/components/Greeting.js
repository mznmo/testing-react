import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  function handleTextChange() {
    setChangedText(true);
  }

  return (
    <div>
      <h1>Hello world</h1>
      {!changedText ? (
        <Output>It's good to see you</Output>
      ) : (
        <Output>New text</Output>
      )}
      <button onClick={handleTextChange}>Change text</button>
    </div>
  );
};

export default Greeting;
