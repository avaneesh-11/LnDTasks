import { useState } from "react";

export const DisplayToggle=()=>{
    const [display,setDisplay]=useState(false);
  const [count,setCount]=useState(0);

  const toggleDisplay=()=>{
    setDisplay(!display);
    setCount(count+1);
    console.log(count);
  }

    return(
        <div>
            <button onClick={(e)=>toggleDisplay()}>display Text</button>
      <p className={display?"":"hide"}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    )
}