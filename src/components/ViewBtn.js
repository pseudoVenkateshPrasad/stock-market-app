import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ViewBtn() {
    return (
        <NavLink exact to = "/view" >
            <button className = "btn btn-success"> View  </button>
        </NavLink>
    )
}
