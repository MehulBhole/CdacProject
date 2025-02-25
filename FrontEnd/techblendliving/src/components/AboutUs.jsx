import React from "react";
import teamMemberImage1 from "../media2/five.jpg";
import teamMemberImage2 from "../media2/seven.jpg";
import teamMemberImage3 from "../media/prasad.png";
import teamMemberImage4 from "../media/Shwetal.jpg";
import teamMemberImage5 from "../media/Shoeb.jpg";
import img7 from "../media2/five.jpg";
import img8 from "../media2/seven.jpg";

import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { Container } from "react-bootstrap";

import '../Css/AboutUs.css';
import { NavigationBar } from "./NavigationBar";

export function AboutUs() {
    return (
        <>
            <NavigationBar></NavigationBar>
            <body class="AboutUsbody" style={{ height: '180vh' }}>
                <section className="section-white mt-5">
                    <div className="container_text-center" style={{ background: '#fff', paddingBottom: '20px' }}>
                        <h1>About Us</h1>
                      
                       

                    </div>
                </section>
                <section className="section-white mt-5">
                    <div class = "main-aboutus" >
                        <center>
                            <br />
                            <div className="info-aboutus">
                   <center> <h4>Who are we ?</h4></center><br />
                        <div className="head-content">
                            <h5>TechBlendLiving redefines the way we engage with technology by curating a diverse array of features that
                                cater to the modern lifestyle. From smart home solutions to personalized tech experiences, we strive to
                                enhance convenience, comfort, and connectivity in every aspect of daily life. Dive into a world where
                                intelligent technology seamlessly integrates with your living spaces, making every moment smarter, safer,
                                and more enjoyableAt TechBlendLiving, we believe in the power of tech fusion – the harmonious integration
                                of innovation into our daily routines Our project not only introduces state-of-the-art technologies but also
                                cultivates a community centered around the shared vision of a tech-enhanced lifestyle. Discover a blend of
                                creativity, functionality, and connectivity that transforms the ordinary into the extraordinary.

                            </h5>

                            <h5>
                                Explore a new era of living with TechBlendLiving, where the boundaries between the physical and digital worlds
                                fade away. Our project stands as a testament to the endless possibilities when technology is thoughtfully woven
                                into the fabric of everyday life. Join us on this journey of discovery, where your living spaces become an
                                immersive playground of technological wonders
                            </h5>
                            
                        </div></div>
                        
                        <div className="row">
                            
                            <br />
                            <div className="col-md-12">
                            <div className="section-white mt-5 text-center">
                                <h2 className="section-title">Meet The Team</h2>
                                <p className="section-subtitle mt-3"><strong>In our collaborative workspace, every team member is a vital piece of the puzzle.</strong><br></br>
                                    <strong>Let's introduce you to the individuals who make it all happen.</strong></p>
                            </div>
                                <div className="team-item" style={{ margin: '3%', padding: '0' }}>
                                    <hr />
                                    <div className="row">{/* alisha */}
                                        <div className="col-md-2">
                                            <img src={teamMemberImage1} className="team-img" style={{ width: '100%', height: '30vh', marginBottom: '10px', marginTop: "20%" }} alt="pic" />
                                        </div>
                                        <div className="col-md-10">

                                            <div >
                                                <br />
                                                <h3 >Gayatri Chaudhari</h3>
                                                <br />
                                                <p >
                                                    Gayatri is a passionate and dedicated team member. With a keen interest in technology, she brings creativity and innovation to our projects.
                                                    Her ability to think outside the box and embrace emerging trends ensures that our solutions are not only cutting-edge but also user-friendly.
                                                    gayatri's attention to detail and problem-solving skills make her an invaluable asset to our team, contributing to the seamless execution of our projects.
                                                    <br></br>
                                                    Phone-No. - 7754829321,<br></br>
                                                    Email - gayatri123@gmail.com
                                                </p>
                                                {/* <div className="social-icons" style={{ display: 'flex', alignItems: 'center' }}> */}
                                                <a href="https://www.linkedin.com/in/alisha-pawar-5032b31b9/" className="BsLinkedin">
                                                    <BsLinkedin className="linkedin-icon" />
                                                    LinkedIn
                                                </a>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <span className="icon-space"></span>
                                                <a href="#" className="BsTwitter">
                                                    <BsTwitter className="twitter-icon" />
                                                    Twitter
                                                </a>
                                                {/* </div> */}

                                            </div>
                                        </div>

                                    </div>
                                    <br /><hr /><br />
                                   
                                    <div className="row">{/* Mehul */}
                                        <div className="col-md-2">
                                            <img src={teamMemberImage2} className="team-img" style={{ width: '100%', height: '30vh', marginBottom: '10px', marginTop: "20%" }} alt="pic" />
                                        </div>
                                        <div className="col-md-10">

                                            <div >
                                                <br />
                                                <h3 >Komal Dhobale</h3>
                                                <br />
                                                <p >
                                                    Komal is a dynamic and innovative team member known for his creative problem-solving skills. Her ability to think critically and approach challenges
                                                    with a fresh perspective ensures that our projects benefit from innovative and effective solutions.Komal's dedication to staying up-to-date
                                                    with the latest industry trends and technologies allows her to bring cutting-edge ideas to the table, contributing to the success of our tech-driven initiatives.<br></br>
                                                    Details: <br></br>
                                                    Phone-No. - 9954829321,<br></br>
                                                    Email - komal723@gmail.com<br></br>
                                                </p>
                                                {/* <div className="social-icons" style={{ display: 'flex', alignItems: 'center' }}> */}
                                                <a href="#" className="BsLinkedin">
                                                    <BsLinkedin className="linkedin-icon" />
                                                    LinkedIn
                                                </a>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <span className="icon-space"></span>
                                                <a href="https://www.linkedin.com/in/mehul-bhole-062923195/" className="BsTwitter">
                                                    <BsTwitter className="twitter-icon" />
                                                    Twitter
                                                </a>
                                                {/* </div> */}

                                            </div>
                                        </div>

                                    </div>
                                    <br /><hr /><br />
                                   
                                </div>
                            </div>
                            {/* Team Member 2 (Mehul Bhole) */}

                        </div></center>
                    </div>




                </section >


            </body >

        </>
    );
}