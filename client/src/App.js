import Signup from './components/signup/Signup'
import Login from './components/login/Login';
import './App.css';
import { Switch , Route } from 'react-router-dom';
// import Sidebar from './components/sidebar/sidebar';
import Pastorder from './components/pastorder/pastorder';


function App() {
  return (
      <>
     
      <Switch>
       <Pastorder></Pastorder>
      <Route exact path='/register'>
      <Signup></Signup>
      </Route>
      <Route path='/'>
      <Login></Login>
      </Route>
      </Switch>
    
      
     
      </>
  )
}

export default App;
