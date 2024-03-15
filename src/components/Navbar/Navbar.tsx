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
            <Link href="/" passHref>
              <a className={`${styles.homeLink} ${styles.navLeft}`}>
                <Image src="/logo.png" width={48} height={48} alt="NFT marketplace logo"/>
              </a>
            </Link>
            
            <div className={`${styles.navMiddle} ${!isPC ? styles.hideOnMobile : ''}`}>
              <Link href="/" passHref><a className={styles.link}>Home</a></Link>
              <Link href="/Mint" passHref><a className={styles.link}>NftLaunchpad</a></Link>
              <Link href="/NftCollection" passHref><a className={styles.link}>NftCollection</a></Link>
              <Link href="/buy" passHref><a className={styles.link}>Buy</a></Link>
              <Link href="/sell" passHref><a className={styles.link}>Sell</a></Link>
            </div>

            <div className={styles.navRight}>
            <ConnectWallet
        theme={"dark"}
        auth={{ loginOptional: false }}
        switchToActiveChain={true}
        modalSize={"wide"}
      />
  {address && (
    <Link href={`/profile/${address}`} passHref>
      <a className={styles.profileLink}>
        <div className={styles.profileImageContainer}>
          <Image src="/user-icon.png" width={42} height={42} alt="Profile"/>
        </div>
      </a>
    </Link>
              )}
            </div>

            {!isPC && (
              <div className={styles.burgerMenu}>
                <Burger opened={opened} onClick={() => setOpened(!opened)} />
              </div>
            )}
            <Drawer opened={opened} onClose={() => setOpened(false)} title="Menu" padding="xl" size="sm">
              <div style={{ paddingTop: '75px' }}> 
               Plasma World Foundation
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Link href="/" className={styles.link}>Home</Link>
              <Link href="/Mint" className={styles.link}>Nft LaunchPad</Link>
              <Link href="/NftCollection" className={styles.link}>Nft Collection</Link>
              <Link href="/buy" className={styles.link}>MarketPlace</Link>
              <Link href="/sell" className={styles.link}>Sell</Link>

               {/* More links */}
              </div>
              </div>
            </Drawer>
          </nav>
        </div>
      </MantineProvider>
    </SpotlightProvider>
  );
});
