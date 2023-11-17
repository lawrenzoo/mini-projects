import React from 'react'
import '../component/Todolist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';


const Showtask = ({addshow,setAddshow,taskupdate,setTaskupdate}) => {
  // const taskitems =[
  //   {id:1, name:'task1', time:'1:59:13AM 9/14/2022'},
  //   {id:2, name:'task2', time:'2:59:13AM 10/14/2022'},
  //   {id:3, name:'task3', time:'1:59:13AM 9/11/2022'},
  //   {id:4, name:'task4', time:'1:59:13AM 9/14/2023'},
  //   {id:5, name:'task5', time:'1:59:13AM 9/14/2012'},
    
  // ]

  function handleEdit(id){
    const updateSelected = addshow.find((add)=>add.id === id)
    setTaskupdate(updateSelected)
  }

  //comparing both the id from the mapped list to id of the filtered list(remember that each higher order function so its always creating a new array for you)
  function handleDelete(id){
    const updateTasklist = addshow.filter((task)=>task.id !==id)
    setAddshow(updateTasklist);
    // console.log(updateTasklist)
  }

  return (
    <>
      <div className="show-body">
        <div className="show-top">
          <div className="todo-name">
            <h3>Todo</h3>
            <p>{addshow.length}</p>
          </div>
          <button onClick={()=>setAddshow([])} className='clearbtn'>Clear All</button>
        </div>
        <div className="show-task">
          <div className="grid-show">
            {
              addshow.map((todo)=>(
                <div className="grid-item" key={todo.id}>
                      <div className="show-tasklist">
                        <div className="task-content">{todo.name}</div>
                        <div className="task-icon">
                          <FontAwesomeIcon onClick={()=>handleEdit(todo.id)} icon={faEdit} style={{ color: 'red', fontSize: '22px', cursor:'pointer' }}/>
                          <FontAwesomeIcon onClick={()=>handleDelete(todo.id)} icon={faTrash} style={{ color: 'blue', fontSize: '22px', marginLeft:'5px', cursor:'pointer'}}/>
                        </div>
                      </div>
                      <p>{todo.time}</p>
                    </div> 
              ))
            }
                    
          </div>

        </div>
      </div>
    </>
  )
}

export default Showtask