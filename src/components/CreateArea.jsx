import React,{useState} from 'react';
function CreateArea(props){
    const[note, setNote] = useState({
        title : "",
        content : ""
    })
    function handleChange(event){
    const{name, value}=event.target;
    setNote(prevNote => {
        return {
            ...prevNote, 
            [name] : value
        }
    });
    
}
function submitEvent(event){
    event.preventDefault(); //This function stops the page from reloading when button is clicked. 
    props.onAdd(note);
}
return <div>
    <form>
        <input name="title" value={note.title} placeholder='Title' onChange={handleChange}></input>
        <textarea name="content" value={note.content} placeholder='Take a note...' rows='3' onChange={handleChange}></textarea>
        <button onClick={submitEvent}>Add</button>
    </form>
</div>
}
export default CreateArea;
