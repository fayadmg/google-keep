import "./index.css";
import { useState } from "react";

function InputArea(props) {
  const [noteText, setNoteText] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNoteText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="input-area">
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={noteText.title}
        />
        <input
          type="text"
          name="content"
          onChange={handleChange}
          value={noteText.content}
        />
        <button
          onClick={(e) => {
            props.onClick(noteText);
            e.preventDefault();
            setNoteText({
              title: "",
              content: "",
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default InputArea;
