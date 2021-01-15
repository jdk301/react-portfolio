import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <img className="icon-logo" src="/images/my-logo.png" />
      <div className="copyright">Copyright &copy; JDEV301</div>

      <div className="footer-links">
        <a href="https://github.com/jdk301" target="_blank">
          <img className="img-desc" src="/images/github.png" />
        </a>

        <a href="https://www.linkedin.com/in/justin-kim-dc/" target="_blank">
          <img className="img-desc" src="/images/linkedin.png" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
