import React from 'react'
import './Coins.css'

const CoinItem = (props) => {
    return (
        <div className='coin-row'>
            <p>{props.coins.market_cap_rank}</p>
            <div className="img-symbol">
                <img src={props.coins.image} alt="coin-logo" />
                <p>{props.coins.symbol}</p>
            </div>
            <p>{props.coins.current_price}</p>
            <p>{props.coins.price_change_percentage_24h}</p>
            <p class="visible md:invisible">{props.total_volume}</p>
            <p class="visible md:invisible">{props.coins.market_cap}</p>

        </div>
    )
}

export default CoinItem
