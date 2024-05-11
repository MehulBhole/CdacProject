import { Button, Pagination } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import {
  fetchAllProperties,
  fetchByCriteria,
  fetchById,
  fetchByStudentId,
  getSearchProperty,
} from "../services/User";
import { useNavigate } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import "../Css/UserDashBoard.css"
import { companyAppliedIdStud, fetchbyapprovalstatus } from "../services/ServiceProvider";

export function UserDashBoard() {
  const navigate = useNavigate();
  const [search, setSearch] = useState({ city: "" });
  const [priceFilter, setPriceFilter] = useState("");
  const [propertyData, setPropertyData] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [companyStatus, setCompanyStatus] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 2; // Number of properties to display per page
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
    city: "",
  });
  async function populateData() {
    try {
      const id = sessionStorage.getItem("id");
      const response = await fetchById(id);
      const responsestatus = await fetchbyapprovalstatus(id); 
      console.log(responsestatus.data);
      const responsestudent = await fetchByStudentId(id);
      setCompanyStatus(responsestatus.data);
      console.log(response);
      setPropertyData(responsestudent.data);
      setUserData(response.data);
      const responseCompany = await fetchByCriteria(id);
      setCompanyData(responseCompany.data);

    } catch (error) {
      console.log(error);
    }
  }
  const isApplied = (companyId) => {
    const statusObj = companyStatus.find(status => status.companyId === companyId);
    return statusObj && statusObj.status === 1;
  }
  
  const handleGoBack = () => {
    navigate(-1); // Navigate back one step in the history stack
  };


 
  const handleApply = async (companyId) => {
    try {
      const studId = sessionStorage.getItem("id");
      const response= await companyAppliedIdStud(companyId,studId);
      
      //const response = await serviceDeleteById(propertyid);
      populateData();
    } catch (error) {
      console.log(error);
    }
  }
 

  useEffect(() => {
    populateData();
  }, []);



  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="userview">

        <Button className="backbtn" variant="btn btn-outline-success" onClick={handleGoBack}>
          Back
        </Button>
        {/* Left section */}
        <div className="leftuser">
          {/* User Info */}
          <div className="heading">
            <h2>Profile</h2>
            <hr />
          </div>
          <div className="userData">
            <div className="usericon">
              <FaUser size={90} />
            </div>
            {userdata && (
              <div className="userdiv">
                <b>
                  Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  {userdata.name}
                </b>
              </div>
            )}
            {userdata && (
              <div className="userdiv">
                <b>
                  Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {userdata.email}
                </b>
              </div>
            )}
            {userdata && (
              <div className="userdiv">
                <b>
                  City:
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  {userdata.city}{" "}
                </b>
              </div>
            )}
            {userdata && (
              <div className="userdiv">
                <b>Phone No: {userdata.phoneNo}</b>
              </div>
            )}
            <br />
            <Button variant="success" onClick={() => navigate(`/profile`)}>
              View
            </Button>
          </div>
        </div>

        {/* Middle section */}
        <div className="middleuser">
          

          {/* Search Result */}
          <div className="searchResult">
          <center><h3 className="heading">Eligible Companies</h3></center>
        <table className="table">
          <thead>
            <tr>
              <th>companyName</th> 
              <th> jobTitle</th>
              <th>jobpackage</th>
              <th>skill</th>
              <th>qualification</th>
              <th>placementType</th>
              <th>location</th>
              <th>lastDate</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {companyData.map((company, index) => (
              <tr key={index}>
                <td>{company.companyName}</td>
                <td>{company.jobTitle}</td>
                <td>{company.jobpackage}</td>
                <td>{company.skill}</td>
                <td>{company.qualification}</td>
                <td>{company.placementType}</td>
                <td>{company.location}</td>
                <td>{company.lastDate}</td>
                <td>
                {isApplied(company.id) ? (
                <Button variant="danger" disabled>Applied</Button>
              ) : (
                <Button  style={{ marginLeft: 1 + 'em' }} variant="danger" onClick={() => handleApply(company.id)}>Apply</Button>
              )}
               </td>
              </tr>
            ))}
          </tbody>
        </table>
            
          </div>

          {/* Pagination */}
         
        </div>

      </div>
    </>
  );
}
