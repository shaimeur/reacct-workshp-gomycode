import './EmojiClicker.css'
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const EmojiClicker = () =>{
    const [emojis,setEmojis] = useState([{id:uuidv4(),emoji: "🙃"}])
    // console.log(uuidv4())
    const addEmo = () =>{
            // console.log([...emoji,"🙃"])
            // console.log([...emoji,{uuid:uuidv4()}])
          setEmojis((prev => [...prev,{id:uuidv4(),emoji:"🙃"}] ) )

    }
    const rmEmo = ()=>{
        setEmojis((prev) => {
           let newEmo =   prev.slice(0,-1)
        //    console.log(newEmo)
           return newEmo
        })
    }
    const deleteWithId = (id) =>{
            setEmojis( (current) => {
              return  current.filter(e => e.id != id)
            })
    }
    return (
            <div className="EmojiClicker">
                {emojis.map( (item) =>(
                     <span onClick={()=> deleteWithId(item.id)} style={{fontSize: "4rem"}} key={item.id} > {item.emoji} </span>
                ))}
                <button onClick={addEmo}>add new Emoji</button>

                <button onClick={rmEmo}>remove last Emoji</button>
            </div>
    )
}

export default EmojiClicker

