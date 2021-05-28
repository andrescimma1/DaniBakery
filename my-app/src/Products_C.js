import React,{Component} from "react";
import box from './img/4.jpeg';
import river from './img/9.jpeg';
import budin from './img/18.jpeg';
import matilda from './img/12.jpeg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Products_C extends Component
{
    constructor(props)
    {
        super(props);

        this.state=
        {
            products:
            [
                {
                    name: "Box merienda.",
                    description: "Descripcion de la box.",
                    price: 600,
                    sku: "AE45142SEczdD"
                },
                {
                    name: "Torta bien millonaria.",
                    description: "Descripcion de la torta river plate.",
                    price: 1000,
                    sku: "BKAO0133kKoQP"
                },
                {
                    name: "Budín de limón y semillas de amapola.",
                    description: "Descripcion del budin.",
                    price: 500,
                    sku: "C01kDkopqpE21"
                },
                {
                    name: "Torta Matilda.",
                    description: "Descripcion de la torta matilda.",
                    price: 850,
                    sku: "D131DQeq31LQx"
                }
            ]
        }
    }

    render()
    {
        return(
            <header className="App-header">
                <section class="header">
                    <div class="card-columns">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={box} />
                            <Card.Body>
                            <Card.Text>
                                {this.state.products[0].name}
                            </Card.Text>
                            <Card.Text class="cardText">
                                ${this.state.products[0].price}
                            </Card.Text>
                            <Button variant="primary">Comprar</Button>
                            <Button variant="secondary">Ver detalle</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={river} />
                            <Card.Body>
                            <Card.Text>
                                {this.state.products[1].name}
                            </Card.Text>
                            <Card.Text class="cardText">
                                ${this.state.products[1].price}
                            </Card.Text>
                            <Button variant="primary">Comprar</Button>
                            <Button variant="secondary">Ver detalle</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={budin} />
                            <Card.Body>
                            <Card.Text>
                                {this.state.products[2].name}
                            </Card.Text>
                            <Card.Text class="cardText">
                                ${this.state.products[2].price}
                            </Card.Text>
                            <Button variant="primary">Comprar</Button>
                            <Button variant="secondary">Ver detalle</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={matilda} />
                            <Card.Body>
                            <Card.Text>
                                {this.state.products[3].name}
                            </Card.Text>
                            <Card.Text class="cardText">
                                ${this.state.products[3].price}
                            </Card.Text>
                            <Button variant="primary">Comprar</Button>
                            <Button variant="secondary">Ver detalle</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </section>
            </header>
        );
    }
}

export default Products_C;