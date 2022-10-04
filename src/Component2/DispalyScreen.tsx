import React from 'react'
import {userContext} from "./GlobalState"

function DispalyScreen()
{
  const value = React.useContext(userContext)
  console.log(value?.data)
  return (
    <div>
      {
        value?.data.map((props) => (
          <div>
            {props.name}
         </div>
       ))
      }
    </div>
  )
}

export default DispalyScreen