import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import styles from "../styles/sobre.module.css"

import { AiFillBulb, AiOutlineCode, AiOutlineCalendar, AiOutlineTeam } from "react-icons/ai";



export default function Sobre() {
  return (
    <>
      <Head>
        <title> Shield Security</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.App}>
        <Header />

        <main className={styles.main}>
          <section>
            <article>
              <Image src="/logo.ico" alt="" width={30} height={30} className={styles.img} />
              <h1>
                Quem somos?
              </h1>
            </article>

            <div>
              <p>
                A Shield Newletter e uma grande empresa do ramo da segurança de informação, criada em 1999 e que se mantem no top 3 das melhores empresas de segurança.
                No inicio da pandemia a Shield abriu vagas para pequenas startups, e a nossa pequena empresa foi acolhida pela Shield Newletter.
              </p>

              <p>
                A shield securty e uma startup focada em agilizar pequenos processos que ao olhar em uma escala maior acaba sendo um exaustivo  processo. Por isso que o nosso intuito e dar maior eficacia a esses processos para que o andar do projeto seja mais fluida
              </p>
            </div>
          </section>

          <aside className={styles.time}>
            <h1>
              <AiOutlineTeam className={styles.img}></AiOutlineTeam>
              Time
            </h1>
            <div>
              <h2>
                <AiOutlineCode className={styles.img}></AiOutlineCode>
                Programador: Danilo Romão
              </h2>
              <h2>
                <AiFillBulb className={styles.img}></AiFillBulb>
                Idealizador inicial: Gabriel Felipe, João V. Gomes e Marcos Tulio
              </h2>
              <h2>
                <AiOutlineCalendar className={styles.img}></AiOutlineCalendar>
                Desenvolvedor criativo: Vinicios e Paulo Roberto
              </h2>
            </div>
          </aside>
        </main>
      </div>
    </>
  )
}