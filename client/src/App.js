import Signup from './components/signup/Signup'
import Login from './components/login/Login';
import './App.css';
import { Switch , Route } from 'react-router-dom';
import Copyright from './components/copyright/copyright';

import Pastorder from './components/pastorder/pastorder';


function App() {
  return (
      <>
     
      <Switch>
        <Route path='/pastorder'>
        <Pastorder></Pastorder>
        </Route>
      <Route exact path='/register'>
      <Signup></Signup>
      </Route>
      <Route path='/'>
      <Login></Login>
      </Route>
      </Switch>
      
      <Copyright></Copyright>
    
      
     
      </>
  )
}

export default App;
