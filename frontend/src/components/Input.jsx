export function Input({label, type, placeholder}){
    return <div className="flex flex-col m-2 [&>*]:m-1">
        
        <label htmlFor="inputBox" className="text-sm font-semibold">
            {label} 
        </label>
        
        <input id='inputBox' type={type}  placeholder={placeholder} className="border shadow-sm p-2 rounded-md"/>
    
    </div>
}
