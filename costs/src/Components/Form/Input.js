import styles from './Input.module.css';

function Input(props) {
    const {type, text, name, placeholder, handleOnChange, value} = props;
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input type={type} name={name} placeholder={placeholder} id={name}></input>
        </div>
    );
}

export default Input