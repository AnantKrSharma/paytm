import { Heading } from "../components/Heading"
import { Subheading } from "../components/Subheading"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function Signin(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    
    return <div className="flex justify-center items-center bg-neutral-500 h-screen">

        <div className="flex flex-col justify-center bg-neutral-100 border-0 rounded-md shadow-lg shadow-indigo-950">
        
            <Heading label={'Sign-In'}></Heading>

            <Subheading content={'Enter your credentials to Sign-In'}></Subheading>

            <Input label={'Email'} placeholder={'example@mail.com'} type={'email'} onchange={(e)=>{
                setUsername(e.target.value)
            }}></Input>

            <Input label={'Password'} placeholder={'Enter a strong password.'} type={'password'} onchange={(e)=>{
                setPassword(e.target.value)
            }}></Input>

            <div className="m-2">
                <Button inner={'Sign-In'} onclick={ async ()=>{
                    const res = await axios.post('https://paytm-two-theta.vercel.app/api/v1/user/signin'
                                    , {
                                        username,
                                        password
                                    })
                    
                    console.log(res.data);
                    localStorage.setItem('token', res.data.idToken)
                    
                    navigate('/dashboard')
                }}></Button>
            </div>

            <BottomWarning text={"Don't have an account?"} linkText={'Sign-Up'} to={'/signup'}></BottomWarning>

        </div>

    </div>
}
