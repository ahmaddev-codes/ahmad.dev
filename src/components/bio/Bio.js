import { React, useState } from "react";
import "../bio/Bio.scss";
import github from "../../icons/github.png";
import excellencePerk from "../../icons/excellence.png";
import speedPerk from "../../icons/speed.png";
import qualityPerk from "../../icons/quality.png";
import teamPlayPerk from "../../icons/team.png";
import resumeFile from "../../files/Resume.pdf";
import { MdOutlineQrCode2 } from "react-icons/md";

const Bio = () => {
  const [QrCodeView, setQrCodeView] = useState("");
  return (
    <section id="bio" className="bio">
      <article className="bio__header">
        <div className="bio__header__details">
          <div className="bio__header__details__image"></div>
          <a
            href="https://github.com/iAhm-codes"
            rel="noreferrer"
            target="_blank"
          >
            View my GitHub Profile
            <img src={github} alt="github"></img>
          </a>
        </div>

        <ul className="bio__header__perks">
          <li className="perks__details">
            <div>
              <img src={excellencePerk} alt="excellence"></img>
            </div>
            <div>#Excellence</div>
          </li>

          <li className="perks__details">
            <div>
              <img src={speedPerk} alt="excellence"></img>
            </div>
            <div>#Speed</div>
          </li>

          <li className="perks__details">
            <div>
              <img src={qualityPerk} alt="excellence"></img>
            </div>
            <div>#Quality</div>
          </li>

          <li className="perks__details">
            <div>
              <img src={teamPlayPerk} alt="excellence"></img>
            </div>
            <div>#Team Player</div>
          </li>
        </ul>

        <div className="bio__header__text">
          <h1>
            “Boss, Na your <span className="fade">hand</span> I dey o, make{" "}
            <span className="fade">Sapa</span> no go choke{" "}
            <span className="fade">me</span> for throat. &nbsp;
            <span className="fade">Abeg</span> Hire me”
          </h1>
          <p>
            Tijani S. Ahmad &emsp;
            <span className="fade small">Front End Web Developer</span>
          </p>
        </div>
      </article>

      <article className="bio__text">
        <h1>My Bio</h1>

        <ul>
          <li>
            <span className="fade">Tijani Ahmad</span> is a Front End Web
            Developer with 1+ years of experience in developing for the Web
            using the core front-end technologies - HTML, CSS and JavaScript.
          </li>
          <li>
            He has knowledge in using the libraries and frameworks of the above
            mentioned front-end technologies, which includes but not limited to
            {" "}<span className="fade">Tailwind CSS</span> and{" "}
            <span className="fade">React.Js</span>.
          </li>
          <li>
            Collaborating with team members using Version Control Systems (VCS)
            like {" "}<span className="fade">Git</span> and{" "}
            <span className="fade">GitHub</span>, and writing{" "}
            <span className="fade">clean code</span> for readability and code
            debugging.
          </li>
          <li>
            Tijani Ahmad is also proficient in using industry standard design
            principles in creating user centered UI with 2+ years of experience
            in {" "}<span className="fade">User Interface</span>
            {" "}and <span className="fade">experience design</span>.
          </li>
          <li>
            Designing for <span className="fade">Accessibility</span> and{" "}
            <span className="fade">Inclusivity</span> to ensure all users’ needs
            are considered during the design process and keeping it in mind
            through the development and production stage.
          </li>
        </ul>
      </article>

      <article className="bio__file">
        <p>Download my CV here</p>

        <div className="bio__file__details">
          <a href={resumeFile} download>
            CV (PDF)
          </a>
          <a href={QrCodeView} onClick={() => setQrCodeView("#contact")}>
            SCAN CODE
            <MdOutlineQrCode2 />
          </a>
        </div>
      </article>
    </section>
  );
};

export default Bio;
