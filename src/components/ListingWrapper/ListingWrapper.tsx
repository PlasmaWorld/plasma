import React from "react";
import { useNFT, useContract, DirectListingV3, EnglishAuction } from "@thirdweb-dev/react";
import Link from "next/link";
import { NFT_COLLECTION_ADDRESS } from "../../const/contractAddresses";
import styles from "../../styles/Buy.module.css";
import NFTComponent from "../NFT/NFT"; // Ensure this points to your NFT display component
import Skeleton from "../Skeleton/Skeleton";

// Assuming the listing object contains all necessary information
type Props = {
  listing: DirectListingV3 | EnglishAuction;
};

export default function ListingWrapper({ listing }: Props) {
  const { contract: nftContract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data: nft, isLoading } = useNFT(nftContract, listing.asset.id);

  if (isLoading) {
    return <Skeleton width="100%" height="312px" />;
  }

  if (!nft) {
    return <p>NFT data could not be loaded.</p>;
  }

  // Construct the link to the NFT detail page
  const nftDetailLink = `/token/${NFT_COLLECTION_ADDRESS}/${nft.metadata.id}`;

  return (
    <div className={styles.nftContainer}>
      <Link href={nftDetailLink} passHref>
        <a>
          {/* Use NFTComponent to display the NFT details */}
          <NFTComponent nft={nft} />
        </a>
      </Link>
    </div>
  );
}
