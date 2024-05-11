import { useState } from "react"
import { Input } from "./Input"
import { Button } from "./Button"

export function Users(){
    const [users, setUsers] = useState([
        {
            firstName: "Anant",
            lastName: "Sharma",
            _id: 1
        },
        {
            firstName: "Harshita",
            lastName: "Khatri",
            _id: 2
        }
    ])

    return <div className="flex-col border-0 border-neutral-300 m-4 p-1 shadow rounded-lg bg-slate-100">
        
        <div className="font-bold text-xl mx-2 border w-fit p-1 rounded-md shadow-md">
            Users
        </div>

        <Input label={'Search a user:'} type={'text'} placeholder={'Enter the name of the user'}></Input>
        
        {users.map((item)=>{
            return <User account={item}></User>
        })}

    </div>
}

function User({account}){
    return <div className="flex justify-between p-1 m-2">

            <div className="flex items-center [&>*]:m-1 [&>*]:p-1 border-0 rounded-lg shadow">
                    <div className="flex justify-center items-center border rounded-full h-8 w-8 bg-cyan-800 text-white">
                        {account.firstName.charAt(0)}
                    </div>

                    <div>{account.firstName} {account.lastName}</div>
            </div>

            <div className="p-0">
                <Button inner={'Send Money'}></Button>
            </div>

    </div>
}
