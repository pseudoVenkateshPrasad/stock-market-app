import React, { useState } from 'react';
import axios from 'axios';

export default function SaveButton( {cTag} ) {
    
    //  cTag prop holds the values of row data in object format as shown in given figure.

    console.log(cTag);
    const [saveBtn, setViewBtn] = useState("Save");

    const {name, symbol, mCap, cVal} = cTag;

    const SaveCompany = () => {
            const companyData = {
                name:name,
                symbol:symbol,
                mCap: mCap,
                cVal: cVal
            }

      
            axios.post('http://localhost:8082/api/books', companyData).then((response) => {
                    
                    console.log(response.status);
                    setViewBtn("View");
                    window.alert("Data Submitted Successfully...!")
    
                }).catch(() => {
                    alert("Data Didnt Save");
                })
            
    }

    return (
        <>
            <button className = "btn btn-sm btn-primary" onClick = {SaveCompany}> {saveBtn} </button>
        </>
    )
}
