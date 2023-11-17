import React, { useState } from 'react'
import '../Addsub/AddSub.css'

function AddSub() {
    const [click, setClick]= useState(0);

//using a function and also handling the limitation of the value, it should not exceed the number above 10 (positive infinity)
    function handleAdd(){
        setClick(click + 1)
        if(click === 10){
            setClick(click)
            alert('Limited Between 0-10')
        }
    }

    //using a function and also handling the limitation of the value, it should not exceed the number below 0(negative infinity)
    function handleSub(){
        setClick(click - 1)
        if(click === 0){
            setClick(click)
            alert('Limited Between 0-10')
        }
    }
    function handleReset(){
        setClick(0)
    }
  return (
    <>
    <div className='container1'>
        <div className='title1'>
            <h2>INCREMENT AND DECREMENT </h2>
        </div>
        <div className="box">
            <p>{click}</p>
            <div className='add-sub'>
                <button onClick={handleAdd} className='add'>ADD</button>
                <button onClick={handleSub} className='sub'>SUB</button>
            </div>
            <button onClick={handleReset} className='reset'>RESET</button>
        </div>
    </div>
    
    </>
  )
}

export default AddSub