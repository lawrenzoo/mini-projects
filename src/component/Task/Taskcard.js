import React from 'react'
import './Tasklist.css'

const Taskcard = ({list, handleDelete}) => {


  return (
    <>
        <div key={list.id} className= {list.completed ?('completed') : ('incompleted')} >
                    <span>{list.id}-{list.name}</span>
                <button className='delete' onClick={()=>handleDelete(list.id)}>Delete</button>
        </div>
    </>
  )
}

export default Taskcard