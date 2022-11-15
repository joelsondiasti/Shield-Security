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
                                <div>
                                    <h2>Scanear</h2>
                                    <span> Verifique residuos inuteis </span>
                                </div>
            
                            </article> 

                        </Tabs.Content>
                        <Tabs.Content value="Vpn" className='ContentTabsInfo'>

                            <aside> 

                                <h2>Ativar Vpn!</h2>
                               
                            </aside>
                            
                        </Tabs.Content>
                        <Tabs.Content value="Refrigerar" className='ContentTabsInfo'>
                            
                            <section>

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