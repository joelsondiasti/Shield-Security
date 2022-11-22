import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/header';

export default function Home() {


  return (
    <>
      <Head>
        <title> Shield Security</title>

        <link rel="icon" href="/logo.ico" />
      </Head>
      
      <div className={styles.app}>
        <Header />

        <main className={styles.main}>
          <section className={styles.section}>
            <div>
              <h1>
                Antivirus Newlleter
              </h1>
              <p>
                O intutio desse software e dar uma maior eficiencia nas pequenas coisas do seu dia a dia. Poupando o seu tempo de usar antivirus executaveis. Por isso esse antivirus nao e um executavel! ele tem todas as funcionalidades de um antivirus normal mas mesmo assim ele pode rodar nos mais diversos dispositivos tanto mobiles, web, video games e entre outros.
              </p>

              <a href="/Antivirus">
                Acesse o antivirus agora!!
              </a>
            </div>

            <img src="/Data extraction-amico.svg" alt="" />
          </section>
        </main>
      </div>
    </>
  )
}
