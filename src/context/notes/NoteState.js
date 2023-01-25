import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    
    const notesInitial = [
        {
          "_id": "63ce9ad6370b60eacce7e05d",
          "user": "63ce979ed22a1c2b85959fbe",
          "title": "My Title2",
          "description": "Please wake up2",
          "tag": "personal",
          "date": "2023-01-23T14:33:58.691Z",
          "__v": 0
        },
        {
          "_id": "63d0bb6f268e58c7784aa063",
          "user": "63ce979ed22a1c2b85959fbe",
          "title": "My Title233",
          "description": "Please wake up233snfldjf",
          "tag": "personal",
          "date": "2023-01-25T05:17:35.379Z",
          "__v": 0
        },
        {
          "_id": "63d0bb72268e58c7784aa065",
          "user": "63ce979ed22a1c2b85959fbe",
          "title": "My Title233",
          "description": "Please wake up233snfldjf",
          "tag": "personal",
          "date": "2023-01-25T05:17:38.404Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)


    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;