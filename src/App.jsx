import {Route, Routes } from 'react-router-dom';
import Login from './component/pages/Login';
import './App.css';
import Home from './component/pages/Home/Home';
import Casino from './component/pages/casino/Casino';
import Sport from './component/pages/Sport/Sport';
import LiveBetting from './component/pages/LiveBetting/LiveBetting';
function App() {
  const isLoggedIn=true
  return (
    <div className='App'>
    <Routes>
      {/* <Route path='/' element={isLoggedIn?<Login /> :<Home /> }/> */}

     <Route path='/home' element={<Home/>}/>
     <Route path='/' element={<Login/>}/>
      <Route path='/casino' element={<Casino/>}/>
      <Route path='/sport' element={<Sport />} />
      <Route path='/liveBetting' element={<LiveBetting />} />
      <Route path='/virtual' element={<h1>Virtual</h1>} />
      <Route path='/topPoker' element={<h1>Top Poker</h1>} />
      
    </Routes>
    </div>
  );
}

export default App;
