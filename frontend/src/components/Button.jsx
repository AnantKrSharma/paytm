
export function Button({inner, onclick}){

    return <div className="flex justify-center items-center m-7 border-blue-700">
        <button onClick={onclick} className="bg-blue-950 text-white border rounded-md shadow text-center text-sm p-2 w-64 transform transition-transform hover:scale-110">{inner}</button>
    </div>
} 
