import React, { useState } from "react";
import "./Note.css";
import EditNote from "../EditNote/EditNote";

const Note = (props) => {
  const [editNote, setEditNote] = useState(false);

  return (
    <>
      <div className="note" onClick={() => {setEditNote(true)}}>
        <h2>{props.title}</h2>
        <hr />
        <p>{props.note}</p>
        <button onClick={(e) => {props.deleteNote(props.id); e.stopPropagation();}}>Delete</button>
      </div>

      {editNote ? <EditNote setEditNote={setEditNote} title={props.title} note={props.note} id={props.id} deleteNote={props.deleteNote} editTitleNote={props.editTitleNote}></EditNote> : null}
    </>
  );
};

export default Note;
