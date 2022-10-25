import styles from './Container.module.css';

function Container(props) {
    return (
        <div className={`${styles.container} ${props[styles.customClass]}`}>{props.children}
        </div>
    );
}

export default Container