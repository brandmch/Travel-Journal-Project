import React from 'react'
import logo from '../Images/Asset 13.svg'

export default function Header() {
    return (
        <nav className='header'>
            <img src={logo} />
            <h1>my travel journal.</h1>
            <small>©</small>
        </nav>
    )
}