import { ThirdwebNftMedia } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import { FC, useState } from "react";
import styles from "../components/NftCard.module.css";
import { useRouter } from 'next/router';

interface INFTCardProps {
  nft: NFT;
}

export const NFTCard: FC<INFTCardProps> = ({ nft }) => {
  const [hover, setHover] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/nft/${nft.metadata.id}`);
  };

  return (
    <div
      className={`${styles.nftCard} ${hover ? styles.hoveredCard : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      <ThirdwebNftMedia
        metadata={nft.metadata}
        className={styles.nftImage}
      />

      {hover && (
        <div className={styles.hoverContent}>
          <h1 className={styles.nftName}>{nft.metadata.name}</h1>
          <div className={styles.nftOwner}>
            <span className={styles.ownerLabel}>Owner:</span>
            <span className={styles.ownerAddress}>{nft.owner}</span>
          </div>
        </div>
      )}
    </div>
  );
};
