import React, { useEffect, useState } from "react";
import './Keep.css'
import Note from "../Note/Note";

const getLocalStorageData = () =>{
    const data = localStorage.getItem('titleNote');
    if(data)
    {
        return(JSON.parse(data))
    }
    else{
        return [];
    }
}

const Keep = () => {
    const [showTitle, setShowTitle] = useState(false);

    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');

    const [titleNote, setTitleNote] = useState(getLocalStorageData);



    const addTitleNote = () =>{
        setTitleNote((prev)=>{
            return [...prev, {"title" : title, "note" : note, "id" : id}]
        })

        setId(id + 1);
        setTitle('');
        setNote('');
    }

    const deleteNote = (id) =>{
        setTitleNote(
            titleNote.filter((item)=>
            {
                return item.id != id
            })
        )
    }

    const editTitleNote = (id,newTitle,newNote, setEditNote) =>{
        const newTitleNote = titleNote.map((item)=>{
            if(item.id === id)
            {
                return{...item, title : newTitle, note : newNote}
            }
            return item;
        })
        setTitleNote(newTitleNote);
        setEditNote(false);
    }

    useEffect(() => {
      localStorage.setItem('titleNote', JSON.stringify(titleNote));
    }, [titleNote])
    

  return (
    <>
      {showTitle ? null :
      <div className="add-note">
        <input type="text" placeholder="Take a note..." 
            onClick={()=>{setShowTitle(true)}}
        />
      </div>
      }

      {showTitle ? <div className="title-note">
        <input type="text" placeholder="Title" 
            value={title}
            onChange={(e)=>{setTitle(e.target.value);}}
        />
        <input type="text" placeholder="Take a note..." 
            value={note}
            onChange={(e)=>{setNote(e.target.value);}}
        />
        <div className="add-close-btn">
            <button onClick={()=>{addTitleNote()}}>Add</button>
            <button onClick={()=>{setShowTitle(false)}}>Close</button>
        </div>
      </div>
      : null }


      <div className="flex">
            {titleNote.map((item,i)=>{
                return <Note key={i} title={item.title} note={item.note} deleteNote={deleteNote} id={item.id} editTitleNote={editTitleNote}></Note>
            })}
      </div>
    </>
  );
};

export default Keep;
