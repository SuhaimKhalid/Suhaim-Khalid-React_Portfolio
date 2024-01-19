import React from 'react';

const Project = ({ project }) => {
  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {/* Add more details like links and images */}
    </div>
  );
}

export default Project;