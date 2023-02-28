import {Route, Routes } from 'react-router-dom';
import Login from './component/pages/Login';
import './App.css';
import Home from './component/pages/Home/Home';


function App() {
  const isLoggedIn=true
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={isLoggedIn?<Home /> : <Login />}/>
      
      
    </Routes>
    </div>
  );
}

export default App;
