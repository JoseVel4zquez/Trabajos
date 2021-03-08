import React from 'react'
import './css/footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faMailBulk} from '@fortawesome/free-solid-svg-icons'
import {faLocationArrow} from '@fortawesome/free-solid-svg-icons'

export default function Footer(){
    return(
        <footer>
        <div className="contenedor-footer">
            <div className="content-foo">
                <h4>Phone</h4>
                <p><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon> 7445.501.2467</p>
            </div>
            <div className="content-foo">
                <h4>Email</h4>
                <p><FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon> example@example.com</p>
            </div>
            <div className="content-foo">
                <h4>Location</h4>
                <p><FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon> Ubicados en <br/>Acapulco col centro</p>
            </div>
        </div>
        <h2 className="titulo-final">&copy; KS-TECH</h2>
    </footer>
    )
}