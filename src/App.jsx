import { Route, Routes } from 'react-router-dom';
import Login from './component/pages/Login';
import './App.css';
import Casino from './component/pages/casino/Casino';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/casino' element={<Casino/>}/>
    </Routes>
    </>
  );
}

export default App;
