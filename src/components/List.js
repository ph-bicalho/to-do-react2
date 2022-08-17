import react from "react";

function DoneImg(props){
  if (props.done){
    return (<img src="./assets/on.png" alt="done"></img>)
  }else {
    return(<img src="./assets/off.png" alt="undone"></img>)
  }
}



function List(props) {
  
    return(<ul>
      {props.items.map(item=>

        <li className={item.done? "done item": "item"} key={item.id}>
          {item.text}
          <div>
          <button onClick={() => {props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
          <button onClick={() => {props.onItemDeleted(item)}}><img src="./assets/lixeira1.png" alt="delete item"></img></button>
          </div>
        </li>
     )}
      
    </ul>)
}

export default List