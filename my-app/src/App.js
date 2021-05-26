import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import './css/fonts.css';
import producto from './img/1.jpeg';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    
    <div className="App">
      <h1>Dulce Bocado</h1>
      <div class="menu">
        <h2>Inicio</h2>
        <h2>Sobre nosotros</h2>
        <h2>Productos</h2>
      </div>
      <header className="App-header">
        <section class="header">

        <div class="card-columns">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Alfajores de coco rellenos de dulce de leche.
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Alfajores de coco rellenos de dulce de leche.
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Alfajores de coco rellenos de dulce de leche.
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Alfajores de coco rellenos de dulce de leche.
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Alfajores de coco rellenos de dulce de leche.
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Alfajores de coco rellenos de dulce de leche.
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Alfajores de coco rellenos de dulce de leche.
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Alfajores de coco rellenos de dulce de leche.
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Alfajores de coco rellenos de dulce de leche.
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Alfajores de coco rellenos de dulce de leche.
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Alfajores de coco rellenos de dulce de leche.
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </div>
        </section>
        
      </header>
      
    </div>
  );
}

export default App;
