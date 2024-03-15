import React, { useState, useRef } from 'react';
import { useStorageUpload, useContract, useAddress } from "@thirdweb-dev/react";
import styles from "./backround.module.css"; // Ensure this path is correct

const CONTRACT_ADDRESS = "0x68c8D50aB65D81990Bb057f2c3FC62A1488B19d3";

const Modal = ({ onRequestClose }) => {
  const [imageUrl, setImageUrl] = useState("/images/1.png"); // Default image path
  const [nftName, setNftName] = useState("");
  const [nftDescription, setNftDescription] = useState("");
  const fileInputRef = useRef(null);
  const { mutateAsync: uploadToIPFS } = useStorageUpload();
  const { contract } = useContract(CONTRACT_ADDRESS);
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

      await contract?.erc721.mintTo(address, metadataUris[0]);
      alert("NFT minted successfully!");
      onRequestClose(); // Close the modal after minting
    } catch (error) {
      console.error("Minting error:", error);
      alert("Failed to mint NFT.");
    }
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <button onClick={onRequestClose} className={styles.closeButton}>&times;</button>
        <img src={imageUrl} alt="NFT Preview" className={styles.nftPreview} />
        <div className={styles.fileInputContainer}>
          <label htmlFor="file-upload" className={styles.fileInputLabel}>
            Choose Image
            <input id="file-upload" type="file" ref={fileInputRef} onChange={handleChange} className={styles.fileInput} />
          </label>
        </div>
        <input
          placeholder="Enter NFT Name"
          value={nftName}
          onChange={(e) => setNftName(e.target.value)}
          className={styles.textInput}
        />
        <textarea
          placeholder="Enter NFT Description"
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

export default Modal;
