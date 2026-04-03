import styles from './page.module.css'

export default function Home(){
  return(
    <main className ={styles.main}>
      <div className={styles.container}>
        
        <h1 className={styles.title}>
          Hello, I'm Toricelli.
        </h1>

        <p className={styles.subtitle}>
          UCF Student | Math Minor | Backend Developer transitioning to Full Stack
        </p>

        <div className={styles.grid}>
          
          <div className={styles.card}>
            <h2 className={styles.cardTitleYellow}>Backend Skills</h2>
            <ul className={styles.list}>
              <li>Python & Data Analysis</li>
              <li>SQL Database Management</li>
              <li>Discrete Mathematics & Logic</li>
            </ul>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitleBlue}>Current Mission</h2>
            <p className={styles.text}>
              Building this Next.js portfolio to master Frontend Development and self-hosting my projects on a home server.
            </p>
          </div>
          
        </div>
      </div>
    </main>
  );
}