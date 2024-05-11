import React, { useEffect, useState } from "react";
import { Button, Col, Container, Nav, NavDropdown, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import "../Css/Home.css";
import { FaSearch } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import img4 from "../media2/one.JPG";
import img5 from "../media2/two.JPG";
import img6 from "../media2/four.jpeg";
import img7 from "../media2/five.jpg";
import img8 from "../media2/seven.jpg";
import img1 from "../media/3.jpg";
import img2 from "../media/8.jpg";
import img3 from "../media/9.jpg";
import { useNavigate } from "react-router-dom";
import BackTop from "antd/es/float-button/BackTop";
import { NavigationBar } from "./NavigationBar";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Footer } from "./Footer";
export function Home() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  const navigate = useNavigate();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  
  const customStyles = `
    .custom-nav {
      background-color: #fff;
      color: black;
      padding: 8px 15px;
      font-size: 14px;
    }

    .custom-nav a {
      color: black;
    }

    .custom-nav .nav-link.active,
    .custom-nav .nav-link:hover {
      background-color: #2980b9; /* Set background color for active/hover state */
    }
  `;

  return (
    <div className="mainbdy">
      <NavigationBar></NavigationBar>
      <style>{customStyles}</style>

      <br />
      <div className="slice-1">
        <div className="bg-main">
          <div className="main-big-circle">
            <center>
            <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100"
      src={img4}
      alt="First slide"
      style={{ height: '70vh', objectFit: 'cover' , borderRadius:'30px'}} />
        
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100"
      src={img5}
      alt="First slide"
      style={{ height: '70vh', objectFit: 'cover', borderRadius:'30px' }}/>
       
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100"
      src={img6}
      alt="First slide"
      style={{ height: '70vh', objectFit: 'cover' , borderRadius:'30px' }}/>
        
      </Carousel.Item>
      
    </Carousel>
            </center>
            <br />
          
           
            
          </div>
         
        </div>
        <center>
          <div className="img-bulding">
           <h1><b>Welcome to PVPIT Placement Cell</b></h1>

            <br />

            <h5>For Your Entire Placement Journey.</h5>
          </div>
        </center>
        <br />
        <br />
        
      </div>
      <div className="slice-2">
        <br />
        
         <div className="slice-2div">
          <div className="textdiv">
            <h2 style={{"padding-bottom":"10px"}}>Placement Portal</h2>
            <h5>The singular motive of the Training and Placement (T&P) department is to recognize potential and to continuously motivate and nurture such potential. The T&P department believes that talent alone cannot suffice in today's challenging environment and hence assembles various methods of training to the students, such as technical workshops, soft skills sessions, personalized lectures, counseling and much more. The mission is to ensure each student that crosses the boundaries of this Institution into the competitive world, is sufficiently well equipped and a creative contributor towards the nation's economic growth.</h5>
          </div>
          <div>
            <img style={{"border-radius":"20px"}} src="https://code-placement.000webhostapp.com/assets/img/feature-7.jpg" height={300} width={300}  alt="" />
          </div>
         </div>
        <br />
        <br />
        <br />
        
        <br />
        <br />
        <br />
        
        <br />
      </div>
      <div className="slice-1">
      <br />
        <br />
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <center>
          <img src="https://code-placement.000webhostapp.com/assets/img/clients/client-2.png" />
          </center>
        </SwiperSlide>
        <SwiperSlide> <center>
          <img src="https://code-placement.000webhostapp.com/assets/img/clients/client-4.png" />
          </center></SwiperSlide>
        <SwiperSlide> <center>
          <img src="https://code-placement.000webhostapp.com/assets/img/clients/client-6.png" />
          </center></SwiperSlide>
        <SwiperSlide> <center>
          <img src="https://code-placement.000webhostapp.com/assets/img/clients/client-7.png" />
          </center></SwiperSlide>
        <SwiperSlide> <center>
          <img src="https://code-placement.000webhostapp.com/assets/img/clients/client-8.png" />
          </center></SwiperSlide>
        <SwiperSlide> <center>
          <img src="https://code-placement.000webhostapp.com/assets/img/clients/client-4.png" />
          </center></SwiperSlide>
        <SwiperSlide> <center>
          <img src="https://code-placement.000webhostapp.com/assets/img/clients/client-3.png" />
          </center></SwiperSlide>
        
      </Swiper>
      <br></br>
      <br></br>
      
      <h3 style={{"color":"#00308F"}}><b>CAREER MILESTONE</b></h3>
        <br />
        <br />
        <section className="agents">
          <Row>
            <Col xs={12} md={6} lg={3}>
              <Card
                className="card-img-top"
                style={{ width: "20rem", margin: "10px" }}
              >
                <Card.Img
                  variant="top"
                  src={img7}
                  objectFit= "contain"
                  
                  height="200" // Replace "URL_OF_YOUR_IMAGE" with the actual URL of your image
                  
                />
                <Card.Body>
                  <Card.Title>Gayatri Chaudhari</Card.Title>
                  <Card.Text>Persistant</Card.Text>
                  <Card.Text>6 LPA</Card.Text>
                  <Card.Text>E&TC</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card
                className="card-img-top"
                style={{ width: "20rem", margin: "10px" }}
              >
                <Card.Img
                  variant="top"
                  src={img8}
                  objectFit= "contain"
              
                  height="200"
                />
                <Card.Body>
                 
                  <Card.Title>Komal Dhobale</Card.Title>
                  <Card.Text>Persistant</Card.Text>
                  <Card.Text>6 LPA</Card.Text>
                  <Card.Text>E&TC</Card.Text>
                
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card
                className="card-img-top"
                style={{ width: "20rem", margin: "10px" }}
              >
                <Card.Img
                  variant="top"
                  src={img7}
                  objectFit= "contain"
                  
                  height="200"
                 
                />
                <Card.Body>
                <Card.Title>Gayatri Chaudhari</Card.Title>
                  <Card.Text>Persistant</Card.Text>
                  <Card.Text>6 LPA</Card.Text>
                  <Card.Text>E&TC</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card
                className="card-img-top"
                style={{ width: "20rem", margin: "10px" }}
              >
                <Card.Img
                  variant="top"
                  src={img8}
                  objectFit= "contain"
                 
                  height="200"
                  
                />
                <Card.Body>
                <Card.Title>Komal Dhobale</Card.Title>
                  <Card.Text>Persistant</Card.Text>
                  <Card.Text>6 LPA</Card.Text>
                  <Card.Text>E&TC</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
        </section>
        <br />
        <br />
        <br />
        <br />
        {showBackToTop && (
          <BackTop>
            <Button
              type="primary"
              shape="circle"
              icon={<i class="fa-solid fa-chevron-up"></i>}
              onClick={scrollToTop}
            />
          </BackTop>
        )}
      </div>
      
    </div>
  );
}
