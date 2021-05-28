import styles from './Loading.module.css';

const Loading = () => (
    <div className={styles.container}>
        <div className={styles.sk_folding_cube}>
            <div className={`${styles.sk_cube1} ${styles.sk_cube}`} />
            <div className={`${styles.sk_cube2} ${styles.sk_cube}`} />
            <div className={`${styles.sk_cube4} ${styles.sk_cube}`} />
            <div className={`${styles.sk_cube3} ${styles.sk_cube}`} />
        </div>
    </div>
);
export default Loading;
