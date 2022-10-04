import React from "react"
import Comp4 from "./Comp4"


import { isReturnStatement } from "typescript"

type Props = {
  data:number
}

const Comp3:React.FC <Props> = ({data}) =>
{
    return (
        <div>
            <div> this is component 3</div>
            <Comp4 data={data} />
       
        </div>)
}

export default Comp3