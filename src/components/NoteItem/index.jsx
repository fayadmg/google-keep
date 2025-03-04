import "./index.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function NoteItem(props) {
  return (
    <div className="note-item">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      
      <DeleteOutlineIcon
      className="delete"
        onClick={() => {
          props.onClick(props.id);
        }}
      />
    </div>
  );
}

export default NoteItem;
