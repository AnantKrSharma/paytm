import { Heading } from "../components/Heading"
import { Subheading } from "../components/Subheading"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"


export default function Signin(){
    
    return <div className="flex justify-center items-center bg-neutral-500 h-screen">

        <div className="flex flex-col justify-center bg-neutral-100 border-0 rounded-md shadow-lg shadow-indigo-950">
        
            <Heading label={'Sign-In'}></Heading>

            <Subheading content={'Enter your credentials to Sign-In'}></Subheading>

            <Input label={'Email'} placeholder={'example@mail.com'}></Input>
            <Input label={'Password'} placeholder={'Enter a strong password.'}></Input>

            <Button inner={'Sign-In'}></Button>

            <BottomWarning text={"Don't have an account?"} linkText={'Sign-Up'} to={'/signup'}></BottomWarning>

        </div>

    </div>
}
