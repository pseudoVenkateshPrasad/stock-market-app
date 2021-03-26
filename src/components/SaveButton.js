import React from 'react';
import {useCompany} from '../cacheContext';

export default function SaveButton( {cTag} ) {
    
    const { cache, SaveCompany } = useCompany();
    //  cTag prop holds the values of row data in object format as shown in given figure.
    console.log(cTag);
    const {name, symbol, mCap, cVal} = cTag;

    const onClick = () => SaveCompany(cTag);

  let saveBtn = "View"
  if (cache[name] === undefined) {
    saveBtn = "Save"
  }
  if (cache[name] && cache[name].status === "loading") {
    saveBtn = "Loading"
  }

    return (
        <>
            <button disabled={saveBtn==="Loading"} className = "btn btn-sm btn-primary" onClick = {onClick}> {saveBtn} </button>
        </>
    )
}
