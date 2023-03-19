import React,{useState} from 'react';
function CreateArea(){
    const[note, setNote] = useState({
        title : "",
        content : ""
    })
function handleChange(event){
    const{name, value}=event.target;

}
return <div>
    <form>
        <input name="title" value={note.title} placeholder='Title' onChange={handleChange}></input>
        <textarea name="content" value={note.content} placeholder='Take a note...' rows='3' onChange={handleChange}></textarea>
        <button>Add</button>
    </form>
</div>
}
export default CreateArea;