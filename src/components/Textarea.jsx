import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({textarea, setTextarea}) {
  
  const [warningtext, setWarningtext] = useState("");
  

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setWarningtext("No scripts bro");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningtext("No special syms bro");
      newText = newText.replace("@", "");
    } else {
      setWarningtext("");
    }
    setTextarea(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={textarea}
        spellCheck="false"
        placeholder="Text here ..."
        onChange={handleChange}
      />
      {warningtext ? <Warning warningtext={warningtext} /> : null}
    </div>
  );
}
