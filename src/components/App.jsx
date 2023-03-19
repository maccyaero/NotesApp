import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Notes from './Note';
import notes from "../notes";
import CreateArea from "./CreateArea";




function App (){
    return (<div>
<Header />
<CreateArea />

{notes.map(note => <Notes title = {note.title} content = {note.content} key = {note.key}/>)}
<Footer />

    </div>
        

    );
}
export default App; 