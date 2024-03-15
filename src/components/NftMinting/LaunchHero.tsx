import React, { useState, useEffect } from 'react';
import { Title, Text, Button, Group, Image, List, ThemeIcon } from '@mantine/core';
import { IconRocket, IconWorld, IconDeviceMobile, IconMagnet } from '@tabler/icons-react';
import styles from './home.module.css'; 

export function HeroNft() {
  const [showAdditionalImage, setShowAdditionalImage] = useState(false);
  const firstImageSrc = '/NftRocket.png'; // Main image always shown
  const additionalImageSrc = '/NftHero.png'; // Additional image shown on smaller screens
  const additionalImageSrc2 = '/images/1.png'; // Second additional image for smaller screens
  const additionalImageSrc3 = '/images/2.png'; // Second additional image for smaller screens
  const additionalImageSrc4 = '/images/3.png'; // Second additional image for smaller screens


  useEffect(() => {
    const handleResize = () => {
      setShowAdditionalImage(window.innerWidth < 768); // Show additional images on smaller screens
    };

    handleResize(); // Check immediately on load
    window.addEventListener('resize', handleResize); // Adjust on window resize
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <Title order={1} className={styles.title}>
        PlasmaVerse: Elevating the <span className="highlight">Web3 Marketplace on the IoTeX Network</span>
      </Title>
      <div className={styles.featuresContainer}>
        <div className={styles.textContent}>
          <Text className={styles.text}>
            Enter PlasmaVerse, a universe where you can buy, sell, and launch NFTs with unparalleled ease. Engage with a cutting-edge Web3 store, and explore the IoTeX network with PlasmaWorld and Thirdweb. Here, innovation meets utility, transforming your digital assets into tokens of value and function.
          </Text>
          <List className={styles.featuresList}>
            <List.Item icon={<ThemeIcon size={20} radius="xl" color="blue"><IconRocket stroke={1.5} /></ThemeIcon>} className={styles.listItem}>
              Innovative NFT Minting – Harness the power of the IoTeX blockchain to create digital assets. Build and expand your community within the vast expanse of PlasmaVerse.
            </List.Item>
            <List.Item icon={<ThemeIcon size={20} radius="xl" color="blue"><IconMagnet stroke={1.5} /></ThemeIcon>} className={styles.listItem}>
              Web3 Store Integration – Explore a fully integrated Web3 store, making the buying, selling, and showcasing of NFTs seamless. Your gateway to a new era of digital commerce.
            </List.Item>
            <List.Item icon={<ThemeIcon size={20} radius="xl" color="blue"><IconDeviceMobile stroke={1.5} /></ThemeIcon>} className={styles.listItem}>
              Real-world Applications – Discover NFTs that offer more than collectibility; unlock real value and experiences in diverse realms.
            </List.Item>
          </List>
        </div>

        <div>
          <Image src={firstImageSrc} alt="NFT visualization" className={styles.heroImage} />
          {showAdditionalImage && (
            <>
              <Image src={additionalImageSrc} alt="Additional NFT visualization" className={styles.additionalImage} />
              <Image src={additionalImageSrc2} alt="Second Additional NFT visualization" className={styles.additionalImage} />
              <Image src={additionalImageSrc3} alt="Third Additional NFT visualization" className={styles.additionalImage} />
              <Image src={additionalImageSrc4} alt="Third Additional NFT visualization" className={styles.additionalImage} />
            </>
          )}
        </div>
      </div>

      <Group spacing="md">
        <Button radius="xl" size="md" className={styles.button}>
          Download IoPay
        </Button>
        <Button variant="outline" radius="xl" size="md" className={styles.outlineButton}>
          Explore the Marketplace
        </Button>
      </Group>
    </div>
  );
}

export default HeroNft;
