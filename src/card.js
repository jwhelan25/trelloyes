import React from 'react'
import list from './list'
import './Card.css'

function Card (props){
    let title = {props.title}
    let content = {props.content}
    return(
        <div className='Card'>
        <button type="button">delete</button>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    )
}

export default Card