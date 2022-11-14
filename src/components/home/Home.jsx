import React from 'react'
import './HomeStyles.css'

const Home = () => {
    return (
        <div className='Home'>
            <div className="container">
                <div className="pict">
                    <img src={"images/profil.JPG"} width="float:left" alt="profil" className="profil"/>
                    <h1>Jharmiyanto Kurnia Pasangkin</h1> 
                    <p>Saya merupakan salah satu mahasiswa program studi Sistem Informasi Fakultas Teknik Universitas Mulawarman
                        Pada saat ini saya sedang mengikuti
                        Program Studi Independen Kampus Merdeka Skilvul #TECH4IMPACT: Front-End Web Development Batch3 - 2022</p>
                </div>
            </div>
        </div>
    )
}

export default Home
