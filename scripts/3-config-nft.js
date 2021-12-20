import dotenv from "dotenv";
import { readFileSync } from "fs";
import sdk from "./1-initialize-sdk.js";

dotenv.config();

const bundleDrop = sdk.getBundleDropModule(process.env.DROP_ADDRESS);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Cheers!",
        description: "This NFT will give you access to BeerDAO!",
        image: readFileSync("scripts/assets/cheers-beers.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
