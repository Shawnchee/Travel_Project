import React from "react"
import Header from "./Components/Header"
import Card from "./Components/Card"
import data from "./data"




export default function App(){
    const cards = data.map(item => {
        return (
                 <Card   
                    imageUrl = {item.imageUrl}
                    location = {item.location}
                    googleMapsUrl = {item.googleMapsUrl}
                    title = {item.title}
                    startDate = {item.startDate}
                    endDate = {item.endDate}
                    description = {item.description}

                     //coverImg is the name taken from data.js
                />
)});
    return (
        <div>
            <Header />
            {cards}
        </div>
    )
}
