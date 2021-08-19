import React from 'react';
import PageTitle from './PageHeading';
import { Link } from 'react-router-dom';

const Cart = (props) => {
   
    const TotalAmountStyles = {
        textAlign: 'right',
        fontSize:'36px',
        marginTop:'20px',
        fontWeight:'500',
        paddingRight: '20px'

    }
    function HandleRemoveProductOnClick(productId) {
       alert("Do you Want to remove this product ?? ")
       props.removeFromCart(productId)
     
         
    }

    var totalAmount = props.itemsInCart.reduce((a, v) => a + v.price, 0)
    return (
        <div className="container cart-container">
            <div className="d-flex  align-all-center ">
                <PageTitle heading="My Cart" />
                {props.itemsInCart.length==0 ?<h4> No items in your Cart !! Epxlore products in home page</h4>
                :<div className="w-100 d-flex  justify-content-end">
                <Link to="/"   style={{textDecoration: 'none',marginRight:'20px'}}><button className="btn-primary"> Back</button></Link>
                <Link to="/" style={{textDecoration: 'none'}} ><button className=" btn-success"> Place Order</button></Link>
                </div>}
                
            </div>

            <div>
                {
                    props.itemsInCart.map(c => 
                    
                    <div className="cart-item-name d-flex">
                        <div className="w-100"><h5>{c.title}</h5><p style={{marginBottom:'0'}}>{c.category}</p></div> 
                       
                       <div className=" cart-price-item">
                       <p style={{fontSize:'30px',marginRight:'30px',marginBottom:'0'}}>${c.price}</p>
                            <i onClick={()=>HandleRemoveProductOnClick(c.id)} style={{color:'red',fontSize:'28px'}} className="icon-container fa fa-trash-o"></i>
                       </div>
                        </div>
                       
                        )
                }
                {props.itemsInCart.length==0 ?null: <h3 style={TotalAmountStyles}>Total Amount : ${totalAmount}</h3>}
            </div>
        </div>
    )
}

export default Cart;