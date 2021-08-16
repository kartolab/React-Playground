// const ViewProduct = ()=>{
// return(
//     <h1>View product</h1>
// )
// }
//import {React} from 'react';
import React from "react";
import PageTitle from '../Components/PageHeading'
class ViewProduct extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
            items:[]
        }
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(data=>data.json())
            .then((result)=>{
                this.setState({
                    items:result
                })
                console.log(this.state.items)    
            })
       
    }
    render(){
     //   const {productslist}=this.state;
        return(
            <div className="container" >
                <PageTitle heading="Products we have got " />
              
                <div className="row products-list-container">
               {this.state.items.map(item=>(
                   <div className="col-3 d-flex mb-4 product-item" key={item.id}>
                       <div className="card">
                           <div className="Card-body">
                       <div className="category">{item.category}</div>
                      <div className="img-container"> <img src={item.image}/></div>
                       <div className="card-title">{item.title}</div>
                       {/* <div className="card-text"> {item.description}</div> */}
                       <div className="mb-2"><p>${item.price}</p></div>
                       </div>
                       <button className="btn-primary mt-3 align-btm">Add to cart</button>
                   </div>
                   </div>
               ))}
                </div>
            </div>
           
        )
    }

}
export default ViewProduct ;