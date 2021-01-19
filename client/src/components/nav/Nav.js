import React from 'react';
import { Navbar, NavbarContainer } from '../Styled';

export default function Nav() {

    const menuDefault = () => (
        <ul>
            <li>
                Sign Up
            </li>             
        </ul>
    )

    const menuForUser = () => (
        <ul>
            <li>Settings</li>
            <li>Logout</li>
        </ul>
    )
    return(
        <Navbar>
            <NavbarContainer>
                <div className="branding">
                    <a href="/">
                        <h3 className="site-name">
                            Linky
                        </h3>
                    </a>
                </div>
                <div className="toggle menu">
                </div>
            </NavbarContainer>
        </Navbar>
    )
}