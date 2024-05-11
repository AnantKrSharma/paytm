export function Input({label, type, placeholder}){
    
    return <div className="flex flex-col m-2 [&>*]:m-1">
        
        <div className="text-sm font-semibold">
            {label} 
        </div>
        
        <input type={type}  placeholder={placeholder} className="border shadow-sm p-2 rounded-md"/>
    
    </div>
}
