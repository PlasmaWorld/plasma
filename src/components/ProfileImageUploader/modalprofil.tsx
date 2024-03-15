import React, { useState, useRef } from 'react';
import { useStorageUpload, useContract, useAddress } from "@thirdweb-dev/react";
import styles from "./Modal.module.css"; // Your CSS module for styling
import { Engine } from "@thirdweb-dev/engine";
import { IotexNetworkTestnet } from "@thirdweb-dev/chains";

const CONTRACT_ADDRESS = "0x4ae6FA0e0ba62Fc852961da745615B159bBE5e6b";

  const NewModal = ({ onRequestClose }) => {
  const [imageUrl, setImageUrl] = useState("/1.png"); // Initial image
  const [nftName, setNftName] = useState("");
  const [nftDescription, setNftDescription] = useState("");
  const fileInputRef = useRef(null);
  const { mutateAsync: uploadToIPFS } = useStorageUpload();
  const { contract } = useContract(CONTRACT_ADDRESS);
  const engine = new Engine({
    url: process.env.TW_ENGINE_UR,
    accessToken: process.env.TW_ACCESS_TOKEN,
  });
  const address = useAddress();

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result.toString());
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMint = async () => {
    if (!fileInputRef.current.files[0]) {
      console.error("No file selected");
      return;
    }
  
    const file = fileInputRef.current.files[0];
    try {
      const imageUris = await uploadToIPFS({ data: [file] });
      if (imageUris.length === 0) {
        throw new Error("Failed to upload file to IPFS");
      }
  
      const metadata = {
        name: nftName,
        description: nftDescription,
        image: imageUris[0],
      };
  
      const metadataBlob = new Blob([JSON.stringify(metadata)], { type: 'application/json' });
      const metadataUris = await uploadToIPFS({ data: [new File([metadataBlob], "metadata.json")] });
      if (metadataUris.length === 0) {
        throw new Error("Failed to upload metadata to IPFS");
      }
  
      await engine.erc721.mintTo(
        IotexNetworkTestnet.chain, // The blockchain network chain
        CONTRACT_ADDRESS, // The contract address you're interacting with
        process.env.TW_BACKEND_WALLET, // The backend wallet address, assuming this is correct as per your setup
        {
          receiver: process.env.TW_BACKEND_WALLET, // The address to receive the minted NFT, adjust as needed
          metadata: JSON.stringify(metadata), // The metadata for the NFT
          // Include any transaction overrides if necessary
        },
        false, // Whether to simulate the transaction or not
        // You can include the smart account address if applicable
      );
    } catch (error) {
      console.error("Error during NFT minting:", error);
    }
  };
  


  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <button onClick={onRequestClose} className={styles.closeButton}>X</button>
        <img src={imageUrl} alt="NFT Preview" className={styles.nftPreview} />
        <input type="file" ref={fileInputRef} onChange={handleChange} className={styles.fileInput} />
        <input
          placeholder="NFT Name"
          value={nftName}
          onChange={(e) => setNftName(e.target.value)}
          className={styles.textInput}
        />
        <textarea
          placeholder="NFT Description"
          value={nftDescription}
          onChange={(e) => setNftDescription(e.target.value)}
          className={styles.textareaInput}
        />
        <button onClick={handleMint} className={styles.mintButton}>
          Mint NFT
        </button>
      </div>
    </div>
  );
};

export default NewModal;
