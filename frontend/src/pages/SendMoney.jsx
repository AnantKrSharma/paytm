import { useState } from "react";
import { Input } from "../components/Input"
import { useSearchParams } from "react-router-dom"
import axios from "axios";

export default function SendMoney(){
    
    // a hook given by react-router-dom to get access to values from the query parameters.
    const [searchParams] = useSearchParams(); 
    const id = searchParams.get('id');
    const name = searchParams.get('name')

    const [amount, setAmount] = useState();

    return <div className="bg-slate-300 overflow-hidden flex justify-center items-center h-screen">
        
        <div className="flex-col justify-center items-center border rounded-lg bg-white shadow p-2">

            <div className="flex justify-center items-center border shadow-sm rounded-lg text-2xl font-bold p-2 m-4 mb-10">
                <h2>Send Money</h2>
            </div>

            <div className="m-4 flex space-x-2 p-2 border shadow-sm rounded-lg">
                    <div className="flex justify-center items-center h-6 w-6 rounded-full bg-teal-600 text-white">
                        {name.charAt(0)}
                    </div>

                    <div className="flex items-center font-semibold">
                        {name}
                    </div>
            </div>

            <div className="m-4 border shadow-sm rounded-lg">
                <Input label={'Amount (in Rs)'} type={'number'} placeholder={'Enter amount'} onchange={(e)=>{
                    setAmount(Number(e.target.value))
                }}></Input>
            </div>
            
            <div className="m-4 flex justify-center items-center ">
                <button className="p-2 font-semibold rounded-md bg-green-500 text-white transform transition-transform hover:scale-105" onClick={async ()=>{
                    await axios.post('http://localhost:3000/api/v1/account/transfer'
                        ,{
                            to: id,
                            amount: amount
                        },
                        {
                            headers: {
                                'Authorization': `Bearer ${localStorage.getItem('token')}`
                            }
                        }
                    )

                    alert("Transfer successfull.")
                }}>Initiate Transfer</button>
            </div>
       
        </div>
    
    </div>
}
