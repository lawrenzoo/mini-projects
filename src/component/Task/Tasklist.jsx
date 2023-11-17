import React, { useState } from 'react'
import './Tasklist.css'
import Taskcard from '../Task/Taskcard'
import Addinput from './Addinput'

const Tasklist = () => {

    const [lists, setLists] =useState([]);

    const[toggle, setToggle] = useState(false);
    
    function handleToggle(){
        setToggle(!toggle)
    };

    //comparing both the lists in the usestate and the mapped list so as to compare them with a filter 
    const handleDelete =(id)=>{
        setLists(lists.filter((list)=>(list.id !== id)))
    }



  return (
    <>
    <div className='container2'>
        <Addinput lists={lists} setLists={setLists}/>
        <div className="tasklist-border">
            <div className="tasklist-header">
                <h3>Task List</h3>
                <button className='togglebtn' onClick={handleToggle}>Hide Tasks</button>
            </div>
            {!toggle && lists.map((list)=>(
            <Taskcard handleDelete={handleDelete} list={list} key={list.id}/>
            ))}
            
        </div>
    </div>
    </>
  )
}

export default Tasklist