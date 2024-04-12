import React, { useState } from 'react'
import './EditNote.css'

const EditNote = (props) => {
    let [newTitle, setNewTitle] = useState(props.title);
    let [newNote, setNewNote] = useState(props.note);

    const id = props.id;

  return (
    <div className='popup'>
    <div className='edit-note'>
        <button className='close-btn' onClick={()=>{props.setEditNote(false)}}>X</button>
        <input type='text' 
            className='heading-input'
            value={newTitle}
            onChange={(e)=>{setNewTitle(e.target.value);}} 
        />
        <hr />
        <input type='text' 
            value={newNote}
            className='note-input'
            onChange={(e)=>{setNewNote(e.target.value);}} 
        />
        <button className='save-btn' onClick={()=>{props.editTitleNote(id, newTitle, newNote, props.setEditNote)}}>Save</button>
        <button className='dlt-btn' onClick={() =>{props.deleteNote(props.id)}}>Delete</button>
    </div>
    </div>
  )
}

export default EditNote