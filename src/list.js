import React from 'react'
import Card from './card'
import './List.css'

function List(props){
    let header = props.header
    let cards = props.cards

    let mappedCards = cards.map((item)=> 
    <Card key={item.id} title={item.title} content={item.content} />
    )

    return(
        <section className="List">
            <header className="List-header">
            <h2>{header}</h2>
            </header>
            <div className="List-cards">
                {mappedCards}
            </div>
        </section>
    )
}

export default List