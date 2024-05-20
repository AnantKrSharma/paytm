import { Suspense, lazy } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import { Signup } from './pages/Signup'
// import { Signin } from './pages/Signin'
// import { Dashboard } from './pages/Dashboard'
// import { SendMoney } from './pages/SendMoney'
import { Loading } from './components/Loading'
const Signup = lazy( () => import('./pages/Signup')) 
const Signin = lazy( () => import('./pages/Signin')) 
const Dashboard = lazy( () => import('./pages/Dashboard')) 
const SendMoney = lazy( () => import('./pages/SendMoney')) 
const Main = lazy(()=> import('./pages/Main'))

function App() {

  return <div>
    <BrowserRouter>

        <Routes>

            <Route path='/' element={<Suspense fallback={<Loading/>}> <Main/> </Suspense>}></Route>

            <Route path='/signup' element={<Suspense fallback={<Loading/>}> <Signup/> </Suspense>}></Route>
            
            <Route path='/signin' element={<Suspense fallback={<Loading/>}> <Signin/> </Suspense>}></Route> 
            
            <Route path='/dashboard' element={<Suspense fallback={<Loading/>}> <Dashboard/> </Suspense>}></Route>
            
            <Route path='/send' element={<Suspense fallback={<Loading/>}> <SendMoney/> </Suspense>}></Route>

        </Routes>
    
    </BrowserRouter>
  </div>
}

export default App
