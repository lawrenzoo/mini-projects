import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar';
import Themecolor from '../Themecolor';
import Addtask from '../Addtask';
import Showtask from '../Showtask';



const Project4Page = () => {

  const [addshow, setAddshow]= useState(JSON.parse(localStorage.getItem("addshow")) || []);
  const [taskupdate, setTaskupdate] = useState({});

  useEffect(()=>{
    localStorage.setItem("addshow", JSON.stringify(addshow))
  },[addshow])

  return (
    <>
     <NavBar/>
     <Themecolor/>
     <Addtask addshow={addshow} setAddshow={setAddshow} taskupdate={taskupdate} setTaskupdate={setTaskupdate}/>
     <Showtask addshow={addshow} setAddshow={setAddshow} taskupdate={taskupdate} setTaskupdate={setTaskupdate}/>

    </>
  )
}

export default Project4Page