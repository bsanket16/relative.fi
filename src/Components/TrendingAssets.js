import { useState, useEffect } from 'react'
import axios from 'axios'

import {AssetCard} from './AssetCard'
import {coinIcons} from '../Contents/coinIcons'

export const TrendingAssets = () => {
  const [coinData, setCoinData] = useState([])

  useEffect(() => {
    axios.get('https://trending-assets-api.onrender.com/trendingAssets')
    .then((response) => {
      setCoinData(response.data)
    })
  }, [])

  return (
    <div className='container bg-navyDark font-tomorrow pl-4 m-auto'>
      
      <div className='flex items-center mt-28 pl-8 select-none'>
        <img src={require('../Contents/icons/activity.png')} alt="trending-icon"></img>
        <p className='text-whiteLight ml-4'>Trending Assets</p>
      </div>

      <div className='text-whiteLight flex mt-[30px] select-none'>

        {coinData.map((coin) => {

          let {slug, tvl} = coin, pairs = []

          coin.pairedAssetSlugs.forEach((pair) => {
            pairs.push(coinIcons[pair])
          })

          return <AssetCard assets = {
            {
              title: slug,
              icon: coinIcons[slug],
              current: "$31,812.80",
              tvl: tvl,
              return: 100,
              pairs: pairs
            }
          }
        
          key= {slug}/>
        })}
      </div>

    </div>
  )
}