import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



class ProductDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }

        this.HandleAddProductItem = this.HandleAddProductItem.bind(this)
    }

    HandleAddProductItem(product) {
        console.log(this.props.addToCart(product))
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products/' + this.props.computedMatch.params.id)
            .then(data => data.json())
            .then((result) => {
                this.setState({
                    items: result
                })
            })

    }

    render() {
        const imgStyles = {
            width: "80%",
            height: "600px"
        }
        const col2Styles = {
            padding: '10%',
            marginBottom: '20px',
            textAlign: 'left',
            background: '#ababab'
        }

        return (


            <div className="container mt-5">

                <div className="row">
                    <div className="col">
                        <img style={imgStyles} src={this.state.items.image} />
                    </div>
                    <div className="col" >

                        <div style={col2Styles}>
                            <h2 style={{ color: '#000', fontWeight: '100', fontSize: '36px' }}>{this.state.items.title}</h2>
                            <h4>{this.state.items.category}</h4>
                            <h5>{this.state.items.description}</h5>
                            <h3> ${this.state.items.price}</h3>
                            <button className="btn-primary mt-5" onClick={() => this.HandleAddProductItem(this.state.items)}>Add to Cart</button>
                        </div>
                        <div className="mb-3 text-start">
                            <Link to="/"><button className="btn-primary">Explore more</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
}

export default ProductDetail