import './App.css';
import Home from './Home';
import Signup from './components/Signup';
import Login from './components/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
