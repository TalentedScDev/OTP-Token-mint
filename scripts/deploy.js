const { ethers } = require("hardhat");

async function main() {
    const [owner] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", owner.address);

    const OrgToken = await ethers.getContractFactory("OriginToken");
    const preToken = await OrgToken.deploy(owner.address, "My First Seploia Token", "MFST", 1000);
    
    console.log("Token deployed to:", preToken.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
