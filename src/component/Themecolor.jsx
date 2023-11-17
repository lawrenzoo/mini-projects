import React, { useState, useEffect} from 'react'
import '../component/Todolist.css'

const Themecolor = () => {

  const [clickcolor, setClickcolor] = useState(JSON.parse(localStorage.getItem("clickcolor"))||'white');


  useEffect(() => {
    localStorage.setItem("clickcolor", JSON.stringify(clickcolor));
    document.documentElement.removeAttribute('class')
    document.documentElement.classList.add(clickcolor);
  },
   [clickcolor])
  

  


  return (
    <>
    <div className="themesbody">
      <div className="themeselector">
        <span onClick={()=>setClickcolor('white')} className={clickcolor==='white'?'white activethemes':'white'}></span>
      <span onClick={()=>setClickcolor('ash')} className={clickcolor==='ash'?'ash activethemes':'ash'}></span>
        <span onClick={()=>setClickcolor('randomOne')} className={clickcolor==='randomOne'?'randomOne activethemes':'randomOne'}></span>
        <span onClick={()=>setClickcolor('randomTwo')} className={clickcolor==='randomTwo'?'randomTwo activethemes':'randomTwo'}></span>
      </div>
    </div>
    <h2 className='todolisttwo'>Todo-List 2.0</h2>
    </>
  )
}

export default Themecolor