import React, { useState } from 'react'
import CoinItem from './CoinItem'

const CoinSearch = ({coins}) => {
  const [searchText, setSearchText] = useState('')
  // console.log(coins)
  return (
    <div className='rounded-div my-4'>
        <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
          <h1 className='text-2xl font-bold my-2'>Trouver une cryptomonnaie</h1>
          <form action="">
            <input
              className='w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl'
              onChange = {(e) => setSearchText(e.target.value)} 
              type="text" 
              placeholder='Rechercher'
            />
          </form>
        </div>

        <table className='w-full border-collapse text-center'>
          <thead>
            <tr className='border-b'>
              <th></th>
              <th>#</th>
              <th>Monnaie</th>
              <th></th>
              <th>Cours</th>
              <th>24 h</th>
              <th>Volume sur 24 h</th>
              <th>Capitalisation du marché</th>
              <th>7 derniers jours</th>
            </tr>
          </thead>
          
          <tbody>
            {coins
              .filter((value) => {
              if (searchText === '') {
                return value

              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default CoinSearch