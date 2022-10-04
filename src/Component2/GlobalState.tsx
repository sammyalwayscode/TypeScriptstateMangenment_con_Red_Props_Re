import { type } from "@testing-library/user-event/dist/type";
import React,{ createContext, PropsWithChildren } from "react"

interface User
{
    id: number;
    name: string;
    stack: string;
}

type userProfile = {
    data: User[];
    setData:React.Dispatch<React.SetStateAction<User[]>>
}

export const userContext= createContext<userProfile | null>(null)

export const GlobalUser: React.FC<PropsWithChildren> = ({children}) =>
{
    const [data, setData] = React.useState<User[]>([
       
    ])
     React.useEffect(() => {
    localStorage.setItem("userContext", JSON.stringify(data));
  }, [data]);
    
    return (
        <userContext.Provider value={{data, setData}}>
            {children} 
        </userContext.Provider>
    )
}