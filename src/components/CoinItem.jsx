import React from 'react'

const CoinItem = (props) => {
    return (
        <div class="flex justify-between items-center mx-5 my-5 py-1 border-gray-700 border-2">
            <p class="font-bold">{props.coins.market_cap_rank}</p>
            <div className="img-symbol">
                <img src={props.coins.image} alt="coin-logo" />
                <p>{props.coins.symbol}</p>
            </div>
            <p>${props.coins.current_price}</p>
            <p>{props.coins.price_change_percentage_24h}%</p>
            <p class="invisible md:visible">${props.coins.total_volume}</p>
            <p class="invisible md:visible">${props.coins.market_cap}</p>

        </div>
    )
}

export default CoinItem
