import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  githubLink?: string;
  liveLink?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  return (
    <div className="work-image">
      <div
        className="work-image-in"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
      >
        {(props.githubLink || props.liveLink) && (
          <div className="work-links">
            {props.githubLink && (
              <a
                href={props.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
                data-cursor="disable"
              >
                <FaGithub />
              </a>
            )}
            {props.liveLink && (
              <a
                href={props.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
                data-cursor="disable"
              >
                <MdArrowOutward />
              </a>
            )}
          </div>
        )}
        <img src={props.image} alt={props.alt} />
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </div>
    </div>
  );
};

export default WorkImage;
