import { Link } from "react-router-dom"


export function BottomWarning({text, linkText, to}){
    
    return <div className="flex border p-1 m-2 -mt-2 text-sm justify-center">
        
        <div className="m-1">
            {text}
        </div>

        <Link to={to} className="m-1 text-blue-700 underline underline-offset-2">
            {linkText}
        </Link>

    </div>
}
