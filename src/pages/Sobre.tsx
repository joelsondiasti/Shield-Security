import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import styles from "../styles/sobre.module.css"

export default function Sobre() {
  return (
    <>
      <Head>
        <title> Shield Security</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.App}>
        <Header />

        <main>
          <section>
            <Image src="/logo.ico" alt="" width={30} height={30} />
            <h1>
              Quem somos?
            </h1>
          </section>
          <p>
            A Shield Newletter e uma grande empresa do ramo da segurança de informação, criada em 1999 e que se mantem no top 3 das melhores empresas de segurança.
            No inicio da pandemia a Shield abriu vagas para pequenas startups, e a nossa pequena empresa foi acolhida pela Shield Newletter.
          </p>

          <p>
            A shield securty e uma startup focada em agilizar pequenos processos que ao olhar em uma escala maior acaba sendo um exaustivo  processo. Por isso que o nosso intuito e dar maior eficacia a esses processos para que o andar do projeto seja mais fluida
          </p>
        </main>
      </div>
    </>
  )
}