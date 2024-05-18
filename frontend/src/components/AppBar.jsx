import { useNavigate } from "react-router-dom"

export function AppBar(){
    
    const navigate = useNavigate();

    return <div className="flex justify-between items-center border-0 rounded-lg shadow-md m-4 p-1 mb-20 bg-slate-100">
       
        <div className="text-blue-700 text-xl font-bold transform transition-transform hover:scale-90 hover:text-cyan-950 hover:cursor-pointer m-2">
            PayTM App
        </div>

        <div className="flex justify-center items-center [&>*]:m-2">
            <div >
                Hello, User
            </div>

            <div>
                <button className="bg-red-600 border p-2 text-white rounded-lg shadow transform transition-transform hover:scale-105" onClick={()=>{
                    navigate('/signin')
                    localStorage.removeItem('token')
                }}>Log-out</button>
            </div>
        </div>
    
    </div>
}
