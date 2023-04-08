import Home from "./Components/Home"
import Pembelajaran from "./Components/Pembelajaran"
import Info from "./Components/Info"
import AdminDasboard from "./Components/AdminDasboard"
import AdminUpload from "./Components/AdminUpload"
import AdminEditProfile from "./Components/AdminEditProfile"
import PageLogin from "./Components/PageLogin"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pembelajaran" element={<Pembelajaran/>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/admin/dashboard" element={<AdminDasboard/>}/>
          <Route path="/admin/upload" element={<AdminUpload/>}/>
          <Route path="/admin/edit" element={<AdminEditProfile/>}/>
          <Route path="/login" element={<PageLogin/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
