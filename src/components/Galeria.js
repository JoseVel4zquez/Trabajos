import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SimpleReactLightbox from 'simple-react-lightbox'
import GaleriaFunction from './GaleriaFunctions';

export default function Galeria(){
    return(
        <div>
            <Navbar/>
            <SimpleReactLightbox>
                <GaleriaFunction/>
            </SimpleReactLightbox>
            <Footer/>
        </div>
    )
}