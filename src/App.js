import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.scss'
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home></Home>} />
          <Route path='login' element={<Login></Login>} />
          <Route path='register' element={<Register></Register>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
