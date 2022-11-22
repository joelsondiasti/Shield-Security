import Head from 'next/head'
import styles from '../styles/Home.module.css'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function Home() {


  return (
    <div className={styles.app}>
      <Head>
        <title> Shield Security</title>

        <link rel="icon" href="/logo.ico" />
      </Head>

      <header className={styles.header}>
        <div>
          <img src="/logo.ico" alt="" />
          <h1>Shield Security</h1>
        </div>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger className={styles.trigger}>
            Menu
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal >
            <DropdownMenu.Content className={styles.contentTab}>
              <DropdownMenu.Item className={styles.menuTab}>
                <a href="/">
                  Home
                </a>
              </DropdownMenu.Item >
              <DropdownMenu.Separator className={styles.separador} />
              <DropdownMenu.Item className={styles.menuTab}>
                <a href="/Antivirus">
                  Antivirus
               </a>
              </DropdownMenu.Item>
              <DropdownMenu.Separator className={styles.separador} />
              <DropdownMenu.Item className={styles.menuTab}>
                <a href="/About">
                  Sobre
                </a>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>


      </header>


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

  )
}
