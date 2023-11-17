import { useState } from 'react'
import '../Task/Tasklist.css'

const Addinput = ({lists, setLists}) => {

//input functions 
const [taskvalue, setTaskvalue]=useState("")
const [progress, setProgress]=useState(false)

function handleInput(e){
    setTaskvalue(e.target.value)
}

function handleReset(){
    setTaskvalue("")
}

function handleSubmit(event){
    event.preventDefault();
    const task={
        id:Math.floor(Math.random()*10000),
        name:taskvalue,
        completed:Boolean(progress)

    }
    setLists([...lists, task])
    handleReset()
    setProgress(false)
}


  return (
    <>
    
     <div className="addtask">
        <h2>Todo list version 1 </h2>
        <form onSubmit={handleSubmit}>
            <input onChange={handleInput} type="text" id='task' name='task' placeholder='Add Task'  autoComplete='off' value={taskvalue}/>
            <select id='select' onChange={(e)=>{setProgress(e.target.value)}}  value={progress}>
                <option value={'false'}>Pending</option>
                <option value={'true'}>Completed</option>
            </select>
            <div className='btn-parent'>
                <button type='submit' className='addtask2'>Add Task</button>
                <span onClick={handleReset} className='reset2'>Reset</span>
            </div>
            
        </form>
        
    </div>
    </>
  )
}

export default Addinput