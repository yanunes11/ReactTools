import styles from './SubmitButton.module.css';

function SubmitButton(props) {
    const {text} = props;
    return(
        <div>
            <buttton className={styles.btn}>{text}</buttton>
        </div>
    );
}

export default SubmitButton