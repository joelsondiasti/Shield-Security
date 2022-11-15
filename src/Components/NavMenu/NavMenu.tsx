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
                            One
                        </Tabs.Trigger>

                        <Tabs.Trigger value="Vpn" className='infoTabs'>
                            Two
                        </Tabs.Trigger>

                        <Tabs.Trigger value="Refrigerar" className='infoTabs'>
                            Three
                        </Tabs.Trigger>
                    </Tabs.List>
                    <article className='ContentTabs'>
                        
                        <Tabs.Content value="Scanner" className='ContentTabsInfo'>
                            Tab one content
                        </Tabs.Content>
                        <Tabs.Content value="Vpn" className='ContentTabsInfo'>
                            Tab two content
                        </Tabs.Content>
                        <Tabs.Content value="Refrigerar" className='ContentTabsInfo'>
                            Tab three content
                        </Tabs.Content>
                    </article>
                </Tabs.Root>
            </NavsBar>
        </>
    )
}

export default NavMenu;