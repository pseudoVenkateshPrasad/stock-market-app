import React from 'react';
import SaveButton from '../components/SaveButton';

export default function Result({company}) {
    return (
            <>
                    <td className = "text-dark bg-white px-5">{company.name}</td>
                    <td className = "text-dark bg-white">{company.symbol}</td>
                    <td className = "text-dark bg-white">{company.mCap}</td>
                    <td className = "text-dark bg-white"> <SaveButton cTag = {company} /> </td>
                    <td className = "text-dark bg-white">{company.cVal}</td>
            </>
            
    )
}
