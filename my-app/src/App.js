import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import Menu from './Components/Menu/index';
import Home from './Pages/Home';
import Products from './Pages/Products';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import './css/fonts.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Container>
        <Route path="/" component={Home} exact />
        <Route path="/detail" component={Products} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/login" component={Login} exact />
      </Container>
    </BrowserRouter>
  );
}

export default App;
