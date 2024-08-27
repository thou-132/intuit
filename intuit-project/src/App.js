import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Body from './Content/Body.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Switch from './Components/Switch/Switch.jsx'
import Login from './Components/Login/Login.jsx';
import Signup from './Components/Signup/Signup.jsx';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
    
<Routes>
<Route path='/' element={<Body />}/>
<Route path='Switch' element={<Switch />} />
<Route path='Login' element={<Login />} />
<Route path='signup' element={<Signup />} />
</Routes> 



  
    </BrowserRouter> 
    
    </div>
  );
}

export default App;
