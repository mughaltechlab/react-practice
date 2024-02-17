import React, { useState } from 'react'
import Nav from './components/Nav'
import Counter from './components/counter'

function App() {
  // let [a,b] = useState();s
  return (
    <div className='bg-zinc-50 w-full h-screen'>
      <Nav />
      <Counter />
    </div>
  )
}

export default App