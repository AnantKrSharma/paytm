import {Heading} from '../components/Heading'
import {Subheading} from '../components/Subheading'
import {Input} from '../components/Input'
import {Button} from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'

export default function Signup(){
    return <div className="flex justify-center items-center bg-neutral-500 h-screen">
        
            <div className='flex flex-col justify-center bg-neutral-100 border-0 rounded-md shadow-lg shadow-indigo-950'>
                
                    <Heading label={"Sign-Up"}></Heading>

                    <Subheading content={"Enter your details to create an account."}></Subheading>
                    
                    <Input label={'First Name'} type={'text'} placeholder={'Anant'}></Input>
                    <Input label={'Last Name'} type={'text'} placeholder={'Sharma'}></Input>
                    <Input label={'Email'} type={'email'} placeholder={'example@mail.com'}></Input>
                    
                    <div className="m-2">
                        <Button inner={'Sign-Up'} ></Button>
                    </div>

                    <BottomWarning text={'Already have an account?'} linkText={'Sign-In'} to={'/signin'}></BottomWarning>
            
            </div>

    </div>
}