import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Aman Gupta</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built 3+ complete applications using React.js. Integrated backend
              authentication using Node.js & MongoDB. Created responsive UI/UX.

            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>NextulGulan Technologies Pvt. Ltd.</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked on MERN stack applications, developed REST APIs,
               built responsive UI components, and optimized backend 
               performance while collaborating on real-world production features.
            </p>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Logic Loop</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building Solid, a proprietary low-code platform using Angular,
              Next.js & NestJS. Delivering production-ready CMS-based projects
              including e-commerce, CRM, and import-export automation systems.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Career;
