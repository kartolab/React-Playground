
import React from "react";
import PageTitle from '../Components/PageHeading';
import Product from "./Product";
import Cart from "./Cart";

class ViewProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
        this.HandleAddProductItemOnClik = this.HandleAddProductItemOnClik.bind(this)
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then((result) => {
                this.setState({
                    items: result
                })
            })

    }




    HandleAddProductItemOnClik(product) {
        //handle the add item click in product list
        //and call the function addToCart coming from App.js
        this.props.addToCart(product);

    }

    render() {
        //   const {productslist}=this.state;
        return (
            <div className="container" >
                <PageTitle heading="Products we have got " />

                <div className="row products-list-container">

                    {this.state.items.map(item => (
                        <Product key={item.id} id={item.id} category={item.category} image={item.image} title={item.title} price={item.price} addItem={this.HandleAddProductItemOnClik} />
                    ))}
                </div>
            </div>

        )
    }

}
export default ViewProduct;