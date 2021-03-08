import React from 'react'
import './css/footer.css'

export default function Footer(){
    return(
        <footer>
        <div className="contenedor-footer">
            <div className="content-foo">
                <h4>Phone</h4>
                <p>8296312</p>
            </div>
            <div className="content-foo">
                <h4>Email</h4>
                <p>8296312</p>
            </div>
            <div className="content-foo">
                <h4>Location</h4>
                <p>8296312</p>
            </div>
        </div>
        <h2 className="titulo-final">&copy; Ks-TECH</h2>
    </footer>
    )
}