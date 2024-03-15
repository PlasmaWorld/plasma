import React, { useState, useEffect } from "react";
import Modal from "./modalbackround"; // Ensure this path is correct
import { useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
import { CONTRACT_Backround } from '../../const/parameters'; // Ensure this path is correct

const PencilIcon = () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="pencil w-6 h-6">
        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
        <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4l-6 6H2V6z" clipRule="evenodd"></path>
    </svg>
);

const BackgroundPage = () => {
    const address = useAddress();
    const { contract } = useContract(CONTRACT_Backround);
    const { data: ownedNFTs } = useOwnedNFTs(contract, address);
    const [modalOpen, setModalOpen] = useState(false);
    const [profileImageUrl, setProfileImageUrl] = useState("");
    const [nftDescription, setNftDescription] = useState("");


    // Assume default image if no NFTs are owned
    const defaultImageUrl = "https://avatarfiles.alphacoders.com/161/161002.jpg";

    useEffect(() => {
      if (ownedNFTs && ownedNFTs.length > 0) {
          const nft = ownedNFTs[0];
          if (nft.metadata.image) {
              setProfileImageUrl(nft.metadata.image);
          }
          setNftDescription(nft.metadata.description || "No description");
      }
  }, [ownedNFTs]);

    return (

        <div className="flex flex-col items-center pt-12">
          <p style={{
               color: "#007bff",
               fontSize: "2.25rem",
               textDecoration: "underline",
               marginBottom: "2rem",
               textAlign: "center"
            }}>{nftDescription}</p>

            <div className="relative">
            <img src={profileImageUrl + `?${Date.now()}`} alt="Profile" className="object-cover object-center w-[950px] h-[250px] border-2 border-gray-400" />
                <button
                    className="absolute -bottom-3 right-0 m-auto w-fit p-2 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600"
                    title="Change photo"
                    onClick={() => setModalOpen(true)}
                >
                    <PencilIcon />
                </button>
            </div>
            {modalOpen && (
                <Modal onRequestClose={() => setModalOpen(false)} updateImage={setProfileImageUrl} />
            )}
        </div>
        
    );
};

export default BackgroundPage;
