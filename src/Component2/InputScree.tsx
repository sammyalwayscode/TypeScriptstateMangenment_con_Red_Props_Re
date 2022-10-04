import React from 'react'
import {userContext} from "./GlobalState"

function InputScree()
{
    const value = React.useContext(userContext)
    const [name, setName]  = React.useState<string>("")
    const [stack, setStack] = React.useState<string>("")
    
    const addData = () =>
    {
        value?.setData((el) => [
            ...el,
            {
                id: Math.floor(Math.random() * 100),
                name: name,
                stack: stack
            }
        ])
    }
  return (
      <div>
          <input
              placeholder='name'
              value={name}
              onChange = {(e: React.ChangeEvent<HTMLInputElement>)=> setName(e.target.value) }
          />
          <br/>
          <input
              placeholder='stack'
              value={stack}
              onChange = {(e: React.ChangeEvent<HTMLInputElement>)=> setStack(e.target.value) }

          />
          <br/>
          <button onClick={addData}>submit</button>
      </div>
  )
}

export default InputScree