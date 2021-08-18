import React from 'react';
import PageTitle from './PageHeading';
import { useLocation } from 'react-router';

const Cart =()=>{
    let location=useLocation();
    const TotalAmountStyles={    
    textAlign: 'right',
    paddingRight: '20px'

    }
   
    var totalAmount= location.state.reduce((a,v)=> a+v.price,0)
    return(
        <div className="container">
    <PageTitle heading="My Cart" />
        <div>
            {
                location.state.map(c=><div className="cart-item-name d-flex"><div><h5>{c.title}</h5><p>{c.category}</p></div> <p className="cart-price-item">{c.price}</p></div>)
            }
            <h3 style={TotalAmountStyles}>{totalAmount}</h3>
        </div>
    </div>
    )
}

export default Cart;