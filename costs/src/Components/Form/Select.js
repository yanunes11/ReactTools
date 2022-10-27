import styles from './Select.module.css';

function Select(props) {
    const {text, name, options, handleOnChange, value} = props;
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Select the option</option>
            </select>
        </div>
    );
}

export default Select