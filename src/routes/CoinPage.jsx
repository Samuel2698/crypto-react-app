import React, {useState, useEffect} from 'react'
import axios from 'axios'

const CoinPage = () => {
  const [coin, setCoin] = useState({})

  const url = 'https://api.coingecko.com/api/v3/coins/bitcoin?sparkline=true'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data)
      console.log(response.data)
    })
  },[url])

  return (
    <div>
        <div>
          <img src={coin.image?.large} alt="/" />
        </div>
        <p>Prix de {coin?.name}</p>
    </div>
  )
}

export default CoinPage

