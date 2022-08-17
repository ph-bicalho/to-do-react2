import react, {useState} from "react";


function TodoForm(props){
    const [text, setText] = useState("");
    
    function handleChange(event) {
      let t = event.target.value;
      setText(t);
    }
  
    function addItem(event) {
      if (text){
        event.preventDefault();
        props.onAddItem(text);
        setText("");
      }
    } 
  
    return ( 
      <form>
        <input  value={text} onChange={handleChange} type="text"></input>
        <button onClick={addItem}>Add</button>
      </form>
    )
  }

  export default TodoForm