import { useEffect, useState } from "react"
import { Input } from "./Input"
import { Button } from "./Button"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"

export function Users(){
    const [users, setUsers] = useState([])
    const [filterInput, setFilterInput] = useState('')

    useEffect(()=>{
        axios.get(`https://paytm-two-theta.vercel.app/api/v1/user/bulk?filter=${filterInput}`,{
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res=>{
            setUsers(res.data.users)
        })
    }, [filterInput])

    return <div className="flex-col border m-4 p-1 shadow rounded-lg bg-slate-100">
        
        <div className="font-semibold text-2xl m-3 border w-fit p-1 rounded-md shadow">
            Users
        </div>

        <Input label={'Search a user:'} type={'text'} placeholder={'Enter the name of the user'} onchange={(e)=>{
            setFilterInput(e.target.value)
        }}></Input>
        
        {users.map((item)=>{
            return <User account={item}></User>
        })}

    </div>
}

function User({account}){
    const navigate = useNavigate();

    return <div className="flex justify-between p-1 m-2">

                <div className="flex items-center [&>*]:m-1 [&>*]:p-1 border-0 rounded-lg shadow">
                        <div className="flex justify-center items-center border rounded-full h-8 w-8 bg-cyan-800 text-white">
                            {account.firstName.charAt(0)}
                        </div>

                        <div>{account.firstName} {account.lastName}</div>
                </div>

                <div className="p-0">
                    <Button inner={'Send Money'} onclick={()=>{
                        navigate(`/send?id=${account._id}&name=${account.firstName}`);
                    }}></Button>
                </div>

    </div>
}
