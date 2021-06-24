import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import Menu from './Components/Menu/index';
import Products from './Pages/Products';
import Home from './Pages/Home';
import './css/fonts.css';
import React,{ useEffect, useState} from 'react';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () =>
  {
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  useEffect(() => 
  {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])

  return (
    <BrowserRouter>
      <div className="App">
        <Menu isScrolling={scrollHeight}/>
        <Route path="/" component={Home} exact />
        <Route path="/products" component={Products} exact />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
