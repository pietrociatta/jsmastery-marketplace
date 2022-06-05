const hre = require('hardhat');

async function main() {
  const marketPlaceBoilerPlate = await hre.ethers.getContractFactory(
    'marketPlaceBoilerPlate'
  );
  const marketplaceBoilerplate = await marketPlaceBoilerPlate.deploy();

  await marketplaceBoilerplate.deployed();

  console.log('Nftmarketplace deployed to:', marketplaceBoilerplate.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
