import React, { useRef, useState } from 'react';
import { useAddress, useContract, MediaRenderer, useStorageUpload } from "@thirdweb-dev/react";
import styles from "../../styles/Home.module.css";

const CONTRACT_ADDRESS = "0x4ae6FA0e0ba62Fc852961da745615B159bBE5e6b";

const Home = () => {
  const address = useAddress();
  const { contract } = useContract(CONTRACT_ADDRESS);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [nftName, setNftName] = useState<string>("");
  const [nftDescription, setNftDescription] = useState<string>("");
  const [mintingNFT, setMintingNFT] = useState<boolean>(false);
  // useStorageUpload hook for file uploading
  const { mutateAsync: uploadToIPFS } = useStorageUpload();

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const reset = () => {
    setImageUrl(null);
    setNftName("");
    setNftDescription("");
  };

  const handleMint = async () => {
    if (!fileInputRef.current || !fileInputRef.current.files || fileInputRef.current.files.length === 0) {
      console.error("No file selected");
      return;
    }
  
    const file = fileInputRef.current.files[0];
    setMintingNFT(true);
  
    try {
      // Upload the image file to IPFS
      const imageUris = await uploadToIPFS({ data: [file] });
      if (imageUris.length === 0) {
        throw new Error("Failed to upload file to IPFS");
      }
      const imageUrl = imageUris[0]; // Image URI from IPFS
  
      // Create a metadata JSON object
      const metadata = {
        name: nftName,
        description: nftDescription,
        image: imageUrl, // Use the IPFS image URI
      };
  
      // Convert the metadata object to a Blob
      const metadataBlob = new Blob([JSON.stringify(metadata)], { type: 'application/json' });
  
      // Upload the metadata JSON to IPFS
      const metadataUris = await uploadToIPFS({ data: [new File([metadataBlob], "metadata.json")] });
      if (metadataUris.length === 0) {
        throw new Error("Failed to upload metadata to IPFS");
      }
      const metadataUri = metadataUris[0]; // Metadata URI from IPFS
  
      // Mint the NFT with the metadata URI
      if (contract?.erc721) {
        await contract.erc721.mintTo(address, metadataUri);
        console.log("NFT minted with metadata URI:", metadataUri);
        alert("NFT minted successfully!");
      } else {
        throw new Error("Contract or ERC721 interface is not available");
      }
    } catch (error) {
      console.error("Minting error:", error);
      alert("Failed to mint NFT.");
    } finally {
      setMintingNFT(false);
      reset();
    }
  };
  

  return (
    <div className={styles.container}>
      {address ? (
        <div className={styles.minterContainer}>
          <div className={styles.mintContainerSection}>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleChange}
            />
            <button onClick={handleFileSelect}>Select File</button>
            {imageUrl && <MediaRenderer src={imageUrl} />}
            <input
              type="text"
              placeholder="NFT Name"
              value={nftName}
              onChange={(e) => setNftName(e.target.value)}
            />
            <input
              type="text"
              placeholder="NFT Description"
              value={nftDescription}
              onChange={(e) => setNftDescription(e.target.value)}
            />
          </div>
          <button
            onClick={handleMint}
            disabled={mintingNFT}
          >
            {mintingNFT ? "Minting NFT..." : "Mint NFT"}
          </button>
        </div>
      ) : (
        <p>Please connect your wallet to mint an NFT.</p>
      )}
    </div>
  );
};

export default Home;
