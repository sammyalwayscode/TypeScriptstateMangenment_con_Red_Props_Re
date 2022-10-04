import React from "react"
import Comp3 from "./Comp3"
import { isReturnStatement } from "typescript"

type Props = {
    data:number
}


const Comp2:React.FC<Props> = ({data}) =>
{

    return (
        <div>
            <div>this is component 2</div>
            <Comp3 data={data} />
        </div>
    )
}

export default Comp2