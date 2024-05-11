import React, { useEffect, useState } from 'react';
import "../Css/Sidebar.css"
import { getOwnerById } from '../services/Owner';
import { useNavigate } from "react-router-dom";

export function Sidebar() {
    const id = sessionStorage.getItem("owner-id");
    const navigate = useNavigate();
    const [profileowner, setProfileOwner] = useState({
        name: "",
        email: "",
        password: "",
        phoneNo: "",
        city: "",
    });

    async function populateData() {
        try {
            const response = await getOwnerById(id);
            setProfileOwner(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateData();
    }, []);

    const handleDropdownChange = (event) => {
        const selectedOption = event.target.value;
        navigate(`/private/private/studentbranch/${selectedOption}`);
    };

    return (
        <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>TPO DASHBOARD</h3>
                </div>

                <ul className="list-unstyled components">
                    {profileowner && (
                        <div className="userdiv">
                            <b>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {profileowner.name}</b>
                        </div>
                    )}
                    {profileowner && (
                        <div className="userdiv">
                            <b>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{profileowner.email}</b>
                        </div>
                    )}
                    {profileowner && (
                        <div className="userdiv">
                            <b>Contact No: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{profileowner.phoneNo}</b>
                        </div>
                    )}
                    <br></br>
                    <li>
                        <button className="nxtbtn home-btn" onClick={() => {
                            navigate(`/private`);
                        }}>Home</button>
                    </li>
                   
                   
                  
                   
                    <li>
                        <button className="nxtbtn added-companies-btn" onClick={() => {
                            navigate(`/private/private/tempview`);
                        }}>Added Companies</button>
                    </li>
                    <li>
                        <button className="nxtbtn added-companies-btn" onClick={() => {
                           navigate(`/private/private/studentbranch/Electronics and Telecommunication Engineering`);
                        }}>E&TC</button>
                    </li>
                    <li>
                        <button className="nxtbtn added-companies-btn" onClick={() => {
                            navigate(`/private/private/studentbranch/Computer Engineering`);
                        }}>Computer</button>
                    </li>
                    <li>
                        <button className="nxtbtn added-companies-btn" onClick={() => {
                            navigate(`/private/private/studentbranch/Mechanical Engineering`);
                        }}>Mechanical</button>
                    </li>
                    <li>
                        <button className="nxtbtn added-companies-btn" onClick={() => {
                           navigate(`/private/private/studentbranch/Civil Engineering`);
                        }}>Civil</button>
                    </li>
                    {/* <li>
                        <select className="dropdown" onChange={handleDropdownChange}> 
                            <option value="">Branch</option>
                            <option value="Computer Engineering">Computer Engineering</option>
                            <option value="Electronics and Telecommunication Engineering">Electronics and Telecommunication Engineering</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                        </select>
                    </li> */}
                    
                </ul>

               
            </nav>
        </div>
    );
}
