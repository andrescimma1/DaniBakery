import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import Menu from './Components/Menu/index';
import Home from './Pages/Home';
import Products_C from './Products_C';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import './css/fonts.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Container>
        <Route path="/" component={Products_C} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/login" component={Login} exact />
      </Container>
    </BrowserRouter>
  );
}

export default App;
