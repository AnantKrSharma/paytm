import axios from "axios"
import { useEffect, useState } from "react"

export function Balance({balance}){
    
    const [currentUser, setCurrentUser] = useState('')
    const [currentBalance, setCurrentBalance] = useState('')

    useEffect(()=>{
        axios.get('http://localhost:3000/api/v1/account/balance', {
            headers:{
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NjQ3ODlhZWE4YmZkZjAxMjg0YTI0MGYiLCJpYXQiOjE3MTU5NjU1NzN9.11azbHGJFSjZHLCUlgzCZpJZ1zRiPLj65K8BgJi20cI"
            }
        }).then((res)=>{
            const name = `${res.data.firstName} ${res.data.lastName}`
            setCurrentUser(name)
            setCurrentBalance(res.data.balance)
        })
    },[currentUser, currentBalance])

    return <div className="flex justify-between [&>*]:m-1 border shadow mx-4 mb-4 p-2 rounded-lg bg-slate-100">
        
                <div className="flex justify-center items-center [&>*]:p-2 [&>*]:m-1">
                    <p className="font-semibold text-lg border rounded-lg shadow">You :</p>
                    <p className="font-semibold text-lg border rounded-lg shadow  text-blue-700">{currentUser}</p>
                </div>

                <div className="flex [&>*]:m-1">
                    <div className="font-semibold border shadow-sm p-2 rounded-md">
                        Your Balance - 
                    </div>

                    <div className="font-semibold text-blue-700 border shadow-sm p-2 rounded-md">
                        {currentBalance}
                    </div>
                </div>
    
    </div>
}
