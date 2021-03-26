import React from 'react'

export default function HeroCard({company}) {

    return (
        <div className="card d-flex flex-column justify-content-center align-items-center text-white " style={{width: "18rem", backgroundColor:"#4286f4"}}>
            <div className = "container d-flex justify-content-between align-items-center my-2">
                <h5> {company.name} </h5>
                <div style = {{borderRadius:"50%",backgroundColor:"#fff"}}>
                    <img src = {require(`../images/${company.name.toLowerCase()}.svg`).default} alt = "logo" />
                </div>
            </div>
            <div className = "container my-2">
                <h4> { company.cVal } </h4>
            </div>
        </div>
    )
}
