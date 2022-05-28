import { useState, useEffect } from "react";

import styles from "./ProjectForm.module.css";
import Input from "../Form/Input";
import Select from "../Form/Select";
import SubmitButton from "../Form/SubmitButton";

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  },[])

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
        <Select
          name="projectCateg"
          text="Project Category"
          options={categories}
        />
      </div>
      <div>
        <SubmitButton text={btnText} />
      </div>
    </form>
  );
}

export default ProjectForm;
