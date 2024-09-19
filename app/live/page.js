
import Header from '@/components/header/Header';
import styles from '@/app/live/livePage.module.css';

export default function Live() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>LIVE</h1>
      <div className={styles.content}>
        <div className={styles.showWrapper}>
          <ul className={styles.show}>
            <li><strong>November 30, 2024</strong></li>
            <li>ALLIANZ PARQUE</li>
            <li>SÃO PAULO, BRAZIL</li>
          </ul>
          <button className={styles.getTicketsButton}>Get Tickets</button>
        </div>

        <div className={styles.showWrapper}>
          <ul className={styles.show}>
            <li><strong>December 2, 2024</strong></li>
            <li>MOVISTAR ARENA</li>
            <li>SANTIAGO, CHILE</li>
          </ul>
          <button className={styles.getTicketsButton}>Get Tickets</button>
        </div>

        <div className={styles.showWrapper}>
          <ul className={styles.show}>
            <li><strong>December 8, 2024</strong></li>
            <li>MOVISTAR ARENA</li>
            <li>BUENOS AIRES, ARGENTINA</li>
          </ul>
          <button className={styles.getTicketsButton}>Get Tickets</button>
        </div>

        <div className={styles.showWrapper}>
          <ul className={styles.show}>
            <li><strong>December 11, 2024</strong></li>
            <li>MOVISTAR ARENA</li>
            <li>BOGOTA, COLOMBIA</li>
          </ul>
          <button className={styles.getTicketsButton}>Get Tickets</button>
        </div>

        <div className={styles.showWrapper}>
          <ul className={styles.show}>
            <li><strong>December 14, 2024</strong></li>
            <li>EXPLANADA DEL ESTADIO AZTECA</li>
            <li>MEXICO CITY, MEXICO</li>
          </ul>
          <button className={styles.getTicketsButton}>Get Tickets</button>
        </div>

        <div className={styles.showWrapper}>
          <ul className={styles.show}>
            <li><strong>June 8, 2025</strong></li>
            <li>ROCK AM RING</li>
            <li>NURGURG, GERMANY</li>
          </ul>
          <button className={styles.getTicketsButton}>Get Tickets</button>
        </div>
      </div>
    </div>
  );
}



