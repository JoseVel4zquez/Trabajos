import React from 'react'
import './css/Nosotros.css'
import trabajadores from '../images/trabajadores.svg'
import wave from '../images/wave.svg'

export default function Nosotros(){
    return(
        <main>
            <section className="contenedor sobre-nosotros">
                <h2 className="titulo">Nuestro producto</h2>
                <div className="contenedor-sobre-nosotros">
                    <img src={trabajadores} alt="" className="imagen-about-us"/>
                    <div className="contenido-textos">
                        <h3><span>1</span>Los mejores productos</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam eius aspernatur ad
                            consequuntur aperiam minima sed dicta odit numquam sapiente quam eum, architecto animi pariatur,
                            velit doloribus laboriosam ut.</p>
                        <h3><span>2</span>Los mejores productos</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam eius aspernatur ad
                            consequuntur aperiam minima sed dicta odit numquam sapiente quam eum, architecto animi pariatur,
                            velit doloribus laboriosam ut.</p>
                    </div>
                </div>
                
            </section>
        </main>
        
    )
}