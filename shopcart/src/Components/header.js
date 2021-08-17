import {Link} from 'react-router-dom';
import Logo from '../Resources/logo.png';
import Badge from './Badge';

const Header=({myCart})=>{
    const logoStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '24px',
    textTransform: 'uppercase'

    }
    const basketStyle={
        display:'flex',
        fontSize:'28px',
        width:'87%',
        justifyContent:'flex-end',
        color:'#fff'
    }
    return(
    <div className="header">
          <nav  className="container-md navbar navbar-expand-lg ">
         
                <Link to="/" style={logoStyle}> <img src={Logo}/> <span>Shop me</span></Link>
                <Link style={basketStyle} to="/cart" >&#128722;<Badge myCartCount={myCart}/></Link>
        </nav>
    </div>
    )
}

export default Header;