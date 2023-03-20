import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Notes from './Note';
import CreateArea from "./CreateArea";




function App (){
    const [notes, setNotes] = useState([]);

    function deleteNote(id){
        setNotes(prevValues => {
            return prevValues.filter((noteItem, index) => {
                return index !== id;
            })
        })

    }

    function addNote(newNote){
        setNotes(prevValue => {
            return [
                ...prevValue, 
                newNote
            ];
        })
        console.log(notes);
    }
    return (<div>
<Header />
<CreateArea onAdd={addNote} />

{notes.map((note,index) => <Notes onDelete={deleteNote} title = {note.title} content = {note.content} key = {index} id = {index}/>)}
<Footer />

    </div>
        

    );
}
export default App; 