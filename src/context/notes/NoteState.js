import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:4000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjZTk3OWVkMjJhMWMyYjg1OTU5ZmJlIn0sImlhdCI6MTY3NDQ4MzY2NH0.3F38g8ZkeX8aI--KUVpeufB6hyhiX5FGQOCBwyqKR3I'
      },
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjZTk3OWVkMjJhMWMyYjg1OTU5ZmJlIn0sImlhdCI6MTY3NDQ4MzY2NH0.3F38g8ZkeX8aI--KUVpeufB6hyhiX5FGQOCBwyqKR3I'
      },
      body: JSON.stringify({title, description, tag})
    });

    const json = await response.json();
    console.log(json)
     

    console.log("Adding a new note")
    const note = {
      "_id": "63d0bb72268e58c7784a5a0655",
      "user": "63ce979ed22a1c2b859595fbe",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-01-25T05:17:38.404Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjZTk3OWVkMjJhMWMyYjg1OTU5ZmJlIn0sImlhdCI6MTY3NDQ4MzY2NH0.3F38g8ZkeX8aI--KUVpeufB6hyhiX5FGQOCBwyqKR3I'
      },
    });
    const json = response.json();
    console.log(json)

    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjZTk3OWVkMjJhMWMyYjg1OTU5ZmJlIn0sImlhdCI6MTY3NDQ4MzY2NH0.3F38g8ZkeX8aI--KUVpeufB6hyhiX5FGQOCBwyqKR3I'
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
    console.log(json)

     let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;