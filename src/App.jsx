import {Route, Routes } from 'react-router-dom';
import Login from './component/pages/Login';
import './App.css';
import Home from './component/pages/Home/Home';
import Casino from './component/pages/casino/Casino';
import Sport from './component/pages/Sport/Sport';
import LiveBetting from './component/pages/LiveBetting/LiveBetting';
import TopPoker from './component/pages/top pocker/TopPoker';
import Virtual from './component/pages/Virtual/Virtual';
import Dashboard from './component/pages/Dashboard/Dashboard';

function App() {
  // const isLoggedIn=true
  return (
    <div className='App'>
    <Routes>
      {/* <Route path='/' element={isLoggedIn?<Login /> :<Home /> }/> */}

     <Route path='/home' element={<Home/>}/>
     <Route path='/' element={<Login/>}/>
      <Route path='/casino' element={<Casino/>}/>
      <Route path='/sport' element={<Sport />} />
      <Route path='/liveBetting' element={<LiveBetting />} />
      <Route path='/poker' element={<TopPoker/>} />
      <Route path='/virtual' element={<Virtual />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    </div>
  );
}

export default App;
