import React from 'react';
import PropTypes from 'prop-types';
import { logout } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';

export default function Logout() {

    const dispatch = useDispatch();

    Logout.propTypes = {
        logout: PropTypes.func
    }

    return (
        <>
            <li style={{ cursor: 'pointer' }} onClick={() => {
                dispatch(logout());
                }}>Logout</li>
        </>
    )
}