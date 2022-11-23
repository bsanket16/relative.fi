import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types';
import {AssetCard} from './AssetCard'

export const TrendingAssets = (props) => {
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

          let {slug, tvl} = coin
          let slugIcon = '', pairs = []

          // getting the icons
          props.assets.forEach((item) => {

            if (item.slug === slug) {
              slugIcon = item.img
            }

            coin.pairedAssetSlugs.forEach((pair) => {
              if (pair === item.slug) {
                pairs.push(item.img)
              }
            })

          })

          // rendering card
          // hardcoded missing values
          return <AssetCard assets = {
            {
              icon: slugIcon,
              title: slug,
              current: "$31,812.80",
              return: 100,
              tvl: tvl,
              pairs: pairs
            }
          }
        
          key= {slug}/>
        })}
      </div>

    </div>
  )
}

TrendingAssets.propTypes = {
  assets: PropTypes.array,
}
