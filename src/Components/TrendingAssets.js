import React from 'react'
import PropTypes from 'prop-types';
import {AssetCard} from './AssetCard'

export const TrendingAssets = (props) => {
  return (
    <div className='container bg-navyDark font-tomorrow pl-4 m-auto'>
      
      <div className='flex items-center mt-28 pl-8 select-none'>
        <img src={require('../Contents/icons/activity.png')} alt="trending-icon"></img>
        <p className='text-whiteLight ml-4'>Trending Assets</p>
      </div>

      <div className='text-whiteLight flex mt-[30px] select-none'>
        {props.assets.map((coin) => {
            return <AssetCard assets = {coin} key={coin.id}/>
        })}
      </div>

    </div>
  )
}

TrendingAssets.propTypes = {
  assets: PropTypes.array,
}