import ProjectForm from '../Project/ProjectForm';
import styles from './NewProject.module.css';
function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Create Project</h1>
            <p>Create your project for adding new services</p>
            <ProjectForm/>
        </div>
    );
}

export default NewProject