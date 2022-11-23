import Head from 'next/head'
import Header from '../components/header'
import style from '../styles/Antivirus.module.css'

import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { IconButton } from '@mui/material';




function Antivirus() {
  const Container = Tabs.Root
  const Tab = Tabs.List
  const Trigger = Tabs.Trigger
  const ContentTabs = Tabs.Content
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>




    </React.Fragment>
  );


  return (
    <>
      <Head>
        <title> Shield Security</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={style.App}>
        <Header />

        <main>

          <Container defaultValue="tab1" className={style.container}>
            <Tab aria-label="tabs example" className={style.Contanier}>
              <Trigger value="Scanner" className={style.Trigger}>
                Scanner
              </Trigger>

              <Trigger value="Vpn" className={style.Trigger}>
                Vpn
              </Trigger>

              <Trigger value="GerenciadorDeSenhas" className={style.Trigger}>
                Senhas
              </Trigger>
            </Tab>


            <ContentTabs value="Scanner" className={style.ContentTabs}>
              <h1>Scanner</h1>
              <img src="/scan.png" alt="" />
              <section>
                <p>
                  Scanner e uma ferramente que vasculha por todo seu dispositivo a procura de programas maliciosos e residuos de arquivos inuteis.
                </p>
                <button onClick={handleClick}>
                  Scannear agora
                </button>

                <Snackbar
                  open={open}
                  autoHideDuration={2000}
                  onClose={handleClose}
                  message="Scanner ativado"
                  action={action}
                />

              </section>
            </ContentTabs>

            <ContentTabs value="Vpn" className={style.ContentTabs}>
              <h1>Vpn</h1>
              <img src="/vpn.png" alt="" />
              <section>
                <p>
                  O vpn e uma ferramenta que oculta e criptografia o seu endereço de ip, afim de manter a sua segurança ao acessar sites duvidosos.
                </p>
                <button onClick={handleClick}>
                  Ativar vpn agora
                </button>
                <Snackbar
                  open={open}
                  autoHideDuration={3000}
                  onClose={handleClose}
                  message="O vpn foi ativado. Seu IP foi redirecionado para o Senegal."
                  action={action}
                />
              </section>
            </ContentTabs>

            <ContentTabs value="GerenciadorDeSenhas" className={style.ContentTabs}>
              <h1>Gerenciar Senhas</h1>
              <img src="/privacidade.png" alt="" />
              <section>
                <p>
                  O gerenciador de senhas lhe ajuda a criar e manter suas senhas protegidas contra ataques externos
                </p>
                <button onClick={handleClick}>
                  Inciar gerenciador
                </button>
                <Snackbar
                  open={open}
                  autoHideDuration={2000}
                  onClose={handleClose}
                  message="Iniciando o gerenciador, por favor aguarde um momento."
                  action={action}
                />
              </section>
            </ContentTabs>
          </Container>

        </main>
      </div >

    </>
  )
}

export default Antivirus