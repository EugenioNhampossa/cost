import styles from "./Container.module.css";

function Container(props) {
  return (
    /**
     * All containers will use the class [container] but some containers
     * have to implement especific classes that will be recieved in
     * props.customClass
     */
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {props.children}
    </div>
  );
}
export default Container;
