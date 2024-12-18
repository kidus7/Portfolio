import React from "react";
import { projects } from "../../constants/constants";

const ProjectDetails = () => {
  // Retrieve project ID from the URL or other means
//   const projectId = // Get the project ID (e.g., from URL parameters)

  // Retrieve project details based on the project ID
//   const projectDetails = // Fetch or retrieve project details based on ID  

  return (
    <div>
      <h2>{projectDetails.title}</h2>
      <p>{projectDetails.description}</p>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <div>
            {/* <img src={image} alt="Project Image" /> */}
            <h3>{title}</h3>
          </div>
        )
      )}
      {/* Add other details as needed */}
    </div>
  );
};

export default ProjectDetails;
