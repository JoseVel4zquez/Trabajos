import React from 'react'
import './css/galeria.css'
import { SRLWrapper } from 'simple-react-lightbox'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'

function Galeria(){
    return(
        <SRLWrapper>
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="item col-sm-6 col-md-4 mb-3">
                        <a href={img1} className="fancybox" data-fancybox="gallery1">
                            <img src={img1} width="100%" height="100%" />
                        </a>
                    </div>

                    <div className="item col-sm-6 col-md-4 mb-3">
                        <a href={img2} className="fancybox" data-fancybox="gallery1">
                            <img src={img2} width="100%" height="100%" />
                        </a>
                    </div>

                    <div className="item col-sm-6 col-md-4 mb-3">
                        <a href={img3} className="fancybox" data-fancybox="gallery1">
                            <img src={img3} width="100%" height="100%" />
                        </a>
                    </div>

                    <div className="item col-sm-6 col-md-4 mb-3">
                        <a href={img4} className="fancybox" data-fancybox="gallery1">
                            <img src={img4} width="100%" height="100%" />
                        </a>
                    </div>

                    <div className="item col-sm-6 col-md-4 mb-3">
                        <a href={img5} className="fancybox" data-fancybox="gallery1">
                            <img src={img5} width="100%" height="100%" />
                        </a>
                    </div>
                </div>
            </div>
        </SRLWrapper>
    )
}

export default Galeria;