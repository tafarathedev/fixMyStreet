
import HomePage from './pages/HomePage'
import { Routes, Route } from "react-router-dom";
import './App.css'

//pages
import NotFound from './pages/NotFound';
import LocalAreaReports from './pages/LocalAreaReports';
import Login from './pages/Login';
import Help from './pages/Help';
import MyAccountPage from './pages/MyAccountPage';

function App() {
  

  return (
    <div className='bg-white'>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/*" element={<NotFound/>}/>
      <Route path="/local_area_reports" element={<LocalAreaReports/>}/>
      <Route path="/help" element={<Help/>}/>
      <Route path="/account/me" element={<MyAccountPage/>}/>
      <Route path='/login' element={<Login/>} />
    </Routes>
    </div>
  )
}

export default App
