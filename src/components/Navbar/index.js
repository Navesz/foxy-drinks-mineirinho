import React from 'react'
import logo from '../../images/foxy.svg'
import { Link, useNavigate } from 'react-router-dom'
import voltar from '../../images/voltar.svg'
import './Navbar.css'

const Navbar = () => {
    const navigation = useNavigate()
    return (
        <nav className='navbar'>
            <img onClick={() => navigation(-1)} className='voltar' src={voltar} />
            <Link to="/">
                <img className='item' src={logo} alt="logo" />
            </Link>
            
        </nav>
    )
}

export default Navbar