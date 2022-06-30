import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from 'react-icons/fa';
import DOMPurify from 'dompurify'
import {useParams} from 'react-router-dom'

const CoinPage = () => {
  const [coin, setCoin] = useState({})
  const params = useParams()

  const url =
     `https://api.coingecko.com/api/v3/coins/${params.coinId}?sparkline=true` 

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data)
      console.log(response.data)
    })
  },[url])

  return (
    <div className='rounded-div my-12 py-8'>
        <div className='flex py-8'>
          <img 
          className='w-20 mr-8'
            src={coin.image?.large} 
            alt="/" 
          />
          <div>
            <p className='text-3xl font-bold'>Prix de {coin?.name}</p>
            <p>({coin.symbol?.toUpperCase()} / EUR)</p>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <div className='flex justify-between'>
              {coin.market_data?.current_price 
                ? (<p className='text-3xl font-bold'>{coin.market_data.current_price.eur.toLocaleString()}€</p>) 
                : null}
              <p>7 Jours</p>
            </div>
            <div>
              <Sparklines data={coin.market_data?.sparkline_7d.price}>
                <SparklinesLine color="teal" />
              </Sparklines>
            </div>
            <div className='flex justify-between py-4'>
              <div>
                <p className='text-gray-500 text-sm'>Capitalisation Boursière</p>
                {coin.market_data?.market_cap ? (<p>{coin.market_data.market_cap.eur.toLocaleString()}€</p>) : null}
              </div>
              <div>
                <p className='text-gray-500 text-sm'>Volume (24h)</p>
                {coin.market_data?.market_cap ? (<p>{coin.market_data.total_volume.eur.toLocaleString()}€</p>) : null}
              </div>
            </div>
            
              <div className='flex justify-between py-4'>
                <div>
                  <p className='text-gray-500 text-sm'>Prix le plus élevé (24h)</p>
                  {coin.market_data?.high_24h ? (<p>{coin.market_data.high_24h.eur.toLocaleString()}€</p>) : null}
                </div>
                <div>
                  <p className='text-gray-500 text-sm'>Prix le plus bas (24h)</p>
                  {coin.market_data?.low_24h ? (<p>{coin.market_data.low_24h.eur.toLocaleString()}€</p>) : null}
                </div>
              </div>
          </div>

              <div>
                <p className='text-xl font-bold'>Statistiques de {coin.name}</p>
                <div className='flex justify-between py-4'>
                  <div>
                    <p className='text-gray-500 text-sm'>Position sur le marché</p>
                    {coin.market_cap_rank}
                  </div>
                  <div>
                    <p className='text-gray-500 text-sm'>Algorithme de hachage</p>
                    {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
                  </div>
                  <div>
                    <p className='text-gray-500 text-sm'>Score de confiance</p>
                    {coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
                  </div>
                </div>

                  <div className='flex justify-between py-4'>
                    <div>
                      <p className='text-gray-500 text-sm'>Changement de prix (24h)</p>
                      {coin.market_data ? (<p>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>) : null}
                    </div>
                    <div>
                      <p className='text-gray-500 text-sm'>Changement de prix (7j)</p>
                      {coin.market_data ? (<p>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>) : null}
                    </div>
                    <div>
                      <p className='text-gray-500 text-sm'>Changement de prix (14j)</p>
                      {coin.market_data ? (<p>{coin.market_data.price_change_percentage_14d.toFixed(2)}%</p>) : null}
                    </div>
                  </div>

                  <div className='flex justify-between py-4'>
                    <div>
                      <p className='text-gray-500 text-sm'>Changement de prix (30j)</p>
                      {coin.market_data ? (<p>{coin.market_data.price_change_percentage_30d.toFixed(2)}%</p>) : null}
                    </div>
                    <div>
                      <p className='text-gray-500 text-sm'>Changement de prix (60j)</p>
                      {coin.market_data ? (<p>{coin.market_data.price_change_percentage_60d.toFixed(2)}%</p>) : null}
                    </div>
                    <div>
                      <p className='text-gray-500 text-sm'>Changement de prix (1an)</p>
                      {coin.market_data ? (<p>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>) : null}
                    </div>
                  </div>

                  <div className='flex justify-around text-accent cursor-pointer'>
                      <FaTwitter className='hover:text-blue-600'/>
                      <FaFacebook className='hover:text-blue-600'/>
                      <FaReddit className='hover:text-blue-600'/>
                      <FaGithub className='hover:text-blue-600'/>
                  </div> 
            </div>       
        </div>

        {/* Description */}
        <div className='p-4'>
          <p className='text-xl font-bold'>A propos de {coin?.name} (seulement en anglais)</p>
          <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),}}></p>
        </div>
    </div>
  )
}

export default CoinPage

