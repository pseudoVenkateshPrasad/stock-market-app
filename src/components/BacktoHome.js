import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

export default function BacktoHome() {
    return (
        <NavLink exact to = "/" >
            <button className = "btn btn-success"> <HomeIcon /> </button>
            </NavLink>
    )
}
