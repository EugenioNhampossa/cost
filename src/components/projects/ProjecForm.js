import styles from "./ProjectForm.module.css";
import Input from "../Form/Input";
import Select from "../Form/Select";
import SubmitButton from "../Form/SubmitButton";

function ProjectForm({ btnText }) {
  return (
    <form className={styles.form}>
      <div>
        <Input
          type="text"
          name="name"
          id="id"
          text="Project Name:"
          placeholder="Insert project name"
        />
      </div>
      <div>
        <Input
          type="text"
          name="totalBudget"
          id="totalBudget"
          text="Total Budget"
          placeholder="Enter total budget"
        />
      </div>
      <div>
        <Select name="projectCateg" text="Project Category" />
      </div>
      <div>
        <SubmitButton text={btnText} />
      </div>
    </form>
  );
}

export default ProjectForm;
