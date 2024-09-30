import React from 'react'

function App() {

  let homepage="Abhishek";
  let subject=["Maths","Science","English","Hindi"];
  let tags=[<h1>hey</h1>,<h2>boy</h2>];
  let profile={
    name:"Muskan",
    age:20,
    city:"Delhi",
    isEmployed:true
  }

  return (
    <div>

<h1 className='h-10 w-20 bg-red-700 mt-10 ml-10 rounded text-4xl'>hello</h1>

<h1 className='text-5xl'>asdfg {import.meta.env.VITE_API_KEY}</h1>
<h1 className='h-20px  bg-yellow-700 text-5xl'>{homepage}</h1>

<h1>{subject}</h1>
<h1>{tags}</h1>
<h1 className='text-5xl'>{profile.name}</h1>


    </div>
  )
}


export default App