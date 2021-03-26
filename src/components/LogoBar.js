import React from 'react';
import ViewBtn from './ViewBtn';

function LogoBar() {
    return (
        <>
            <div className = "container-fluid px-5 py-2 d-flex justify-content-between align-items-center " style ={{backgroundColor:"#000"}}>
                <h2 className ="text-white app-title">Quikie Apps</h2>
                <ViewBtn /> 
            </div>
        </>
    )
}

export default LogoBar;
