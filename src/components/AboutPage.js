import React from "react";

const AboutPage = () => (
  <section id="aboutPage" className="about">
    <h1 className="title">Me</h1>
    <div className="about-wrapper">
      <div className="about-item item1">
        <img className="img-me" src="/images/headshot.png" />
      </div>

      <div className="about-item item2">
        <p>
          <img className="img-desc" src="/images/location.png" />
          Location: Gaithersburg, MD
        </p>
        <p>
          <img className="img-desc" src="/images/education.png" />
          Education: University of Maryland Global Campus
        </p>
        <p>
          <img className="img-desc" src="/images/major.png" />
          Major: Computer Science
        </p>
        <p>
          <img className="img-desc" src="/images/work.png" />
          Current Position: Self Employed
        </p>
        <p>
          <img className="img-desc" src="/images/resume.png" />
          Resume:{" "}
          <a href={"/documents/justin_kim.pdf"} target="_blank">
            justin_kim.pdf
          </a>
        </p>
        <p>
          <img className="img-desc" src="/images/email.png" />
          Email:{" "}
          <a href="mailto:justinkim0710@gmail.com" target="_blank">
            justinkim0710@gmail.com
          </a>
        </p>
        <p>
          <img className="img-desc" src="/images/github.png" />
          GitHub:{" "}
          <a href="https://github.com/jdk301" target="_blank">
            jdk301
          </a>
        </p>
        <p>
          <img className="img-desc" src="/images/linkedin.png" />
          Linkedin:{" "}
          <a href="https://www.linkedin.com/in/justin-kim-dc/" target="_blank">
            justin-kim-dc
          </a>
        </p>
      </div>

      <div className="about-item item3">
        <img className="logos" src="/images/lang-logos.png" />
      </div>
    </div>
  </section>
);

export default AboutPage;
