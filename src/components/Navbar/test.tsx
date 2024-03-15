import React, { useEffect, useState } from 'react';
import { ConnectWallet, darkTheme, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { Burger, Drawer, MantineProvider } from '@mantine/core';
import { SpotlightProvider } from '@mantine/spotlight';
import { Search } from 'tabler-icons-react';
import { observer } from "mobx-react-lite";

export const Navbar = observer(() => {
  const address = useAddress();
  const [opened, setOpened] = useState(false);
  const [isPC, setIsPC] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const match = window.matchMedia('(min-width: 768px)').matches;
      setIsPC(match);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <SpotlightProvider actions={[]} searchIcon={<Search size={20} />} searchPlaceholder="Search..." shortcut="mod + k" nothingFoundMessage="Nothing found...">
      <MantineProvider theme={{ fontFamily: 'Oxanium, sans-serif;', colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
              <Image src="/logo.png" width={48} height={48} alt="NFT marketplace sample logo"/>
            </Link>
            <div className={styles.navMiddle}>
              <Link href="/home" className={styles.link}>Home</Link>
              <Link href="/mint" className={styles.link}>NftLaunchpad</Link>
              <Link href="/NftCollection" className={styles.link}>NftCollection</Link>
              <Link href="/buy" className={styles.link}>Buy</Link>
              <Link href="/sell" className={styles.link}>Sell</Link>
            </div>           
             <div className={styles.navRightAlways}>
              <ConnectWallet theme={darkTheme()} />
              {address && (
                <Link href={`/profile/${address}`} className={styles.link}>
                  <Image className={styles.profileImage} src="/user-icon.png" width={42} height={42} alt="Profile"/>
                </Link>
              )}
            </div>

            {/* Burger Menu for Mobile */}
            {!isPC && (
              <Burger opened={opened} onClick={() => setOpened(!opened)} className={styles.burgerMenu} />
            )}

            {/* Drawer for Mobile */}
            <Drawer opened={opened} onClose={() => setOpened(false)} title="Menu" padding="xl" size="sm">
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <Link href="/home" className={styles.link}>Home</Link>
                  <Link href="/mint" className={styles.link}>NftLaunchpad</Link>
                  <Link href="/NftCollection" className={styles.link}>NftCollection</Link>
                  <Link href="/buy" className={styles.link}>Buy</Link>
                  <Link href="/sell" className={styles.link}>Sell</Link>
                  </div>
            </Drawer>
          </nav>
        </div>
      </MantineProvider>
    </SpotlightProvider>
  );
});
