import React from 'react'

const CoinItem = (props) => {
    return (
        <div class="grid grid-cols-6 mx-5 my-5 p-3 border-gray-700 border-2 rounded-lg hover:scale-105 duration-200 cursor-pointer">
            <p class="font-bold flex items-center">{props.coins.market_cap_rank}</p>
            <div class="flex items-center">
                <img class="h-12" src={props.coins.image} alt="coin-logo" />
                <p class="ml-2">{props.coins.symbol.toUpperCase()}</p>
            </div>
            <p class="flex items-center">${props.coins.current_price.toLocaleString()}</p>
            <p class="flex items-center">{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
            <p class="flex items-center invisible md:visible">${props.coins.total_volume.toLocaleString()}</p>
            <p class="flex items-center invisible md:visible">${props.coins.market_cap.toLocaleString()}</p>

        </div>
    )
}

export default CoinItem
