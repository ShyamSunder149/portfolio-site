import data from "../data/projects.json";
import { useState } from "react";
import { headingCss } from "../utils/tailwindVars";

const Projects: React.FC = () => {
  let projects: Project[] = [];
  projects = Object.keys(data).map(
    (projectName) => data[projectName as keyof typeof data]
  );

  const [showDeploymentModal, setShowDeploymentModal] = useState(false);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const handleDeploymentClick = (project: Project) => {
    if (project.deploymentLink == null) {
      setModalProject(project);
      setShowDeploymentModal(true);
    } else {
      console.log("poda piunsa")
      window.open(project.deploymentLink, '_blank');
    }
  };

  return (
    <div>
      <h2 className={`${headingCss}`}>Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-5">
        {projects.map((project, index) => (
          <div key={index} className="border-solid border-2 p-6 border-white rounded-lg flex flex-col gap-2">
            <p className="text-xl leading-7">{project.title}</p>
            <p className="text-sm">{project.desc}</p>
            <div className="flex flex-row gap-2">
              <a href={project.githubLink} target="_blank" className="text-sky-600">
                Github
              </a>
              <a href={project.deploymentLink || "#"} rel="noopener noreferrer" onClick={() => handleDeploymentClick(project)} className="text-sky-600">
                Deployment
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="block border-solid border-2 rounded-xl px-4 pb-1 text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
        {showDeploymentModal && modalProject && (
          <div className="fixed flex justify-center top-0 left-0 right-0 bottom-0 items-center bg-gray-500 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg flex flex-col align-middle justify-center">
              <p className="text-black">The Project is yet to be deployed</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowDeploymentModal(false)}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
