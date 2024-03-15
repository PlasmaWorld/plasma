import React, { useState, useEffect } from "react";
import NewModal from "./modalprofil"; // Ensure this path is correct
import Home from "./ImageCropper"; // Ensure this path is correct
import ImageCropper2 from "./ImageCopperBackround"; // Ensure this path is correct
import { useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
import { CONTRACT_Profile } from '../../const/parameters'; // Ensure this path is correct

const PencilIcon = () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="pencil w-6 h-6">
        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
        <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4l-6 6H2V6z" clipRule="evenodd"></path>
    </svg>
);

const ProfilePage = () => {
    const address = useAddress();
    const { contract } = useContract(CONTRACT_Profile);
    const { data: ownedNFTs, isLoading: isOwnedNFTsLoading } = useOwnedNFTs(contract, address);
    const [modalOpen, setModalOpen] = useState(false);
    const initialProfileImageUrl = "https://avatarfiles.alphacoders.com/161/161002.jpg";
    const [profileImageUrl, setProfileImageUrl] = useState(initialProfileImageUrl);
    const [nftName, setNftName] = useState("Loading NFT...");
    const [nftDescription, setNftDescription] = useState("");

    useEffect(() => {
        if (ownedNFTs && ownedNFTs.length > 0) {
            const nft = ownedNFTs[0];
            if (nft.metadata.image) {
                setProfileImageUrl(nft.metadata.image);
            }
            setNftName(nft.metadata.name || "Unnamed NFT");
            setNftDescription(nft.metadata.description || "No description");
        }
    }, [ownedNFTs]);

    const handleProfileImageUpdate = (newImageUrl) => {
        setProfileImageUrl(newImageUrl);
        setModalOpen(false); 
    };

    return (
        <div className="flex flex-col items-center pt-12">
            <div className="relative">
                <img src={profileImageUrl + `?${Date.now()}`} alt="Profile" className="rounded-full h-32 w-32 object-cover" />
                <button
                    className="absolute -bottom-3 right-0 m-auto w-fit p-2 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600"
                    title="Change photo"
                    onClick={() => setModalOpen(true)}
                >
                    <PencilIcon />
                </button>
            </div>
            <h2 className="text-white font-bold mt-6">{nftName}</h2>
            <p className="text-gray-500 text-xs mt-2">{nftDescription}</p>
            {modalOpen && (
                <NewModal
                 onRequestClose={() => setModalOpen(false)}
                 />
                )}
            </div>
            );
        };

export default ProfilePage;
