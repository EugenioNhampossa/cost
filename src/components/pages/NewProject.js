import { useHistory } from "react-router-dom";
import ProjectForm from "../projects/ProjecForm";
import styles from "./NewProject.module.css";

function NewProject() {
  const history = useHistory();

  function createPost(project) {
    // Initialize const and services
    project.cost = 0;
    project.services = [];

    fetch("")
  }

  return (
    <div className={styles.newProject_container}>
      <h1>New Project</h1>
      <p>Create your project to add services</p>
      <ProjectForm btnText="Create Project" />
    </div>
  );
}

export default NewProject;
