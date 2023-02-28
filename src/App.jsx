import {Route, Routes } from 'react-router-dom';
import Login from './component/pages/Login';
import './App.css';
import Home from './component/pages/Home/Home';
import Casino from './component/pages/casino/Casino';
function App() {
  const isLoggedIn=true
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={isLoggedIn?<Home /> : <Login />}/>
      <Route path='/casino' element={<Casino/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
