import axios from "axios"
import { useEffect, useState } from "react"

export function Balance(){
    
    const [currentUser, setCurrentUser] = useState('')
    const [currentBalance, setCurrentBalance] = useState('')

    useEffect(()=>{
        axios.get('https://paytm-two-theta.vercel.app/api/v1/account/balance', {
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`
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
