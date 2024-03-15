import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function Component() {
  const { contract } = useContract("0x656Bf18fA440ce6fA4d45fCEFDF7aA3E3D848515");
  const { mutateAsync: enableMintingForAll, isLoading } = useContractWrite(contract, "enableMintingForAll");

  // Define _operator and _approved with appropriate values
  const _operator = "0xd0EBa99b4BA31bE62B8F41a155b299329116E7b4";
  const _approved = true;

  const call = async () => {
    try {
      // Call enableMintingForAll function on the contract
      const data = await enableMintingForAll({ args: [_operator, _approved] });
      console.info("Contract call success", data);
    } catch (err) {
      console.error("Contract call failure", err);
    }
  }

  // Call the `call` function when you want to trigger the contract call
  // For example, you can call it in response to a button click
  return (
    <button onClick={call} disabled={isLoading}>
      {isLoading ? "Processing..." : "Enable Minting For All"}
    </button>
  );
}
