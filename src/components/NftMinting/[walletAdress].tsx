import React from 'react';
import { 
    ThirdwebNftMedia, 
    useAddress, 
    useContract, 
    useOwnedNFTs 
} from '@thirdweb-dev/react';
import { CONTRACT_ADDRESS } from '../../const/parameters';
import { Container, Text, Button, Group, useMantineTheme } from '@mantine/core';

export default function Profile() {
    const address = useAddress();
    const truncateAddress = (address: string) => `${address.slice(0, 6)}...${address.slice(-4)}`;
    const { contract } = useContract(CONTRACT_ADDRESS);
    const { data: ownedNFTs, isLoading: isOwnedNFTsLoading } = useOwnedNFTs(contract, address);

    // Define the desired order for displaying NFTs
    const order: string[] = ['Hydrogen', 'Deuterium', 'Tritium'];

    // Group owned NFTs by name and reorder them based on the defined order
    const groupedNFTs: { [key: string]: any[] } = {};
ownedNFTs?.forEach((nft) => {
    const name = String(nft.metadata.name); // Explicitly convert to string
    const index = order.indexOf(name);
    if (index !== -1) {
        // Assert that groupedNFTs[order[index]] is an array
        if (!Array.isArray(groupedNFTs[order[index]])) {
            groupedNFTs[order[index]] = [];
        }
        groupedNFTs[order[index]].push(nft);
    }
});



    return (
            <Container>
                {address ? (
                    <div>
                        <div>
                            <h1>Nft Dashboard</h1>
                            <p>Address: {truncateAddress(address || "")}</p>
                        </div>
                        <hr />
                        <div>
                            <h3>My NFTs:</h3>
                            <div>
                                {order.map((name) => (
                                    groupedNFTs[name] && (
                                        <div key={name}>
                                            <h4>{name}</h4>
                                            <div style={{ overflowX: "auto" }}>
                                                <div style={{ display: "flex", gap: "20px" }}>
                                                    {groupedNFTs[name].map((nft: any) => (
                                                        <div key={nft.metadata.id} className="NFTCard">
                                                            <div className="NFTVideoContainer">
                                                                <ThirdwebNftMedia metadata={nft.metadata} controls={false} />
                                                                <style jsx>{`
                                                                    .NFTVideoContainer svg .play-button {
                                                                        display: none !important;
                                                                    }
                                                                `}</style>
                                                            </div>
                                                            <Text>{nft.metadata.name}</Text>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="main">
                        <Text>Connect your wallet to view your profile.</Text>
                    </div>
                )}
            </Container>
    );
}