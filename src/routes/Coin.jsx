import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'


const Coin = () => {

  const params = useParams()
  const [coin, setCoin] = useState({})

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div>
      <div>
        <div class="w-1/2 mx-auto">
          <div class="text-md my-3">
            <span class=" border-2 border-blue-700 bg-blue-700 rounded-md">Rank # {coin.market_cap_rank}</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              {coin.image ? <img class="mr-2" src={coin.image.small} alt='' /> : null}
              <p class="mr-2">{coin.name}</p>
              {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
            </div>
            <div>
              {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
            </div>
          </div>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1y</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default Coin
