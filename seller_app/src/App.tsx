import Navbar from './layouts/navbar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Hero from './pages/home/hero'
import Signup from './pages/signup/signup'
import Dashboard from './layouts/dashboard,'
import Overview from './pages/dashboard/home/home'
import { useContext } from 'react'
import { Authcontext } from './context/authentication'
import Signin from './pages/signin/signin'
import Addproduct from './pages/newproduct/addproduct'

function App() {

  const { isAuthenticated, isLoading } = useContext(Authcontext);

  return isLoading ? <div>Loading</div> : (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />} >
        <Route index element={<Hero />} />
      </Route>
      <Route path='dashboard' element={ isAuthenticated ? <Dashboard /> : <Navigate to='/signup' />}>
        <Route index element={<Overview />}/>
        <Route path='newproduct' element={<Addproduct />}/>
      </Route>
      <Route path='/new' element={<Addproduct />}/>
      <Route path='/signup' element={ isAuthenticated ? <Navigate to='/dashboard' /> : <Signup />}/>
      <Route path='/signin' element={ isAuthenticated ? <Navigate to='/dashboard' /> : <Signin />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
