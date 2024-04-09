import Card from '../ui/dashboard/card/card';
import styles from '../ui/dashboard/dashboard.module.css';
import Rightbar from '../ui/dashboard/rightbar/rightbar';

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}></div>

      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
      </div>

      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default page;
