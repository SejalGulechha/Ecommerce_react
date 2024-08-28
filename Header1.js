import './Header.css';
import AddBusinessIcon from '@mui/icons-material/AddBusiness'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
const Header1 = () => {
    return <header className="header">
        <div className="header_logo">
            <Link to='/'>
            <AddBusinessIcon fontSize='large'/> &nbsp;
            <span className="header_logoName">E-Shop</span>
            </Link>
        
        </div>
        <div className="header_search">
            <input></input>

        </div>
        <div className="header_nav">
            <div className="header_nav_user">
                <span className="header_nav_lineOne">Hello Guest</span>&nbsp;
                <span className="header_nav_lineTwo">Sign IN</span>
            </div>
            <div className="header_nav_itemlist">
                <Link to='/checkout'>
                <ShoppingCartIcon fontSize='small'/>&nbsp;
                Cart
                </Link>
            
            </div>

        </div>

    </header>
}
export default Header1;