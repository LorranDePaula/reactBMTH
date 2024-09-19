import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.all}>
      <div className={styles.test}>
        <Image
        src="/bmth3.png"
        alt=""
        width={200}
        height={100}
        />
      </div>
      <div className={styles.imageContainer}>
      <Image
          src="/bmth.png" 
          alt="Logo Album do Bring me the Horizon"
          width={700} 
          height={800} 
        />
      </div>

      <h1 className={styles.tittle}></h1>

      <p className={styles.subtittle}>
      </p>

    </div>
  );
}
