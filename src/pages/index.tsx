import Head from 'next/head'
import TopWeb from '../Components/header/head'
import App from '../styles/home'


export default function Home() {
  return (
    <>
      <Head>
        <title>Shield Securiy</title>

        <link rel="icon" href="/logo.ico" />
      </Head>


      <App>
        <div>


          <TopWeb />

          <main>
            <section>
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

              <img src="/assets/Data extraction-amico.svg" alt="" />
            </section>
          </main>
        </div>
      </App>

    </>
  )
}
