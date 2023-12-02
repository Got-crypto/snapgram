import { Route, Routes } from 'react-router-dom'

import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import { Home } from './_root/pages'
import './globals.css'

export default function App() {
  return (
    <main className='flex h-screen'>
        <Routes>
            <Route path="/sign-in" element={<SigninForm />} />
            <Route path="/sign-up" element={<SignupForm />} />
            <Route index element={<Home /> } />
        </Routes>
    </main>
  )
}
