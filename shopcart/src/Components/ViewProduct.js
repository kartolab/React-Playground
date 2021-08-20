
import React from "react";
import PageTitle from '../Components/PageHeading';
import Product from "./Product";
import FilterSection from "./FilterSection";

class ViewProduct extends React.Component {
    constructor(props) {

        super(props)
        this.productLitTempArr=[];
        this.FiterProdArr=['men\'s clothing','jewelery'];
        this.state = {
            items: []
        }
        this.HandleAddProductItemOnClik = this.HandleAddProductItemOnClik.bind(this)
        this.HandleFilterByCategory=this.HandleFilterByCategory.bind(this);
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then((result) => {
                this.setState({
                    items: result
                })
                if (this.state.items.length !== 0) {
                    this.productLitTempArr = this.state.items;

                }
            })
    }


    HandleFilterByCategory(category, e) {

        if (e.target.checked) {
            let a = [...this.state.items]
            a = this.state.items.filter(c => c.category == category);
            console.log(a);
            this.setState({ items: a })
            
        } else {
            this.setState({ items: this.productLitTempArr })

        }

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
                    <FilterSection FiterProdArr={this.FiterProdArr} HandleFilterByCategory={this.HandleFilterByCategory}/>
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