
import React from "react";
import PageTitle from '../Components/PageHeading';
import Product  from "./Product";
import Cart from "./Cart";

class ViewProduct extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
            items:[],
            count:0,
           cart:[]
        }
        this.AddItemOnclick=this.AddItemOnclick.bind(this)
      
    }
   
    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(data=>data.json())
            .then((result)=>{
                this.setState({
                    items:result
                })
            })
       
    }
   

    AddItemOnclick(product) {
        this.setState(function(state) {
            return {cart:state.cart.concat(product),count:state.count+1}
            
        })
      this.props.setMyCart(this.state.count)
    }
    render(){
     //   const {productslist}=this.state;
        return(
            <div className="container" >
                <PageTitle heading="Products we have got " />
                {/* <Cart addedProductList={this.state.cart}/> */}
               
               
                <div className="row products-list-container">
               
               {this.state.items.map(item=>(
                   <Product key= {item.id} id={item.id} category={item.category} image={item.image} title={item.title} price={item.price} addItem={this.AddItemOnclick}/>
               ))}
                </div>
            </div>
           
        )
    }

}
export default ViewProduct ;