import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "AI-Powered Website Builder",
    category: "Full Stack Web Application, Generative AI",
    tools: "React.js, Node.js, Express.js, Prisma ORM, Google Gemini API, HTML, Tailwind CSS",
    image: "/images/Solidx.png",
    githublink:"https://github.com/amangupta20044/website-builder",
    livelink:"https://website-builder-sigma-lac.vercel.app/",
  },
  {
    title: "CodeJam – Real-Time Collaborative Coding Platform",
    category: "Real-Time Web Application",
    tools: "MERN Stack, Socket.IO, WebRTC, Monaco Editor",
    image: "/images/radix.png",
    githublink:"https://github.com/amangupta20044/CodeJam-main",
    livelink:"https://code-jam-ashy.vercel.app/",
  },
  {
    title: "AI Trip Planner",
    category: "AI-Powered Web Application",
    tools: "MERN Stack, Gemini AI, Firebase, Tailwind CSS",
    image: "/images/trip.png",
    githublink:"https://github.com/amangupta20044/ai-trip-planner-web",
    livelink:"https://ai-trip-planner-web-black.vercel.app/",
  },
  

];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {(project.githublink || project.livelink) && (
                          <div className="carousel-links">
                            {project.githublink && (
                              <a
                                href={project.githublink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="carousel-link-btn"
                                data-cursor="disable"
                              >
                                <FaGithub />
                                GitHub
                              </a>
                            )}
                            {project.livelink && (
                              <a
                                href={project.livelink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="carousel-link-btn"
                                data-cursor="disable"
                              >
                                Live
                                <MdArrowOutward />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        githubLink={project.githublink}
                        liveLink={project.livelink}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
