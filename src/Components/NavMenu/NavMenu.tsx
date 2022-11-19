import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import NavsBar from './style';


function NavMenu() {
    return (
        <>
            <NavsBar>
                <Tabs.Root defaultValue="tab1" className='container'>
                    <Tabs.List aria-label="tabs example" className='tabs' >
                        <Tabs.Trigger value="Scanner" className='nameTabs' >
                            Scanner
                        </Tabs.Trigger>

                        <Tabs.Trigger value="Vpn" className='nameTabs'>
                            Vpn
                        </Tabs.Trigger>
                        
                        <Tabs.Trigger value="GerenciadorDeSenhas" className='nameTabs'>
                            Senhas
                        </Tabs.Trigger>

                    </Tabs.List>


                    <Tabs.Content value="Scanner" className='ContentTabs'>

                        <h1>Scanner</h1>
                        <img src="/scan.png" alt="" />
                        <section>

                            <p>
                                Scanner e uma ferramente que vasculha por todo seu dispositivo a procura de programas maliciosos e residuos de arquivos inuteis.
                            </p>

                            <button>
                                Scannear agora
                            </button>
                        </section>
                    </Tabs.Content>

                    <Tabs.Content value="GerenciadorDeSenhas" className='ContentTabs'>

                        <h1>Gerenciar Senhas</h1>
                        <img src="/privacidade.png" alt="" />
                        <section>

                            <p>
                                O gerenciador de senhas lhe ajuda a criar e manter suas senhas protegidas contra ataques externos
                            </p>
                            <button>
                                Inciar gerenciador
                            </button>

                        </section>
                    </Tabs.Content>

                    <Tabs.Content value="Vpn" className='ContentTabs'>

                        <h1>Vpn</h1>
                        <img src="/vpn.png" alt="" />
                        <section>

                            <p>
                                O vpn e uma ferramenta que oculta e criptografia o seu endereço de ip, afim de manter a sua segurança ao acessar sites duvidosos.
                            </p>
                            <button>
                                Ativar vpn agora
                            </button>
                        </section>
                    </Tabs.Content>

                </Tabs.Root>

            </NavsBar>
        </>
    )
}

export default NavMenu;