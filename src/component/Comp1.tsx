import React, { useState } from 'react'
import Comp2 from './Comp2'

function Comp1()
{
     const [data, setData] = useState<number>(5)
  return (
    
   ( <div>
        <div>this is component 1</div>
        <Comp2 data = {data} />
    </div>)
  )
}

export default Comp1