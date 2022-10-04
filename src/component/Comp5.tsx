import React from "react"


import { isReturnStatement } from "typescript"
type Props = {
    data:number
}

const Comp5:React.FC<Props> = ({data}) =>
{
    return (
        <div>
            this is come i
            {data}

        </div>
    )
}

export default Comp5