import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  const openGitHubRepo = () => {
    window.open(githubUrl, "_blank");
  };

  return (
    <Col size={12} sm={6} md={4} onClick={openGitHubRepo} style={{ cursor: "pointer" }}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};