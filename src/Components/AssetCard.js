import React from 'react'

export const AssetCard = (props) => {

  const isProfit = props.assets.return >= 0

  return (
    <div className='px-8'>

      <div className='flex items-center justify-center w-[88px] h-[90px] relative rounded-full z-[1000] ml-[74.5px] top-[41px] coin-header-logo' style={props.assets.style}>
        <img src={props.assets.icon} alt="logo"></img>
      </div>

      <div className='crypto-card'>

        <div className='curve-obj'>
        </div>

        <div>

          <div className='text-primary text-xs text-center mt-3'>{props.assets.title}</div>

          <div className='flex text-[14px] p-1.5 mx-4 mt-3 justify-center items-center price-bg'>
            <div>{props.assets.current}</div>
            <div className='text-[10px] absolute ml-[140px]' style={isProfit ? {color: '#00FFA3'} : {color: '#FF4D4D'}}> {isProfit ? '+' : ''}{props.assets.return}%</div>
          </div>

          <div className='text-secondary text-xs text-center mt-3'>Price</div>

          <div className='cont text-[14px] p-1.5 mx-4 mt-2 text-center'>{props.assets.tvl}</div>

          <div className='text-secondary text-xs text-center mt-3'>TVL</div>

          <div className='flex price-bg p-1.5 mx-14 justify-evenly mt-3'>
            <img className='cursor-pointer w-[20px] h-[20px]' src={props.assets.pairs[0]} alt="pair one"></img>
            <img className='cursor-pointer w-[20px] h-[20px]' src={props.assets.pairs[1]} alt="pair two"></img>
            <img className='cursor-pointer w-[20px] h-[20px]' src={props.assets.pairs[2]} alt="pair three"></img>
          </div>

          <div className='text-secondary text-xs text-center mt-3'>Popular pairs</div>

        </div>

      </div>
      
    </div>
  )
}