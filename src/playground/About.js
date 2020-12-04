import React from "react";

const About = () => (
  <div>
    <h1 className="title is-1">ABOUT</h1>
    <img src="/images/headshot.png" />
    <p>
      <img src="/images/location.png" />
      Location: Gaithersburg, MD
    </p>
    <p>
      <img src="/images/education.png" />
      Education: University of Maryland Global Campus
    </p>
    <p>
      <img src="/images/major.png" />
      Major: Computer Science
    </p>
    <p>
      <img src="/images/work.png" />
      Current Position: Self Employed
    </p>
    <p>
      <img src="/images/resume.png" />
      Resume:{" "}
      <a href={"/documents/justin_kim.pdf"} target="_blank">
        justin_kim.pdf
      </a>
    </p>
    <p>
      <img src="/images/email.png" />
      Email:{" "}
      <a href="mailto:justinkim0710@gmail.com" target="_blank">
        justinkim0710@gmail.com
      </a>
    </p>
    <p>
      <img src="/images/github.png" />
      GitHub:{" "}
      <a href="https://github.com/jdk301" target="_blank">
        jdk301
      </a>
    </p>
    <p>
      <img src="/images/linkedin.png" />
      Linkedin:{" "}
      <a href="https://www.linkedin.com/in/justin-kim-dc/" target="_blank">
        justin-kim-dc
      </a>
    </p>
    <img src="/images/lang-logos.png" />
  </div>
);

export default About;
