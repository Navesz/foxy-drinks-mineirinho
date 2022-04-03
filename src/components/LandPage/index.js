import React from 'react'
import { Link } from 'react-router-dom'
import './Landpage.css'
import imgAlcool from '../../images/alcool.svg'
import imgSemAlcool from '../../images/semAlcool.svg'
import instaImg from '../../images/instaImg.svg'
import faceImg from '../../images/faceImg.svg'

const Navbar = () => {
    return (
        <div className='pageBody'>
            <Link className='tipeBebida' to="/bebidas">
                <img src={imgAlcool} />
            </Link>
            <a className='socialButton' href='https://www.instagram.com/foxy_drinks/'>
                <img src={instaImg} />
            </a>
            <a className='socialButton' href='https://www.facebook.com/foxydrinksface'>
                <img src={faceImg} />
            </a>
        </div>
    )
}

export default Navbar