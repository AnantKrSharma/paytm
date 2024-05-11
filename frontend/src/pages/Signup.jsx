import {Heading} from '../components/Heading'
import {Subheading} from '../components/Subheading'
import {Input} from '../components/Input'
import {Button} from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'
import { useState } from 'react'
import axios from 'axios'

export default function Signup(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    return <div className="flex justify-center items-center bg-neutral-500 h-screen">
        
            <div className='flex flex-col justify-center bg-neutral-100 border-0 rounded-md shadow-lg shadow-indigo-950'>
                
                    <Heading label={"Sign-Up"}></Heading>

                    <Subheading content={"Enter your details to create an account."}></Subheading>
                    
                    <Input label={'First Name'} type={'text'} placeholder={'Anant'} onchange={(e)=>{
                        setFirstName(e.target.value)
                    }}></Input>
                    
                    <Input label={'Last Name'} type={'text'} placeholder={'Sharma'} onchange={(e)=>{
                        setLastName(e.target.value)
                    }}></Input>
                    
                    <Input label={'Email'} type={'email'} placeholder={'example@mail.com'} onchange={(e)=>{
                        setUsername(e.target.value)
                    }}></Input>

                    <Input label={'Password'} type={'password'} placeholder={'example@mail.com'} onchange={(e)=>{
                        setPassword(e.target.value)
                    }}></Input>
                    
                    <div className="m-2">
                        <Button inner={'Sign-Up'} onclick={()=>{
                            axios.post('http://localhost:3000/api/v1/user/signup',
                                {
                                    firstName,
                                    lastName,
                                    username,
                                    password
                                })
                        }}></Button>
                    </div>

                    <BottomWarning text={'Already have an account?'} linkText={'Sign-In'} to={'/signin'}></BottomWarning>
            
            </div>

    </div>
}
