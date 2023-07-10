import React from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import { Link } from 'react-router-dom'


const Coins = (props) => {
    return (
        <div class="w-5/6 m-auto">
            <div>
                <div class="grid grid-cols-6 mx-5 my-3 py-1 px-2 border-white border-b-2 font-bold">
                    <p>#</p>
                    <p>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p class="invisible md:visible">Volume</p>
                    <p class="invisible md:visible">Mkt Cap</p>
                </div>

                {props.coins.map(coins => {
                    return (
                        <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins} />
                        </Link>
                    )
                })}

            </div>

        </div >
    )
}

export default Coins
