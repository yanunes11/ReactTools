import { useState, useEffect} from 'react';
import Input from '../Form/Input';
import Select from '../Form/Select';
import SubmitButton from '../Form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm(props) {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/categories", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            setCategories(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    const {btnText} = props;
    return (
        <form className={styles.form}>
            <Input type="text" name="name" text="Project Name" placeholder="Insert the Project Name"/>
            <Input type="number" placeholder="Insert the Budget" name="budget" text="Budget" />
            <Select name="category_id" text="Select the Category" options={categories}/>
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm