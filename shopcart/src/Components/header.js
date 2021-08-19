import {Link} from 'react-router-dom';
import Logo from '../Resources/logo.png';
import Badge from './Badge';
import Cart from './Cart';

const Header=({cartLength,itemsIncart})=>{
    const logoStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '24px',
    textTransform: 'uppercase'

    }
    const basketStyle={
        display:'flex',
        fontSize:'28px',
        width:'calc(100% - 200px)',
        justifyContent:'flex-end',
        color:'#fff'
    }
    const arr='sree'

    return(
    <div className="header">
          <nav  className="container-md navbar navbar-expand-lg ">
            
                <Link to="/" style={logoStyle}> <img src={Logo}/> <span>Shop me</span></Link>
                <Link itemsincart={itemsIncart}style={basketStyle} to= '/cart'>&#128722;<Badge myCartCount={cartLength}/></Link>
        </nav>
    </div>
    )
}

export default Header;