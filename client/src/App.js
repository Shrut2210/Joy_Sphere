import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './Layout/Layout';
import { SignUp } from './SignUp/SignUp';
import { LogIn } from './LogIn/LogIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/login' element={<LogIn/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
