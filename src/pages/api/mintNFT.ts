import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Invalid request method" });
  }

  // Destructure the necessary fields from your request body
  const { name, description, image } = req.body;

  // Initialize Thirdweb SDK with your secret key and wallet
  const sdk = new ThirdwebSDK(
    new ethers.Wallet(
      process.env.WALLET_PRIVATE_KEY,
      ethers.getDefaultProvider("https://babel-api.testnet.iotex.io")
    ),
    { 
      apiKey: process.env.TW_SECRET_KEY // Use the API key for authentication
    }
  );

  try {
    const collection = sdk.getContract(process.env.NEXT_PUBLIC_NFT_COLLECTION_ADDRESS);

    // Assuming you are generating a signature for minting, adjust according to your contract's methods
    // Note: The actual method to use depends on your setup and the version of SDK
    const signature = await collection.signature.generate({
      metadata: {
        name,
        description,
        image,
      },
    });

    res.json({ message: "Signature generated successfully", signature });
  } catch (error) {
    console.error("Error generating signature:", error);
    res.status(500).json({ error: error.message || "An error occurred during signature generation." });
  }
}
