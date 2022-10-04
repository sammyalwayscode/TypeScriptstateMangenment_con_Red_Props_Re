import React from "react"
import Comp5 from "./Comp5"


import { isReturnStatement } from "typescript"

type Props = {
  data:number
}

const Comp4: React.FC<Props> = ({ data }) =>
{
    return (
        <div>
            <div> this is component 3</div>
            <Comp5 data={data} />
       
        </div>
    )
}

export default Comp4