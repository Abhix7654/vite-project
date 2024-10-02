import React, { useState } from 'react'

function App() {

  let homepage="Abhishek";
  let subject=["Maths","Science","English","Hindi"];
  let tags=[<h1>hey</h1>,<h2>boy</h2>];
  let profile={
    name:"Rahul",
    age:20,
    city:"Delhi",
    isEmployed:true
  }

  const user=[{
    name:"Muskan",
    age:20,
    city:"Delhi",
    isEmployed:true
  },{
    name:"Abhishek",
    age:21,
    city:"bhopal",
    isEmployed:false
  },
  {
    name:"Muskan",
    age:20,
    city:"Delhi",
    isEmployed:true
  }];

  const userlist= user.map((user,index)=>{
    return(
      <div key={index}>
        <h1 className='bg-slate-200 text-2xl '>{user.name}</h1>
        <h1>{user.age}</h1>
        <h1>{user.city}</h1>
        <h1 className='bg-white'>{user.isEmployed}</h1>

        
      </div>
    )
  })
  
  const ClickHandler=(smg)=>{
    settitle("hey boy")
  console.log(smg);
  }

  const wrapper=()=>{
    ClickHandler("hlw");
  }

  const [title,settitle]=useState("hello Everyone");
  const SubmitHandler=(e)=>{
    e.preventDefault();
    console.log(e.target.username.value);
  }

  return (
    <div>

<h1 className='h-10 w-20 bg-red-700 mt-10 ml-10 rounded text-4xl'>hello</h1>

<h1 className='text-5xl'>asdfg {import.meta.env.VITE_API_KEY}</h1>
<h1 className='h-20px  bg-yellow-700 text-5xl'>{homepage}</h1>

<h1>{subject}</h1>
<h1>{tags}</h1>
<h1 className='text-5xl'>{profile.name}</h1>

{userlist}

<button onClick={wrapper} className='bg-red-400 rounded px-4 py-2'>submit</button>
<h1 className='text-5xl'>{title}</h1>

<form onSubmit={SubmitHandler}>
  <input type="text" placeholder='username' name='username'/>
  <br />
  <button  className='bg-red-400 rounded px-4 py-2'>submit</button>
</form>

    </div>
  )
}


export default App