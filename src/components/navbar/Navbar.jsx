import React, { useState } from 'react'
import { SiDatabricks } from 'react-icons/si'
import {Link} from 'react-router-dom'
import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top' className='navbar'>
            <div className="container">
                <ul className={nav ? 'nav-menu active' : 'nav-menu'} style={{color: 'white'}}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>Tentang Saya</Link> </li>
                    <li><Link to='/project'>Portofolio</Link></li>
                    <li><Link to='/contact'>Kontak</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
