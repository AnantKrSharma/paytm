import {Heading} from '../components/Heading'
import {Subheading} from '../components/Subheading'
import { Input } from '../components/Input'

export default function Signup(){
    return <div className="flex justify-center items-center bg-neutral-500 h-screen">
        
            <div className='flex flex-col justify-center bg-neutral-100 border-0 rounded-md'>
                
                    <Heading label={"Sign-Up"}></Heading>

                    <Subheading content={"Enter your details to create a new account."}></Subheading>
                    
                    <Input label={'First Name'} type={'text'} placeholder={'Anant'}></Input>
                    <Input label={'Last Name'} type={'text'} placeholder={'Sharma'}></Input>
                    <Input label={'Email'} type={'email'} placeholder={'anant@mail.com'}></Input>
                    
                    
            
            
            </div>

    </div>
}
