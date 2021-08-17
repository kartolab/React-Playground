import React from 'react';

import ViewProduct from './ViewProduct';
import PageTitle from './PageHeading';

class Cart extends React.Component {
    constructor(props){
        super(props);
       
    }
   
    render() {
        return (
            <div className="container">
            <PageTitle heading="My Cart" />
           
            </div>
        )
    }
}
export default Cart;