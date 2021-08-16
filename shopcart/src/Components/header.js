import {Link} from 'react-router-dom';
import Logo from '../Resources/logo.png';

const Header=()=>{
    const logoStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '24px',
    textTransform: 'uppercase'

    }
    return(
    <div className="header">
          <nav  className="container-md navbar navbar-expand-lg ">
                <Link to="/" style={logoStyle}> <img src={Logo}/> <span>Shop me</span></Link>
        </nav>
    </div>
    )
}

export default Header;