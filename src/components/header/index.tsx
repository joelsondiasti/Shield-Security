import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Head from 'next/head';
import styles from './style.module.css'

function Header() {
  return (
    <>
     
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
    </>
  )
}

export default Header