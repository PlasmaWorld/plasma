import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import { Engine } from "@thirdweb-dev/engine";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { CONTRACT_Profile } from "../../const/parameters";
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

// Declare the MintRequest interface
interface MintRequest {
  receiver: string;
  metadata: {
    name?: string | number | null;
    description?: string | null;
    image?: string | null;
    external_url?: string | null;
    animation_url?: string | null;
    properties?: null;
    attributes?: null;
    background_color?: null;
  } | string;
  txOverrides?: {
    value?: string; // For payable minting functions (if applicable)
    gasLimit?: string; // Example: "500000"
    gasPrice?: string; // Example: "20000000000" (20 Gwei in wei)
  };
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed, please use POST" });
  }

  const form = new IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: "Error parsing the file upload" });
    }

    // Extract fields and file upload data
    const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
    const description = Array.isArray(fields.description) ? fields.description[0] : fields.description;
    const address = Array.isArray(fields.address) ? fields.address[0] : fields.address;
    const imageFile = files.image ? files.image[0] : null;

    if (!name || !description || !imageFile || !address) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Check for required environment variables
    const { TW_ENGINE_URL, TW_ACCESS_TOKEN, TW_BACKEND_WALLET, TW_SECRET_KEY } = process.env;
    if (!TW_ENGINE_URL || !TW_ACCESS_TOKEN || !TW_BACKEND_WALLET || !TW_SECRET_KEY) {
      return res.status(500).json({ error: "Missing environment variables" });
    }

    try {
      const storage = new ThirdwebStorage({ secretKey: TW_SECRET_KEY });
      const fileData = fs.readFileSync(imageFile.filepath);
      const uri = await storage.upload(fileData);

      console.log("Image uploaded to IPFS: " + uri);

      const engine = new Engine({
        url: TW_ENGINE_URL,
        accessToken: TW_ACCESS_TOKEN,
      });

      // Create the mint request body according to the MintRequest interface
      const requestBody: MintRequest = {
        receiver: address,
        metadata: {
          name,
          description,
          image: uri,
        },
        txOverrides: {
          // Specify txOverrides if necessary
          gasLimit: "500000",
          gasPrice: "20000000000",
        }
      };

      // Mint the NFT
      const response = await engine.erc721.mintTo(
        "iotex-network-testnet",
        CONTRACT_Profile,
        TW_BACKEND_WALLET,
        requestBody
      );

      console.log("NFT minted: ", response);

      // Respond with success
      res.status(200).json({ message: "NFT minted successfully", response });

      // Cleanup: Delete the temporary file
      fs.unlinkSync(imageFile.filepath);
    } catch (error: any) {
      console.error("Error processing file: ", error);
      res.status(500).json({ error: error.message || "An error occurred during minting" });
    }
  });
};

export default handler;
