import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { fetchByStudentBranch } from "../services/User";
import { NavigationBar } from "./NavigationBar";
import { Sidebar } from "./SideBar";

export function StudentAccordingBranch() {
  const { branchname } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    async function populateData() {
      try {
        const response = await fetchByStudentBranch(branchname);
        setDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    populateData();
  }, [branchname]);

  return (
    <>
      <NavigationBar />
      <div className="maindiv">
        <div className="left">
          <Sidebar />
        </div>

        <div className="middletemp1">
          <h3 className="heading">Student Details</h3>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date of Birth</th>
                  <th>Address</th>
                  <th>SSC</th>
                  <th>HSC</th>
                  <th>Diploma</th>
                  <th>CGPA</th>
                  <th>Current Year</th>
                  <th>Passout Year</th>
                  <th>Branch</th>
                </tr>
              </thead>
              <tbody>
                {details.map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.dateOfBirth}</td>
                    <td>{student.address}</td>
                    <td>{student.ssc}</td>
                    <td>{student.hsc}</td>
                    <td>{student.diploma}</td>
                    <td>{student.cGPA}</td>
                    <td>{student.currentYear}</td>
                    <td>{student.passoutYear}</td>
                    <td>{student.branch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
