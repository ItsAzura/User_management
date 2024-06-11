import Image from 'next/image';
import styles from './Home.module.css';
import AddBtn from '@/Components/AddBtn/AddBtn';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>User Management</h1>
        <AddBtn />
      </div>
    </div>
  );
}
