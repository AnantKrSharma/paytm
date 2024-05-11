import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export default function Dashboard(){
    
    return <div className="overflow-hidden bg-gradient-to-r from-indigo-600 to-violet-900 h-screen">
        
        <div className="">

            <AppBar></AppBar>
           
            <Balance balance={'12,000'}></Balance>
           
            <Users></Users>

        </div>

    </div>
}
