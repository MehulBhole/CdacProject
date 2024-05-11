import React from "react";

export function Footer() {
  const footerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const linkStyle = {
    color: "#fff",
    marginRight: "20px",
    textDecoration: "none",
    fontSize: "14px",
  };

  const socialLinkStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: "#fff",
    margin: "0 10px",
    fontSize: "15px",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div>
          <div style={{ fontWeight: "bold", marginBottom: "10px" }}>© PVPIT Placement Portal</div>
          <div>
            <a href="https://m.magicbricks.com/mbs/about.html" style={linkStyle}>
              About Us
            </a>
            <a href="https://m.magicbricks.com/mbs/privacy.html" style={linkStyle}>
              Contact us
            </a>
          </div>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/company/padmabhooshan-vasantdada-patil-institute-of-technology-bavdhan-6122/" className="linkedin" style={socialLinkStyle} title="LinkedIn">
            <i className="bi bi-linkedin"></i> LinkedIn
          </a>
          <a href="https://www.instagram.com/pvpitbavdhan6122?igsh=NzNrbWhpemI5NHV3" className="instagram" style={socialLinkStyle} title="Instagram">
            <i className="bi bi-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
