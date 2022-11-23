import React from 'react'

export const AssetCard = (props) => {

  const isProfit = props.assets.return >= 0

  return (
    <div className='px-8'>

      <div className='flex items-center justify-center w-[88px] h-[90px] relative rounded-full z-[1000] ml-[74.5px] top-[41px] coin-header-logo'>
        <img src={props.assets.icon} alt="logo"></img>
      </div>

      <div className='crypto-card'>

        <div className='curve-obj'>
        </div>

        <div>

          <div className='text-primary text-xs text-center mt-3 capitalize'>{props.assets.title}</div>

          <div className='flex text-[14px] p-1.5 mx-4 mt-3 justify-center items-center price-bg'>
            <div>{props.assets.current}</div>
            <div className={`text-[10px] absolute ml-[140px] ${isProfit ? 'text-green' : 'text-red'}`}> {isProfit ? '+' : ''}{props.assets.return}%</div>
          </div>

          <div className='text-secondary text-xs text-center mt-3'>Price</div>

          <div className='text-[14px] p-1.5 mx-4 mt-2 text-center price-bg'>{props.assets.tvl}</div>

          <div className='text-secondary text-xs text-center mt-3'>TVL</div>

          <div className='flex price-bg p-1.5 mx-14 justify-evenly mt-3'>
            {props.assets.pairs.map((pair) => {
              return <img className='cursor-pointer w-[20px] h-[20px]' src={pair} alt="pair" key={pair}></img>
            })}
          </div>

          <div className='text-secondary text-xs text-center mt-3'>Popular pairs</div>

        </div>

      </div>
      
    </div>
  )
}

