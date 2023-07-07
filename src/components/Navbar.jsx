import React from 'react'
import { FaCoins } from 'react-icons/fa'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                <FaCoins className='icon' />
                <h1>Coin Search</h1>
            </div>
        </div>
    )
}

export default Navbar
