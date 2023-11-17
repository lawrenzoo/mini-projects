import React from 'react'
import '../component/Todolist.css'

const Addtask = ({addshow,setAddshow,taskupdate,setTaskupdate}) => {

  function handleSubmit(e) {
    e.preventDefault();
    const date = new Date();
    const taskName = e.target.addtask.value.trim();
  
    //Check if the task name is empty
    if (taskName==="") {
      alert("field cannot be empty");
      return; // Don't add a task if the name is empty
    }

    if(taskupdate.id){
      const date = new Date()
      //comparing both the current state by mapping, id of the current state is equal to the result taskupdate clicked upon in a function
      //condition given within to change the updated value
      const updateTask = addshow.map((add)=>(add.id ===taskupdate.id?{...add, name:taskupdate.name, time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}:add))
      setAddshow(updateTask);
      setTaskupdate({});
    } else {
      const newTask = {
      id: date.getTime(),
      name: taskName,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    };
  
    // Update the addshow state with the new task
    setAddshow([...addshow, newTask]);
  
    // Clear the input field
    // e.target.addtask.value = "";
    setTaskupdate({});
    }
  
    
  }
  
  
  return (
    <form className='form-add' onSubmit={handleSubmit} >
      <input name='addtask' value={taskupdate.name || ""} className='input-add' type="text" placeholder='add task' autoComplete='off' maxLength={23} onChange={(e)=>setTaskupdate({...taskupdate, name:e.target.value})}/>
      <button className='addbtn' type='submit'>{taskupdate.id? "Update":"Add"}</button>
      
    </form>
  )
}

export default Addtask