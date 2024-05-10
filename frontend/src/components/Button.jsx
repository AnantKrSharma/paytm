
export function Button({inner, onclick}){

    return <div className="flex justify-center items-center m-2 border-blue-700 p-0 border-0 rounded-md shadow-md">
       
        <button onClick={onclick} className="bg-blue-950 text-white border-0 rounded-md shadow text-center text-sm p-3 h-full w-full transform transition-transform hover:scale-105">{inner}</button>
    
    </div>
} 
