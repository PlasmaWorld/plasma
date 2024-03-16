import React, { useState, useRef } from 'react';
import { useStorageUpload, useContract, useAddress } from "@thirdweb-dev/react";
import styles from "./Modal.module.css"; // Your CSS module for styling
import { Engine } from "@thirdweb-dev/engine";
import { IotexNetworkTestnet } from "@thirdweb-dev/chains";

const CONTRACT_ADDRESS = "0x4ae6FA0e0ba62Fc852961da745615B159bBE5e6b";

  const NewModal = ({ onRequestClose }) => {
    const address = useAddress();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [nftName, setNftName] = useState<string>("");
    const [nftDescription, setNftDescription] = useState<string>("");
    const [mintingNFT, setMintingNFT] = useState<boolean>(false);
  
    const processFile = (file: File) => {
      console.log("Processing file for preview:", file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
        console.log("File loaded for preview");
      };
      reader.readAsDataURL(file);
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Handling file input change");
      const files = e.target.files;
      if (files && files.length > 0) {
        console.log("File selected:", files[0].name);
        processFile(files[0]);
      }
    };
  
    const handleFileSelect = () => {
      console.log("File input clicked");
      fileInputRef.current?.click();
    };
  
    const reset = () => {
      console.log("Resetting form");
      setImageUrl(null);
      setNftName("");
      setNftDescription("");
    };
  
    const handleMint = async () => {
      console.log("Minting process started");
      if (!fileInputRef.current || !fileInputRef.current.files || fileInputRef.current.files.length === 0) {
        console.error("No file selected");
        return;
      }
    
      setMintingNFT(true);
      try {
        const formData = new FormData();
        formData.append('name', nftName);
        formData.append('description', nftDescription);
        formData.append('image', fileInputRef.current.files[0]);
        formData.append('address', address || '');
    
        console.log("Sending mint request to server");
        const response = await fetch("/api/mintNFT", {
          method: "POST",
          body: formData,
        });
    
        const data = await response.json();
    
        if (!response.ok) {
          throw new Error(data.message || "Something went wrong");
        }
        console.log("NFT minted successfully:", data);
      } catch (error) {
        console.error("Minting error:", error);
      } finally {
        alert("NFT minted!"); // Consider replacing this with a more user-friendly notification
        setMintingNFT(false);
        reset(); // This already clears the form, so no need to repeat those steps
      }
    };
  
    console.log("Rendering component", { address, imageUrl, nftName, nftDescription, mintingNFT });
  


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
