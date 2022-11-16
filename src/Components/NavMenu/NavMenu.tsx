import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import NavsBar from './style';


function NavMenu() {
    return (
        <>
            <NavsBar>
                <Tabs.Root
                    defaultValue="tab1" orientation="vertical" className='Content'
                >
                    <Tabs.List aria-label="tabs example" className='Tabs'>
                        <Tabs.Trigger value="Scanner" className='infoTabs'>
                            Scanner
                        </Tabs.Trigger>

                        <Tabs.Trigger value="Vpn" className='infoTabs'>
                            Vpn
                        </Tabs.Trigger>

                        <Tabs.Trigger value="Refrigerar" className='infoTabs'>
                            Privacidade
                        </Tabs.Trigger>
                    </Tabs.List>
                    <article className='ContentTabs'>

                        <Tabs.Content value="Scanner" className='ContentTabsInfo'>

                            <article>
                                <h1>
                                    funções de limpar arquivos inuteis
                                </h1>
                            </article>

                        </Tabs.Content>
                        <Tabs.Content value="Vpn" className='ContentTabsInfo'>

                            <aside>

                                <h1>Funcionalidades de vpn</h1>

                            </aside>

                        </Tabs.Content>
                        <Tabs.Content value="Refrigerar" className='ContentTabsInfo'>

                            <section>
                                <h1> funçoes que limita ações em segundo plano</h1>

                            </section>

                        </Tabs.Content>
                    </article>
                </Tabs.Root>
                <input type="hidden" name="" />
            </NavsBar>
        </>
    )
}

export default NavMenu;