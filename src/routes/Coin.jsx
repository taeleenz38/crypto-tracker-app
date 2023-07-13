import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import DOMPurify from 'dompurify'



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
        <div class="w-6/12 mx-auto">
          <div class="text-md my-5">
            <span class=" border-2 border-blue-700 bg-blue-700 rounded-md">Rank # {coin.market_cap_rank}</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center text-xl">
              {coin.image ? <img class="mr-2" src={coin.image.small} alt='' /> : null}
              <p class="mr-2">{coin.name}</p>
              {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
            </div>
            <div>
              {coin.market_data?.current_price ? <h1 class="text-2xl font-bold">${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
            </div>
          </div>
        </div>

        <div class="w-6/12 mx-auto text-center mt-8 border-2 rounded-xl">
          <table class="mx-auto">
            <thead class="border-b-2">
              <tr>
                <th class="w-36 py-4">1h</th>
                <th class="w-36 py-4">24h</th>
                <th class="w-36 py-4">7d</th>
                <th class="w-36 py-4">14d</th>
                <th class="w-36 py-4">30d</th>
                <th class="w-36 py-4">1y</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="w-36 py-4">{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                <td class="w-36 py-4">{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                <td class="w-36 py-4">{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                <td class="w-36 py-4">{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                <td class="w-36 py-4">{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                <td class="w-36 py-4">{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="w-6/12 mx-auto mt-8 text-center flex justify-around font-light">
          <div>
            <h4 class="text-lg font-semibold">24 Hour Low</h4>
            {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
          </div>
          <div>
            <h4 class="text-lg font-semibold">24 Hour High</h4>
            {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}
          </div>
          <div>
            <h4 class="text-lg font-semibold">Market Cap</h4>
            {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
          </div>
          <div>
            <h4 class="text-lg font-semibold">Circulating Supply</h4>
            {coin.market_data ? <p>{coin.market_data.circulating_supply.toLocaleString()} tokens</p> : null}
          </div>
        </div>

          <div class="">
            <h3>About</h3>
            <p dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
            }}>
            </p>
          </div>


      </div>
    </div>
  )
}

export default Coin
