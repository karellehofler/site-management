import React from 'react';
import { Navbar, NavbarContainer, 
    MenuBtn,
    ToggleMenu, Branding} from '../Styled';
import Logout from '../login/Logout';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function Nav() {

    const auth = useSelector((state) => state.auth);
    
    // Nav.propTypes = {
    //     auth: PropTypes.object.isRequired
    // }
    
    const MenuDefault = () => {
        return (
            <ul>
                <li>
                    <NavLink to="/signup">
                    Sign Up
                    </NavLink>
                    <NavLink to="/login">
                        Login
                    </NavLink>
                </li>             
            </ul>
        )
    }

    const MenuForUser = () => {
        return (
            <>
            <p>{auth.user.name}</p>
            <ul>
                <NavLink to="/dashboard"><i class="fas fa-home"></i></NavLink>
                <NavLink to="/profile"><i class="fas fa-user"></i></NavLink>
                <NavLink to="/settings"><i class="fas fa-cog"></i></NavLink>
                <Logout />
            </ul>
            </>
        )
    };
    
    const { isAuthenticated } = auth;

    return(
        <Navbar id="site-nav">
            <NavbarContainer>
                <Branding>
                    <a href="/">
                        <h3 className="site-name">
                            Linky
                        </h3>
                    </a>
                </Branding>
                <ToggleMenu>
                    {!isAuthenticated ? <MenuDefault /> : <MenuForUser /> }
                </ToggleMenu>
                <MenuBtn>
                    <i class="fas fa-bars"></i>
                </MenuBtn>
            </NavbarContainer>
        </Navbar>
    )
}