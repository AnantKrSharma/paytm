export function AppBar(){
    
    return <div className="flex justify-between border-0 rounded-xl shadow-md m-2 mb-10 bg-slate-100">
       
        <div className="text-blue-800 text-xl font-bold transform transition-transform hover:scale-90 hover:text-blue-900 hover:cursor-pointer m-2">
            PayTM App
        </div>

        <div className="flex justify-between [&>*]:m-2">
            <div >
                Hello,
            </div>
            <div>
                User
            </div>
        </div>
    
    </div>
}
