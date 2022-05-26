import ProjectForm from "../projects/ProjecForm";
import styles from "./NewProject.module.css";

function NewProject() {
  return (
    <div className={styles.newProject_container}>
      <h1>New Project</h1>
      <p>Create your project to add services</p>
      <ProjectForm btnText="Create Project" />
    </div>
  );
}

export default NewProject;
