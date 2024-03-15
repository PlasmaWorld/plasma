import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { NFT as NFTType } from '@thirdweb-dev/sdk';
import NFT from './NFT'; // Assuming NFTComponent is your NFT detail display component
import { NFT_COLLECTION_ADDRESS } from '../../const/contractAddresses';
import Skeleton from '../Skeleton/Skeleton';
import styles from '../../styles/Buy.module.css';

type Props = {
  isLoading: boolean;
  data: NFTType[] | undefined;
  overrideOnclickBehavior?: (nft: NFTType) => void;
  emptyText?: string;
};

export default function NFTGrid({ isLoading, data, overrideOnclickBehavior, emptyText = 'No NFTs found for this collection.' }: Props) {
  const router = useRouter();

  const handleNavigation = (nft: NFTType) => {
    const navigatePath = `/token/${NFT_COLLECTION_ADDRESS}/${nft.metadata.id}`;
    router.push(navigatePath);
  };

  return (
    <div className={styles.nftGridContainer}>
      {isLoading ? (
        [...Array(20)].map((_, index) => (
          <div key={index} className={styles.nftContainer}>
            <Skeleton key={index} width={'100%'} height='312px' />
          </div>
        ))
      ) : data && data.length > 0 ? (
        data.map((nft) => (
          <div
            key={nft.metadata.id}
            className={styles.nftContainer}
            onClick={() => (overrideOnclickBehavior ? overrideOnclickBehavior(nft) : handleNavigation(nft))}
          >
            <NFT nft={nft} />
          </div>
        ))
      ) : (
        <p>{emptyText}</p>
      )}
    </div>
  );
}
