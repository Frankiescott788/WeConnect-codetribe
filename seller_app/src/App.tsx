import Navbar from './layouts/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './pages/home/hero'
import Signup from './pages/signup/signup'
import Dashboard from './layouts/dashboard,'
import Overview from './pages/dashboard/home/home'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />} >
        <Route index element={<Hero />} />
      </Route>
      <Route path='dashboard' element={<Dashboard />}>
        <Route index element={<Overview />}/>
      </Route>
      <Route path='/signup' element={<Signup />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
