import React from 'react'
import { useDispatch } from "react-redux"
import { addNewTask, addTask } from "./ReduxState"

interface A
{
    id: number;
    job: string;
}

function InputScreen()
{
    const dispatch = useDispatch()
    const [stack, setStack] = React.useState<string>("")

    const addJobs = () =>
    {
        const data: A = {
            id: Math.floor(Math.random() * 100),
            job: stack
        };

        dispatch(addNewTask(data))
        setStack("")
    }



  return (
      <div>
          <br />
            <input
              placeholder='stack'
              value={stack}
              onChange = {(e: React.ChangeEvent<HTMLInputElement>)=> setStack(e.target.value) }

          />
          <br/>
          <button onClick={addJobs}>submit</button>
          
    </div>
  )
}

export default InputScreen