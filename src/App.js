import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import Favorites from './components/Favorites'
import ThermostatIcon from '@mui/icons-material/Thermostat';


function App() {
  return (
    <div className="app">
     
      <nav className='navBar'>
        <div className='heading'>
          
          <h1>Weather<ThermostatIcon fontSize='large'/> </h1>          
                  
        </div>
          <ul>
            <li> 
             <Link style={{color:"white", textDecoration: 'none', fontSize:'20px'}}  to = '/'>  Home  </Link>  
            </li>
            <li> 
             <Link style={{color:"white", textDecoration: 'none',  fontSize:'20px'}} to = 'Favorites'>Favorites  </Link> 
            
            </li>
                   
          </ul>


      </nav>

      <div className='body'>
      <Routes>
      
       <Route path="/My2Project" element={<Home/>}/>
       <Route path="Favorites" element={<Favorites/>}/>
    
     </Routes>

     </div>
   
    </div>
  );
}

export default App;
