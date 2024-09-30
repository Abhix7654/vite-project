import React from 'react'

function App() {

  let homepage="Abhishek";

  return (
    <div>

<h1 className='h-10 w-20 bg-red-700 mt-10 ml-10 rounded text-4xl'>hello</h1>

<h1 className='text-5xl'>asdfg {import.meta.env.VITE_API_KEY}</h1>
<h1 className='h-20px  bg-yellow-700 text-5xl'>{homepage}</h1>
    </div>
  )
}


export default App