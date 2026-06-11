import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:a.mann20044@gmail.com" data-cursor="disable">
                a.mann20044@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>B-TECH in Informatin Technology</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/amangupta20044"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/aman-gupta-031381266?original_referer="
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            {/* <a
              href="https://x.com/raxx21_official"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a> */}
            {/* <a
              href="https://www.instagram.com/therajeshchityal"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a> */}
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Aman Gupta</span>
            </h2>
            {/* <h5>
              <MdCopyright /> 2025
            </h5> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
