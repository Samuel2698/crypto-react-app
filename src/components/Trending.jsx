import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Trending = () => {
    const [trending, setTrending] = useState([])

    const url = 'https://api.coingecko.com/api/v3/search/trending';
    
    useEffect(() => {
        axios.get(url).then((response) => {
            setTrending(response.data.coins)
            console.log(response.data.coins)
        })
    }, [])

  return (
    <div>
      <h1>Cryptos qui font la tendance</h1>
    </div>
  )
}

export default Trending