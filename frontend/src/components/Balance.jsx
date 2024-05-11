
export function Balance({balance}){
    
    return <div className="flex [&>*]:m-1 border shadow mx-4 mb-4 p-2 rounded-lg bg-slate-100">
    
        <div className="font-bold border shadow-sm p-2 rounded-md">
            Your Balance - 
        </div>

        <div className="font-semibold text-blue-800 border shadow-sm p-2 rounded-md">
            {balance}
        </div>
    
    </div>
}
