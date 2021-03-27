import React, { useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import Button from '@material-ui/core/Button';

// Imported Components
import Result from './components/Result';
import Pagination from './components/Pagination';
import HeroCard from './components/HeroCard';
import TableHead from "./components/TableHead";
import './style.css';
import LogoBar from './components/LogoBar';



function Home() {

  const [companies, setCompany] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [CompaniesPerPage] = useState(5);
  const[search, setSearch] = useState("");

  const newCompanies = companies.slice(3,54);
  const HeroCardCompanies = companies.slice(0,3);
  const LastCompanyIndex = currentPage * CompaniesPerPage;
  const FirstCompanyIndex = LastCompanyIndex - CompaniesPerPage;

  useEffect(()=> {
      
      setLoading(false);

      axios.get('http://localhost:3000/companies').then(response => {setCompany(response.data)})
    },
    [])


  // if(loading) return "Loading....";

  const PaginateFunc = PageNum => setCurrentPage(PageNum);

  // rendered HTML
  return(
    <>
      <LogoBar />      
       <div className = "m-2 px-5 py-3 container-fluid d-flex justify-content-end">
        <Link exact to ="/view">
        <Button color="primary" variant="contained">
          View items
        </Button>
        </Link>
        
        </div>
      {
        (loading) ? (<div className="container d-flex justify-content-center">
                    <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_ev51tm3e.json"  background="transparent"  speed="0.85"  style={{width: "300px", height: "300px"}} loop = "true"  autoplay></lottie-player>
                </div>) : (
                  
                  <>
                  <div className = "px-3 container d-flex justify-content-between align-items-center" >
        
        {HeroCardCompanies.map((hCardComp, index) => <div key = {index} className = "m-3"> <HeroCard company = {hCardComp}/> </div>)}

    </div>

    <div className = "container my-3 border p-0">
      <div className = "container text-center mt-2 d-flex justify-content-between align-items-center">
        <h5 className = "">Stock Market Details</h5>
        <input className="form-control me-2 " type = "text" placeholder = "Search Company" onChange = {e => {setSearch(e.target.value)}} style = {{width:"300px"}} />
      </div>
      <table className="table mt-2 mb-3">
        <TableHead />
        <tbody>
        {
            newCompanies.filter(val => {
              if(search == ""){
                return val;
              }else if( val.name.toLowerCase().includes(search.toLowerCase()) ){
                return val;            
              }
                             
            }).slice(FirstCompanyIndex, LastCompanyIndex).map(function(company) {
                return(<tr key = {company.id} className = "m-3 text-center"> <Result company = {company}/> </tr>)
            })
        }
        </tbody>

      </table>
      <Pagination CompaniesPerPage = { CompaniesPerPage } TotalCompanies = {newCompanies.length}  paginate = {PaginateFunc}/>
    </div>
    </>)
      }
      
    </>
  )
}





export default Home;
