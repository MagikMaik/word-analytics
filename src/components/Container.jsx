import Textarea from "./Textarea";
import Stats from "./Stats";
import { useState } from "react";

export default function Container() {
  const [textarea, setTextarea] = useState("");
  const numberOfCharacters= textarea.length;
  const numberOfWords = textarea.split(/\s/).filter((word) => word !== "").length;
  return (
    <main className="container">
      <Textarea textarea={textarea} setTextarea={setTextarea}/>
      <Stats numberOfCharacters={numberOfCharacters} numberOfWords={numberOfWords}/>
    </main>
  );
}
