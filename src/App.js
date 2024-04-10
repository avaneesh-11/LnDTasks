import './App.css';
import {useState } from 'react';
import { DisplayToggle } from './components/DisplayToggle';
import { AddInput } from './components/AddInput';

function App() {

  const [task,setTask]=useState(1)
 
  return (
    <div className="App">
      <h1>Assigned Tasks</h1>
      <div className='taskDiv'>
        <h3 className='taskDivItem' onClick={()=>setTask(1)}>Task 1</h3>
        <h3 className='taskDivItem' onClick={()=>setTask(2)}>Task 2</h3>
      </div>
      {task===1 && <DisplayToggle/>}
      {task===2 && <AddInput/>}
    </div>
  );
}

export default App;
