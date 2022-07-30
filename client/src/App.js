import Signup from './components/signup/Signup'
import Login from './components/login/Login';
import './App.css';
import { Switch , Route } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';


function App() {
  return (
      <>
     
      <Switch>
        <Sidebar/>
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
