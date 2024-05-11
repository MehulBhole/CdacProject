import React, { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import "../Css/Dashboard.css";
import { FaUser } from "react-icons/fa";
import { OwnerDeleteById, getOnwerById, getOwnerById, propertyDataFetch, sendDataOwner } from "../services/Owner";
import { useNavigate } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import { Sidebar } from "./SideBar";
import { sendDataServiceDetails, serviceDeleteById, servicesDataFetch } from "../services/ServiceProvider";
import Select from 'react-select';

const options = [
    { value: 'Computer Engineering', label: 'Computer Engineering' },
    { value: 'Electronics and Telecommunication Engineering', label: 'Electronics and Telecommunication Engineering' },
    { value: 'Civil Engineering', label: 'Civil Engineering' },
    { value: 'Mechanical Engineering', label: 'Mechanical Engineering' },
    // Add more options as needed
];
export function Dashboard() {
  const id = sessionStorage.getItem("owner-id");
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);

  const [formData, setFormData] = useState({
    companyName:'',
    jobTitle: '',
    jobpackage: '',
    skill: '',
    qualification:'',
    placementType:'',
    location:'',
    lastDate:'',
    branch:''
  });
  const handleChange = (e) => {
  
    setFormData({ ...formData, [e.target.name]: e.target.value });
  console.log(formData);
};

const handleDelete = async (propertyid) => {
  try {
    const response = await serviceDeleteById(propertyid);
    populateData();
  } catch (error) {
    console.log(error);
  }
}

const handleSave = async (e) => {
  e.preventDefault();
  console.log(id);
  try {
    const response = await sendDataServiceDetails(formData);
    if (response.data.status) {
      alert("Company Details Added !!");
    }
    populateData();
  } catch (error) {
    console.log(error);
  }
}

  
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChangeBranch = (selectedOptions) => {
      setSelectedOptions(selectedOptions);
      const selectedValues = selectedOptions.map(option => option.value).join(',');
      setFormData({ ...formData, branch: selectedValues });
  };

  async function populateData() {
    try {

      const propertydata = await servicesDataFetch(id);
      setDetails(propertydata.data);
      console.log(propertydata);
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
    <div className="maindiv">
      <div className="leftdash">
        <Sidebar></Sidebar>
      </div>
      <div className="middledash">
        <center><h3 className="heading">Company Details</h3></center>
        <hr></hr>
        <div className="row">
          <div className="col-md-6">
            <section>
              <form >
                <label htmlFor="companyName">Company Name</label>
                <input type="text" name="companyName" onChange={handleChange} required />
                <label htmlFor="jobTitle">Job Title</label>
                <input type="text" name="jobTitle" onChange={handleChange} required />
                <label htmlFor="jobpackage">Package</label>
                <input type="text" name="jobpackage" onChange={handleChange} required />
                <label htmlFor="skill">Skills</label>
                <input type="text" name="skill" onChange={handleChange} required />
                <label htmlFor="qualification">Qualification</label>
                <input type="text" name="qualification" onChange={handleChange} required />
              </form>
            </section>
          </div>
          <div className="col-md-6">
            <section>
              <form >
                <label htmlFor="placementType">Placement Type</label>
                <input type="text" name="placementType" onChange={handleChange} required />
                <label htmlFor="location">Location</label>
                <input type="text" name="location" onChange={handleChange} required />
                <label htmlFor="lastDate">Last Date</label>
                <input type="date" name="lastDate" onChange={handleChange} required />
                <label htmlFor="branch">Branch</label>
                <Select
                  id="branch"
                  name="branch"
                  options={options}
                  value={selectedOptions}
                  onChange={handleChangeBranch}
                  isMulti
                  closeMenuOnSelect={false}
                />
                
              </form>
              
            </section>
            
          </div>
          <center>
                  <button className="nxtbtn" onClick={handleSave}>Save</button>
                </center>
        </div>
      </div>
    </div>
    </>
  );
}
