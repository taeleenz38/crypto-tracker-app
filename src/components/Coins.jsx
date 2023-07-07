import React from 'react'
import CoinItem from './CoinItem'
import './Coins.css'


const Coins = (props) => {
    return (
        <div class="w-5/6 m-auto">
            <div>
                <div class="flex justify-between items-center mx-5 my-3 py-1 border-white border-b-2 font-bold">
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p class="invisible md:visible">Volume</p>
                    <p class="invisible md:visible">Mkt Cap</p>
                </div>

                {props.coins.map(coins => {
                    return (
                        <CoinItem coins={coins} />
                    )
                })}

            </div>

        </div>
    )
}

export default Coins
