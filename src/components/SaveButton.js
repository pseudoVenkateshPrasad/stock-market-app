import React, { useState, useReducer, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
// import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { indigo } from '@material-ui/core/colors';



const Theme = createMuiTheme({
    palette: {
      primary: indigo
    },
  });



const initialState = {
    buttonText : "Save",
    buttonColor : "primary",
    href : "",
    buttonIMG : <FavoriteIcon/>
};

const reducer = (state, action) => {
    // const [savedData, setSavedData] = useState;
    
    switch(action.type) {
        case 'POST_DATA':
            return {
                buttonText : "View",
                buttonColor : "secondary",
                href : "/view",
                buttonIMG : <VisibilityIcon/>
            }
        case 'VIEW_DATA' :
            return {
                buttonText : "View",
                buttonColor : "secondary",
                href : "/view",
                buttonIMG : <VisibilityIcon/>
            }

        default : 
            return state;
    }
}

export default function SaveButton( {cTag} ) {

    const backendURL = 'http://localhost:8082/api/books';
    
    const [ count, dispatch ] = useReducer(reducer, initialState);
    const {name, symbol, mCap, cVal} = cTag;
    // const [APIData, setAPIData] = useState([]);
    // let newarr = [];

   
    // useEffect(() => {
        
    //     axios.get('http://localhost:3000/companies')
    //     .then(res=> {
    //         setAPIData(res.data)
            
    //   }).catch(err => console.log(err));
    // } , [])


    // for(var i=0; i<APIData.length; i++ ){
    //     for(var j=0; j<backendData.length; j++ ){
    
    //         if((APIData[i].name === backendData[j].name) ){
    //             newarr.push(APIData[i])
    //         }
    //     }
    // }
    // console.log("length",newarr.length)
    // for(let k=0; k < newarr.length; k++){

    //     dispatch({type: 'VIEW_DATA'})

    // }

    function btnCLick(){
        const companyData = {
            name:name,
            symbol:symbol,
            mCap: mCap,
            cVal: cVal
        }

// backendData.find( obj => obj.name !== companyData ) : for if case
// backendData.find( obj => obj.name === companyData ) : for else if case

        if( count.buttonText === "Save" ){
            console.log("data not present")
            axios.post(backendURL, companyData)
            .then( res => { 
                            console.log("data added")
                            dispatch( {type : 'POST_DATA'} )
                         })
            .catch(() => { alert( "Data Didnt Save" ); } )
            
        }else if( count.buttonText === "View" ){
                console.log("data present")
                // console.log(backendData.find( obj => obj.name === companyData ))
                dispatch({type: 'VIEW_DATA'})
        }
    }
    
    // JSX Starts Here
    return(

        <>
        <Link exact to = {count.href}>
        <ThemeProvider theme={Theme}>
        <Button variant="contained" startIcon={count.buttonIMG} onClick = {btnCLick} color={count.buttonColor}> {count.buttonText}  </Button>
      </ThemeProvider>
        
        </Link>
        </>
    )
}






