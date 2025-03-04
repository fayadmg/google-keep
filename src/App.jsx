import InputArea from "./components/InputArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NoteItem from "./components/NoteItem";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  function handleClick(newNote) {
    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((value, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />

      <InputArea onClick={handleClick} />
      <div className="flex-note-item">
        {notes.map((noteItem, index) => {
          return (
            <NoteItem
              title={noteItem.title}
              content={noteItem.content}
              key={index}
              id={index}
              onClick={deleteNote}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
