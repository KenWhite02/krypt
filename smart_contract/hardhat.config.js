require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/QFlHKJZURSqx9LE3W80kRP3ct-TCDDkx',
      accounts: [
        '8e093e9a51eb42cc841a7fa5b834e49f4f2b72ee5eccc66249979029d8535815',
      ],
    },
  },
};
