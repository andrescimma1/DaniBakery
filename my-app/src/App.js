import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import Menu from './Components/Menu/index';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import './css/fonts.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Menu/>
        <Route path="/" component={Home} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/login" component={Login} exact />
    </BrowserRouter>
  );
}

export default App;
