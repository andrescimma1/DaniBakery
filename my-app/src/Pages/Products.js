import React,{Component} from "react";
import Product from '../Product';
import box from '../img/4.jpeg';
import river from '../img/9.jpeg';
import budin from '../img/18.jpeg';
import matilda from '../img/12.jpeg';

class Products extends Component
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
                    sku: "AE45142SEc",
                    src: box
                },
                {
                    name: "Torta bien millonaria.",
                    description: "Descripcion de la torta river plate.",
                    price: 1000,
                    sku: "BKAO0133kK",
                    src: river
                },
                {
                    name: "Budín de limón y semillas de amapola.",
                    description: "Descripcion del budin.",
                    price: 500,
                    sku: "C01kDkopqp",
                    src: budin
                },
                {
                    name: "Torta Matilda.",
                    description: "Descripcion de la torta matilda.",
                    price: 850,
                    sku: "D131DQeq31",
                    src: matilda
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
                        {this.state.products.map(product=><Product data={product}/>)}
                    </div>
                </section>
                
            </header>
        );
    }
}

export default Products;