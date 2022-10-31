import styles from './SubmitButton.module.css';

function SubmitButton(props) {
    const {text} = props;
    return(
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    );
}

export default SubmitButton