import { useState } from "react";


export const AddInput=()=>{
    const [curr,setCurr]=useState("");
  const [data,setData]=useState([]);

  

  const addData=()=>{
    if(curr){
      setData([...data,curr]);
      setCurr("");
    }else{
      alert("please fill the field")
    }
  }

  return(
    <div>
        <input type='text' value={curr} onChange={(e)=>setCurr(e.target.value)}/>
      <button onClick={(e)=>addData()}>Add</button>

      <div className="list">
        {data.map((item,index)=>{
          if((index+1)%5===0){
            return (<p key={index} className='blue listItem'>{item}</p>)
          }else{
            return (<p key={index} className="listItem">{item}</p>)
          }
        })}
      </div>
    </div>
  )
}