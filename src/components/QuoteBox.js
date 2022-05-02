import React from "react";
import quotes from "../quotes.json"
import { useState } from "react";


const colors = ["red", "blue", "aqua", "lemon", "yellowgreen", "blueviolet", "green"]

const Card = () => {

    console.log(quotes);


    const randomPhrase = Math.floor (Math.random() * quotes.length )
    
    const [ phrase, setPhrase ] = useState(randomPhrase)
    
    const change = () =>{ 
        
        const randomPhrase = Math.floor (Math.random() * quotes.length )
        
        setPhrase ( randomPhrase) }

    const randomColor = Math.floor (Math.random() * colors.length )
    document.body.style = `background: ${colors[randomColor]}`


    return (
        <div style={{color: colors[randomColor]}}>
            <h1> <i class="fa-solid fa-check-double"></i> {quotes[phrase].quote}</h1>
            <h3 className="autor">{quotes[phrase].author}</h3>
            <button style={{backgroundColor: colors[randomColor]}} onClick={change}>
                other
            </button>
           
        </div>
    )
}

export default Card