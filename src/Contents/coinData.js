module.exports = {
  coinData: [
    {
      id: 1,
      icon: require('./icons/Bitcoin.png'),
      title: "Bitcoin (BTC)",
      current: "$31,812.80",
      return: 10,
      tvl: "$60,000",
      pairs: [
        require('./icons/Solana.png'),
        require('./icons/Ethereum.png'),
        require('./icons/Binance Coin.png')
      ],
      style: {
        "background": 'linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(234, 179, 0, 0.06) 100%)'
      }
    },
    {
      id: 2,
      icon: require('./icons/Solana.png'),
      title: "Solana (SOL)",
      current: "$32.83",
      return: -12.32,
      tvl: "$60,000",
      pairs: [
        require('./icons/Bitcoin.png'),
        require('./icons/Ethereum.png'),
        require('./icons/Binance Coin.png')
      ],
      style: {
        "background": "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(220, 31, 255, 0.1) 100%)"
      }
    },
    {
      id: 3,
      icon: require('./icons/Ethereum.png'),
      title: "Ethereum (ETH)",
      current: "$1,466.45",
      return: -11.93,
      tvl: "$60,000",
      pairs: [
        require('./icons/Solana.png'),
        require('./icons/Bitcoin.png'),
        require('./icons/Binance Coin.png')
      ],
      style: {
        "background": "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(237, 240, 244, 0.1) 100%)"
      }
    },
    {
      id: 4,
      icon: require('./icons/Binance Coin.png'),
      title: "Binance USD (BUSD)",
      current: "$1.00",
      return: 0.26,
      tvl: "$60,000",
      pairs: [
        require('./icons/Solana.png'),
        require('./icons/Ethereum.png'),
        require('./icons/Binance Coin.png')
      ],
      style: {
        "background": "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(234, 179, 0, 0.06) 100%)"
      }
    },
    {
      id: 5,
      icon: require('./icons/SHIBA INU.png'),
      title: "Shiba Inu (SHIB)",
      current: "$0.00001948",
      return: -2.1,
      tvl: "$60,000",
      pairs: [
        require('./icons/Solana.png'),
        require('./icons/Ethereum.png'),
        require('./icons/Binance Coin.png')
      ],
      style: {
        "background": "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(228, 45, 4, 0.1) 100%)"
      }
    }
  ]
}