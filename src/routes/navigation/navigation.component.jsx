import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { useSelector } from 'react-redux';
import { selectCurrentUser } from "../../store/user/user.selector";

import { ReactComponent as IceLogo } from "../../assets/ice.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';
import { CartContext } from "../../context/cart.context";

const Navigation = () =>{
    const currentUser = useSelector(selectCurrentUser);
    const {isCartOpen} = useContext(CartContext);
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <IceLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='shop'>
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>
                            SIGN OUT
                        </span>
                    ) : (
                        <Link className='nav-link' to='/auth'>
                            SIGN IN
                        </Link>
                    )}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />} 
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation