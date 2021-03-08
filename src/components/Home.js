import React from 'react'
import Navbar from './Navbar'
import Nosotros from './Nosotros'
import Footer from './Footer'
import Cards from './Cards'
import './css/home.css'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Home (){
    return(
        <div>
            <Navbar/>
            <Nosotros/>
            <div className="Home">
                <Cards/>
            </div>
            <Footer/>
        </div>
        
    )
}