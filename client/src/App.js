import Signup from './components/signup/Signup'
import Login from './components/login/Login';
import './App.css';
import { Switch , Route } from 'react-router-dom';


function App() {
  return (
      <>
     
      <Switch>
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
