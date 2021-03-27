import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableHead from "./components/TableHead";
import LogoBar from './components/LogoBar';
import ViewResult from './components/ViewResult';
import BacktoHome from './components/BacktoHome';

function View() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        axios.get('http://localhost:8082/api/books')
        .then(response => {// console.log(response.data); 
              setPosts(response.data) } )
        .catch(err => { 
              console.log("Error fetching data")  
        })
    }, [])

    


    return (
       <>
        <LogoBar> </LogoBar>

        <div className = "container mx-3 my-2 "><BacktoHome /></div>
        
        {(loading) ? (<div className="container d-flex justify-content-center">
                    <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_ev51tm3e.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}} loop = "true"  autoplay></lottie-player>
                </div>) : (<div className = "container border">
        <table class="table mt-2 mb-3">
        <TableHead />
        <tbody className = "text-center border">
            {   
                 (posts.map((values,index) => {
                    return <tr key = {index}> <ViewResult company = {values} /> </tr>
                }))

                
            
            }
            </tbody>
         </table>
        </div>)
        }

       


        </>
    )
}

export default View;
