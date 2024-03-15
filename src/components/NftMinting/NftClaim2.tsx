import type { NextPage } from "next";
import classes from "./NftCollection/Home.module.css";
import {
  MediaRenderer,
  Web3Button,
  useActiveClaimConditionForWallet,
  useAddress,
  useClaimIneligibilityReasons,
  useContract,
  useContractMetadata,
  useTotalCirculatingSupply,
  useTotalCount,
} from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../../const/parameters";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { useState, ChangeEvent, ReactElement } from "react";

const NftClaim: NextPage = (): ReactElement => {
  const address = useAddress();
  const router = useRouter();
  const maxClaimQuantity = 2;

  const { contract } = useContract(CONTRACT_ADDRESS);

  const { data: contractMetadata, isLoading: isContractMetadataLoading } = useContractMetadata(contract);

  const { data: activeClaimPhase, isLoading: isActiveClaimPhaseLoading } = useActiveClaimConditionForWallet(contract, address);

  const { data: claimIneligibilityReasons, isLoading: isClaimIneligibilityReasonsLoading } = useClaimIneligibilityReasons(contract, {
    walletAddress: address || "",
    quantity: 1,
  });

  const { data: totalSupply, isLoading: isTotalSupplyLoading } = useTotalCount(contract);
  const { data: totalClaimSupply, isLoading: isTotalClaimSupplyLoading } = useTotalCirculatingSupply(contract);

  const [claimQuantity, setClaimQuantity] = useState<number>(1);
  const increment = () => {
    if (claimQuantity < maxClaimQuantity) {
      setClaimQuantity(claimQuantity + 1);
    }
  };
  const decrement = () => {
    if (claimQuantity > 1) {
      setClaimQuantity(claimQuantity - 1);
    }
  };

  const handleClaimQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(e.target.value, 10);
    if (!isNaN(quantity) && quantity >= 1 && quantity <= maxClaimQuantity) {
      setClaimQuantity(quantity);
    }
  };

  return (
    <div className={classes.container}>
      <main className={classes.main}>
        {!isContractMetadataLoading && contractMetadata ? (
          <div className={classes.heroSection}>
            <div className={classes.collectionImage}>
              <img src="/images/1.png" alt="Your image" />
            </div>
            <div>
              <h1>{contractMetadata.name}</h1>
              <p>{contractMetadata.description}</p>
              {!isActiveClaimPhaseLoading && activeClaimPhase ? (
                <div>
                  <p>Claim Phase: {activeClaimPhase.metadata?.name}</p>
                  <p>Price: {ethers.utils.formatUnits(activeClaimPhase.price, "ether")} IOTX</p>
                </div>
              ) : (
                <p>Loading...</p>
              )}
              {!isTotalSupplyLoading && !isTotalClaimSupplyLoading && totalSupply && totalClaimSupply ? (
                <p>Claimed: {totalClaimSupply.toNumber()} / {totalSupply.toNumber()}</p>
              ) : (
                <p>Loading...</p>
              )}
              {address ? (
                !isClaimIneligibilityReasonsLoading && claimIneligibilityReasons ? (
                  claimIneligibilityReasons.length > 0 ? (
                    claimIneligibilityReasons.map((reason, index) => <p key={index}>{reason}</p>)
                  ) : (
                    <div>
                      <p>Eligible to claim</p>
                      <div className={classes.claimContainer}>
                        <div className={classes.claimValue}>
                          <button className={classes.claimBtn} onClick={decrement}>-</button>
                          <input
                            className={classes.claimInput}
                            type="number"
                            value={claimQuantity}
                            onChange={handleClaimQuantityChange}
                            style={{ color: "white", width: '100px' }}
                          />
                          <button className={classes.claimBtn} onClick={increment}>+</button>
                        </div>
                        <div>
                          <Web3Button
                            contractAddress={CONTRACT_ADDRESS}
                            action={(contract) => contract.erc721.claim(claimQuantity)}
                            onSuccess={() => router.push('/Mint')} // Modify as needed
                            onError={(error) => console.error("Claim error:", error)} // Handle errors appropriately
                          >
                            Claim NFT
                          </Web3Button>
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  <p>Checking Eligibility...</p>
                )
              ) : (
                <p>Connect Wallet to claim</p>
              )}
            </div>
          </div>
        ) : (
          <p>Loading contract metadata...</p>
        )}
      </main>
    </div>
  );
};

export default NftClaim;
