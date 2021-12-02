import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
function Cards() {
    return (
        <div className="cards">
            <h1>
               Check Out these EPIC Destinations
            </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        text="Explore the hidden waterflow deep inside the Amazon Jungle"
                        label= "Adventure"
                        path='/services'
                        />     
                    </ul>
                    <ul>
                    <CardItem
                        text="Explore the hidden waterflow deep inside the Amazon Jungle"
                        label= "The Desert"
                        path='/services'
                        />     
                    </ul>
                    <ul>
                    <CardItem
                        text="Explore the hidden waterflow deep inside the Amazon Jungle"
                        label= "The See"
                        path='/services'
                        />   
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards
