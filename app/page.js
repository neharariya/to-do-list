"use client";

import React,{useState} from 'react'

const page = () => {


  const [title,settitle] = useState("");
  const [desc,setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const deletehandler= (i)=>{
    
       let copytask = [...mainTask];
       copytask.splice(i);
       setMainTask(copytask);

    
  }

  const submithandler = (e) => {

       e.preventDefault()
       setMainTask([...mainTask,{title,desc}]);
       settitle("");
       setdesc("");
       console.log(mainTask);

  };

  let rendertask = <h2 className="text-blue-800 ">No task available</h2>;

  if(mainTask.length>0)
  {
 
  rendertask = mainTask.map((task,i)=>{
 
      return(
              <li key = {i} className="flex justify-between mb-8">
                <div className="flex justify-between mb-5 w-2/3
                 ">
                  <h5 className=" text-2xl text-blue-700">{task.title}</h5>
                  <h6 className=" text-xl text-blue-700">{task.desc}</h6>
                </div>
                <button onClick = {()=>{
                  deletehandler(i)
                }} className="bg-teal-900 h-16 w-24 text-white font-bold p-3 rounded-xl">Delete</button>
              </li> 

       );
  });

};





  return (

    


    <>
    
    <h1 className="bg-teal-900 rounded-2xl flex items-center justify-center font-black h-16 m-3 text-white text-2xl">TO DO LIST</h1>

    <form  onSubmit={submithandler}  >

      <input  
        type="text" 
        placeholder="Enter title here" 
        required
        value = {title}
        onChange = {(e)=>{
          settitle(e.target.value)
           console.log(title)}

        }
        className="bg-teal-100 h-24 text-xl text-black rounded-xl ml-5 mt-5 text-center">
      </input>

      <input 
        type ="text" 
        placeholder="Enter description here" 
        value = {desc}
        onChange = {(e)=>{
          setdesc(e.target.value)
           console.log(desc)}
        }
        className="bg-teal-100 h-24 text-xl text-black rounded-xl ml-10 mt-5 text-center">
      </input>

      <button className="bg-teal-800 font-bold h-16 ml-12 rounded-xl text-white text-xl w-36">Add Task</button>

    </form>

   
    <div className="bg-teal-100  m-10 p-8 rounded-xl">
      <ul>{rendertask}</ul>
    </div>

    </>
  );
};

export default page