import styles from './Home.module.css';
import savings from '../../images/savings.svg';
import LinkButton from '../Layouts/LinkButton';

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Welcome to the <span>Costs</span></h1>
            <p>Manage you projects!</p>
            <LinkButton to="/newproject" text="Create Project"/>
            <img src={savings} alt="Costs"></img>
        </section>
    );
}

export default Home