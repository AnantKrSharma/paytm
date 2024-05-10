export function Input({label, type, placeholder}){
    return <div className="flex flex-col mx-6 mt-2">
        
        <label htmlFor="inputBox" className="text-sm font-semibold my-2">
            {label} 
        </label>
        
        <input id='inputBox' type={type}  placeholder={placeholder} className="shadow-md px-2 py-1 rounded w-auto"/>
    
    </div>
}
