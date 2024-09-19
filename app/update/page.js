import Image from "next/image";
import styles from '@/app/update/update.module.css';

export default function update() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>UPDATE</h1>

      <div className={styles.imgContainer}>
        <Image
          src="/test.png" 
          alt="Image 1"
          width={200} 
          height={550} 
        />
        <div className={styles.overlay}>
          <button className={styles.button}>READ MORE</button>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image
          src="/test5.png" 
          alt="Image 2"
          width={200} 
          height={550} 
        />
        <div className={styles.overlay}>
          <button className={styles.button}>READ MORE</button>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image
          src="/test2.png" 
          alt="Image 3"
          width={200} 
          height={550} 
        />
        <div className={styles.overlay}>
          <button className={styles.button}>READ MORE</button>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image
          src="/test3.png" 
          alt="Image 4"
          width={200} 
          height={550} 
        />
        <div className={styles.overlay}>
          <button className={styles.button}>READ MORE</button>
        </div>
      </div>
    </div>
  );
}
