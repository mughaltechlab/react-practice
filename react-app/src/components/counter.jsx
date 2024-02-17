import React, { useState } from 'react'

function Counter() {
    let [a,inc] = useState(0);
  return (
      <div>
        <div>{a}</div>
        <button onClick={()=>inc(a+1)} className='bg-blue-200 py-2 px-4 rounded text-slate-800 font-semibold border border-white'>count</button>
      </div>
  )
}

export default Counter