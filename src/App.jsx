import Sidebar from "./assets/components/Sidebar";
import { useState } from "react";
import WelcomePage from "./assets/components/welcomePage";
import NewProjectForm from "./assets/components/NewProjectForm";
import ProjectDetails from "./assets/components/ProjectDetails";

function App() {
  const [addNewProject, setAddNewProject] = useState(false);
  const[projectsList, setProjectsList] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const NewProjectCancelHandler = () => {
    setAddNewProject(false);
    setSelectedProject(false);
  };

  const buttonHandler = () => {
    setAddNewProject(true);
    console.log("you clicked me bastard");
  };

  const AddNewProject = (title, description, date) => {
    console.log(title, description, date);
    setAddNewProject(false);
    setProjectsList((prevProjectsList) => {
      return [...prevProjectsList, {title, description, date, id: Math.random().toString()}]
    });
  };

  const onListClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onPress={buttonHandler} projects={projectsList} onListClick={onListClick} />
      {addNewProject ? (
        <NewProjectForm
          onCancel={NewProjectCancelHandler}
          onAddNewProject={AddNewProject}
        />
      ) : (selectedProject) ? (
        <ProjectDetails project={selectedProject} />
      ) : (
        <WelcomePage onPress={buttonHandler} />
      )}
    </main>
  );
}

export default App;
