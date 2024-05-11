import { Button } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import {
  fetchById,
  fetchByStudentId,
  insertData,
  insertUpdatedData,
} from "../services/User";
import { useNavigate } from "react-router-dom";
import "../Css/Profile.css";
import { getOwnerById } from "../services/Owner";
import { getServiceById } from "../services/ServiceProvider";
import { NavigationBar } from "./NavigationBar";

export function Profile() {
  const navigate = useNavigate();
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
    city: "",
    branch: "",
    ssc: "",
    hsc: "",
    cGPA: "",
    address: "",
    skills: "",
    diploma: "",
    currentYear: "",
    passoutYear: "",
    dateOfBirth: "",
  });

  const [editedUserData, setEditedUserData] = useState({ ...userdata });
  const [dataStatus, setDataStatus] = useState(false);
  useEffect(() => {
    populateData();
  }, []);

  async function populateData() {
    try {
      if (sessionStorage.getItem("owner-id") !== null) {
        const id = sessionStorage.getItem("owner-id");
        const response = await getOwnerById(id);
        setUserData(response.data);
      }

      if (sessionStorage.getItem("service-id") !== null) {
        const id = sessionStorage.getItem("service-id");
        const response = await getServiceById(id);
        setUserData(response.data);
      }
      if (sessionStorage.getItem("id") !== null) {
        const id = sessionStorage.getItem("id");
        const response = await fetchByStudentId(id);
        console.log(response);
        setEditedUserData(response.data);
      }
    } catch (error) {
      console.log(error);
      const id = sessionStorage.getItem("id");
      const response = await fetchById(id);
      setEditedUserData(response.data);
      setDataStatus(true);
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({ ...editedUserData, [name]: value });
  };

  const handleGoBack = () => {
    if (sessionStorage.getItem("id") != null) navigate(-1);
    if (sessionStorage.getItem("owner-id") != null) navigate(-1);
  };

  const handleUpdate = () => {
    try {
      const id = sessionStorage.getItem("id");
      const response = insertUpdatedData(id, editedUserData);
      alert("Data Updated Successfully ");
    } catch (error) {
      console.log(error);
    }
    setUserData({ ...editedUserData });
  };
  const handleSave = () => {
    try {
      console.log(dataStatus);
      const id = sessionStorage.getItem("id");
      const response = insertData(id, editedUserData);
      alert("Data Inserted Successfully ");
      setDataStatus(false);
    } catch (error) {
      console.log(error);
    }
    setUserData({ ...editedUserData });
  };

  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="profile-container">
        <Button
          className="backbtn"
          variant="btn btn-outline-success"
          onClick={handleGoBack}
        >
          Back
        </Button>
        <div className="card-header">
          <h2>Profile</h2>
          <hr />
        </div>
        <div className="card-body">
          <div className="user-data">
            <div className="user-details-column">
              <div className="user-details">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={editedUserData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="user-details">
                <label>DOB:</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={editedUserData.dateOfBirth}
                  onChange={handleInputChange}
                />
              </div>
              <div className="user-details">
                <label>Email:</label>
                <input
                  type="text"
                  name="email"
                  value={editedUserData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="user-details">
                <label>Phone No:</label>
                <input
                  type="text"
                  name="phoneNo"
                  value={editedUserData.phoneNo}
                  onChange={handleInputChange}
                />
              </div>
              <div className="user-details">
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={editedUserData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="user-details">
                <label>SSC:</label>
                <input
                  type="text"
                  name="ssc"
                  value={editedUserData.ssc}
                  onChange={handleInputChange}
                />
              </div>
              <div className="user-details">
                <label>HSC:</label>
                <input
                  type="text"
                  name="hsc"
                  value={editedUserData.hsc}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="user-details-column">
              <div className="user-details">
                <label>Diploma:</label>
                <input
                  type="text"
                  name="diploma"
                  value={editedUserData.diploma}
                  onChange={handleInputChange}
                />
              </div>
              <div className="user-details">
                <label htmlFor="branch">Branch:</label>
                <select
                  name="branch"
                  value={editedUserData.branch}
                  onChange={handleInputChange}
                >
                  <option value="Computer Engineering">Computer Engineering</option>
                  <option value="Electronics and Telecommunication Engineering">Electronics and Telecommunication Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                </select>
              </div>

              <div className="user-details">
                <label>CGPA:</label>
                <input
                  type="text"
                  name="cGPA"
                  value={editedUserData.cGPA}
                  onChange={handleInputChange}
                />
              </div>
              <div className="user-details">
                <label>Current Year:</label>
                <input
                  type="text"
                  name="currentYear"
                  value={editedUserData.currentYear}
                  onChange={handleInputChange}
                />
              </div>
              <div className="user-details">
                <label>Passout Year:</label>
                <input
                  type="text"
                  name="passoutYear"
                  value={editedUserData.passoutYear}
                  onChange={handleInputChange}
                />
              </div>
              <div className="user-details">
                <label>Skills:</label>
                <input
                  type="text"
                  name="skills"
                  value={editedUserData.skills}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="edit-buttons">
            {dataStatus ? (
              <Button variant="success" onClick={handleSave}>
                Save
              </Button>
            ) : (
              <Button variant="success" onClick={handleUpdate}>
                UpdateData
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
