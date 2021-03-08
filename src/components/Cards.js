import React from 'react'
import Card from './Card'
import house from '../images/house.jpg'

const cards = [
    {
        id: 1,
        title: 'Trabajos en general',
        image: house,
        url: 'https://kstech.club',
        //text: 'Esto es una prueba chida xd'
    },
    {
        id: 2,
        title: 'Titulo',
        image: house,
        url: 'https://kstech.club'
    },
    {
        id: 3,
        title: 'Titulo',
        image: house,
        url: 'https://kstech.club'
    }
]

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
               {
                   cards.map(card =>(
                       <div className="col-md-4" key={card.id}>
                           <Card title={card.title} imageSrc={card.image} url={card.url} text={card.text}/> 
                       </div>
                   ))
               }
            </div>
        </div>
    )
}

export default Cards
