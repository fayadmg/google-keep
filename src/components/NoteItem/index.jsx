import "./index.css";

function NoteItem(props) {
  return (
      <div
        className="note-item"
        onClick={() => {
          props.onClick(props.id);
        }}
      >
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    
  );
}

export default NoteItem;
