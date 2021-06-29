import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function Product(props)
{
    const [mensaje, setMensaje] = useState("");
    const [detalle, setDetalle] = useState(false);

    const Comprar = () =>
    {
        setMensaje("Se realizó la compra con éxito");
    }

    const VerDetalle = () =>
    {
        setDetalle(!detalle);
    }

    return(
        <Card>
            <Card.Img variant="top" src={props.data.src} />
            <Card.Body>
                <Card.Text>
                    {props.data.name}
                </Card.Text>
                {
                    detalle == true &&
                    <Card.Text>
                        {props.data.description}<br/>
                        Sku: {props.data.sku}
                    </Card.Text>
                }
                <Card.Text class="cardText">
                    ${props.data.price}
                </Card.Text>
                <Button variant="primary" onClick={Comprar}>Comprar</Button>
                <Button variant="secondary" onClick={VerDetalle}>Ver detalle</Button>

                {
                    mensaje !== "" &&
                    <Alert variant="success">
                        <Alert.Heading>{mensaje}</Alert.Heading>
                    </Alert>
                }
            </Card.Body>
        </Card>
    );
}

export default Product;