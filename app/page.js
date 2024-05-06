"use client"
import React, { useState } from 'react'



const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(title, desc);

    setmainTask([...mainTask, {title , desc}]);
    console.log(mainTask);
    settitle("")
    setdesc("")
  }

  const deleteHandler = (index) => {
    let copytask = [...mainTask]
    copytask.splice(index, 1)
    setmainTask(copytask)
  }


  let renderTask = <h2>NO Task Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, index)=>{
      return (
        <li className='flex items-center justify-around'>
          <div className='flex items-center justify-between w-[40vw] gap-5'>
            <h1 className='text-[1.4vw] font-semibold max-w-[20vw] overflow-hidden whitespace-normal'>{task.title}</h1>
            <h2 className='text-[1vw] font-medium max-w-[20vw] overflow-hidden whitespace-normal'>{task.desc}</h2>
          </div>
          <button onClick={()=>{deleteHandler(index)}}><i class="ri-close-circle-fill text-[2vw] text-red-500"></i></button>
        </li>
      )
    })  
  }
  
  return (
    <>
      <h1 className='text-[4vw] font-semibold text-center'>TO DO TODO TOTOTODO LIST</h1>
      <form onSubmit={submitHandler}>
        <input type='text'
        placeholder='Enter ur Task' 
        className='px-4 py-2 m-5 font-medium border-2 rounded border-zinc-800 text-zinc-600'
        value = {title}
        onChange={(e)=>{settitle(e.target.value)}}
        ></input>
        <input type='text'
        placeholder='Enter ur Discription' 
        className='px-4 py-2 m-5 font-medium border-2 rounded border-zinc-800 text-zinc-600'
        value = {desc}
        onChange={(e)=>{setdesc(e.target.value)}}
        ></input>
        <button className='bg-black text-white text-[2vh] rounded px-4 py-2 font-bold'>Add Task</button>
      </form>

      <hr></hr>

      <div className='p-5 bg-zinc-300'>
        <ul>{renderTask}</ul>
      </div>
    </>
  )
}

export default page