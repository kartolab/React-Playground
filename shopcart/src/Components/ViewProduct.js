
import React from "react";
import PageTitle from '../Components/PageHeading';
import Product from "./Product";
import FilterSection from "./FilterSection";

class ViewProduct extends React.Component {
    constructor(props) {

        super(props)
        this.existingFilteredList=[];
        this.FiterProdArr = [
            {   Id:1,
                categoryname: 'men\'s clothing',
                isChecked: false
            }
            ,
            {
                Id:2,
                categoryname: 'jewelery',
                isChecked: false
            }
            ,
            {
                Id:3,
                categoryname: 'electronics',
                isChecked: false
            }
            ,
            {
                Id:4,
                categoryname: 'women\'s clothing',
                isChecked: false
            }

        ];
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

        this.FiterProdArr.forEach(function (val) {
            if (category.Id == val.Id) {
                category.isChecked = !category.isChecked
            }
            else {
                val.isChecked = false
            }
        }, this)
        if (e.target.checked) {

            let a = this.productLitTempArr;
            a = a.filter(c => c.category == category.categoryname);
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