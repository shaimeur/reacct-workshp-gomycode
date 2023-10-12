/* eslint-disable react/prop-types */
import { useState } from "react";
import './ColorBox.css'

const myChoice = (arr) =>{
    let myIndex =  Math.floor(Math.random() * 15)
    return arr.at(myIndex)
}
const ColorBox = ({colors}) =>{


        const[myColor,setMyColor] = useState(myChoice(colors))

        const changeColor = ()=>{

            setMyColor(myChoice(colors))
        }

    return (
        <div  className="ColorBox" onClick={changeColor} style={{backgroundColor: myColor}}>

        </div>
    )
}
export default ColorBox;