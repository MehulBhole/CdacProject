import React, { useEffect, useState } from "react";
import { FaFacebookMessenger, FaUser } from "react-icons/fa";
import { CompanyDetailsFetch, emailSendId, getOwnerById, propertyDataFetch } from "../services/Owner";
import { Button, Container, Row, Table } from "react-bootstrap";
import { fetchChatById, fetchChatReceiverById, messagesReceived, sendChatData } from "../services/Chat";
import { fetchById } from "../services/User";
import { useNavigate } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import { Sidebar } from "./SideBar";
import { serviceDeleteById } from "../services/ServiceProvider";
import "../Css/TempView.css";

export function TempView() {
  const ownerId = sessionStorage.getItem("owner-id");
   const navigate = useNavigate();
  const [details, setDetails] = useState([]);
  const [userData, setUserData] = useState([]);
  const [showChatWindow, setShowChatWindow] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [profileOwner, setProfileOwner] = useState({
    name: "",
    email: "",
    password: "", 
    phoneNo: "",
    city: "",
  });
  const [messages, setMessages] = useState([]);
  const handleDelete = async (propertyid) => {
    try {
      const response = await serviceDeleteById(propertyid);
      populateData();
    } catch (error) {
      console.log(error);
    }
  }
  const handleEmail = async (companyId) => {
    try {
      const response = await emailSendId(companyId);
      console.log(response.data);
      alert("Email sent Successfully !");
      populateData();
    } catch (error) {
      console.log(error);
    }
  }
  async function populateData() {
    try {
     
      const propertyDataResponse = await CompanyDetailsFetch();
      setDetails(propertyDataResponse.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // async function fetchData() {
    //   try {
    //     const ownerResponse = await getOwnerById(ownerId);
    //     setProfileOwner(ownerResponse.data);

    //     const propertyDataResponse = await CompanyDetailsFetch();
    //     setDetails(propertyDataResponse.data);

    //     const chatsResponse = await messagesReceived(ownerId);
    //     const uniqueSendersArray = Array.from(
    //       new Set(chatsResponse.data.map((message) => message.senderId))
    //     );

    //     const userDataPromises = uniqueSendersArray.map(async (senderId) => {
    //       const userDataResponse = await fetchById(senderId);
    //       return userDataResponse.data;
    //     });

    //     const userDataArray = await Promise.all(userDataPromises);
    //     setUserData(userDataArray);

    //     const messagesPromises = uniqueSendersArray.map(async (userId) => {
    //       const chatFetch = await fetchChatById(ownerId, userId);
    //       const replyChat = await fetchChatReceiverById(userId, ownerId);
    //       return [...chatFetch.data, ...replyChat.data];

    //     });

    //     const allMessages = await Promise.all(messagesPromises);
    //     const combinedMessages = allMessages.flat();
    //     setMessages(combinedMessages);
    //     console.log(messages);

    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    // fetchData();
    populateData()
  }, []);

  const toggleChatWindow = () => {
    setShowChatWindow(!showChatWindow);
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() !== "") {
      const receiverId = sessionStorage.getItem("user-id");

      const messageObject = {
        senderId: ownerId,
        receiverId: receiverId,
        message: newMessage,
        senderName: profileOwner.name
      };

      setNewMessage("");

      try {
        const response = await sendChatData(messageObject);
        setMessages(prevMessages => [...prevMessages, messageObject]);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleUserSelect = async (userId) => {
    try {
      const chatFetch = await fetchChatById(ownerId, userId);
      setMessages(chatFetch.data);
      sessionStorage.setItem("user-id", userId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <NavigationBar></NavigationBar>
    <div className="maindiv">
       
      <div className="left">
      <Sidebar></Sidebar>
        
      </div>

      <div className="middletemp">
        <center><h3 className="heading">Company Details</h3></center>
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
            {details.map((company, index) => (
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
                <Button style={{ marginLeft: 1 + 'em' , marginBottom: 1 + 'em' }} variant="success" onClick={() => {
                          handleEmail(company.id)
                        }}>Send Emails</Button>
                        <Button style={{ marginLeft: 1 + 'em' }} variant="danger" onClick={() => {
                          handleDelete(company.id)
                        }}>Delete</Button>
                        
                       </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
    </>
  );
}


