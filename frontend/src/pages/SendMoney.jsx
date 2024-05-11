import { Input } from "../components/Input"

export default function SendMoney(){
   
    return <div className="bg-slate-300 overflow-hidden flex justify-center items-center h-screen">
        
        <div className="flex-col justify-center items-center border rounded-lg bg-white shadow p-2">

            <div className="flex justify-center items-center border shadow-sm rounded-lg text-2xl font-bold p-2 m-4 mb-10">
                <h2>Send Money</h2>
            </div>

            <div className="m-4 flex space-x-2 p-2 border shadow-sm rounded-lg">
                    <div className="flex justify-center items-center h-6 w-6 rounded-full bg-teal-600 text-white">
                        A
                    </div>

                    <div className="flex items-center font-semibold">
                        Name of Friend
                    </div>
            </div>

            <div className="m-4 border shadow-sm rounded-lg">
                <Input label={'Amount (in Rs)'} type={'number'} placeholder={'Enter amount'}></Input>
            </div>
            
            <div className="m-4 flex justify-center items-center ">
                <button className="p-2 font-semibold rounded-md bg-green-500 text-white transform transition-transform hover:scale-105">Initiate Transfer</button>
            </div>
       
        </div>
    
    </div>
}
