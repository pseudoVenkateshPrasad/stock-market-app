import React, { useState,useEffect } from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

export default function ViewResult({company}) {
        const [newState,setNewState] = useState([])
        useEffect(() => {
                axios.get(`http://localhost:8082/api/books/`)
                .then(response => setNewState(response.data))
                .catch(err => console.log(err))
        }, [])
        // console.log("new",typeof(newState))
        const {name, symbol, mCap, cVal} = company;

        // console.log(newState)
        

        function deleteMe(id) {
                
                let companyIndex = newState.findIndex(val => val._id == id);
                console.log(companyIndex)
                
                if(companyIndex!=-1) {
                        axios.delete(`http://localhost:8082/api/books/${id}`)
                .then((res) => {
                        // company : company.filter(val => val._id !== id) 
                        company.history.push("/");

                        console.log(res.data);
                        // setNewState(newState.splice())
                })
                .catch(err => {console.log(err)})           
                }
                        
                        //     newState.splice(todoIndex,1);
                        // }

                
        }

    return (
            <>
                    <td className = "text-dark bg-white px-5">{company.name}</td>
                    <td className = "text-dark bg-white">{company.symbol}</td>
                    <td className = "text-dark bg-white">{company.mCap}</td>
                    <td className = "text-dark bg-white"> <Button
                                                            onClick={() => deleteMe(company._id) }
                                                            variant="contained"
                                                            color="secondary"
                                                            startIcon={<DeleteIcon />}> Delete </Button> </td>
                    <td className = "text-dark bg-white">{company.cVal}</td>
            </>
            
    )
}
