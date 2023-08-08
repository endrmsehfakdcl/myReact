import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/profiles/:username' element={<Profile />}></Route>
      {/* <Route path='/profiles/*' element={<Profile />}></Route> */}
    </Routes>
  );
}

export default App;
