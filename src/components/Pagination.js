import React from 'react'

export default function Pagination( { CompaniesPerPage, TotalCompanies, paginate  } ) {

    const PageNumber = [];
    console.log(PageNumber);

    for( let i = 1; i <= Math.ceil(TotalCompanies / CompaniesPerPage ); i++ )
    {
        PageNumber.push(i);
    }


    return (
        <div  className = "container bg-light p-3 d-flex flex-column justify-content-center align-items-center">
            <ul className="pagination">
                {PageNumber.map((pNum) => (<li className ="page-item" key = {pNum}><a onClick = {() => paginate(pNum)}  className="page-link" > { pNum } </a></li>))}
            </ul>
        </div>
    )
}

