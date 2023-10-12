import { useState } from "react"
import './DoubleScore.css'
const DoubleScore = () =>{
    const [score,setScore] = useState({scoreP1: 0,scoreP2 : 0})
    const addForP1 = () =>{

      setScore({...score,scoreP1 : score.scoreP1 + 1})
    }
    const addForP2 = () =>{
            // best aproche with the callback syntax
        setScore((oldScore) =>{
            return {...oldScore, scoreP2 : oldScore.scoreP2 + 1}
        })
    }
    return (
        <div className="DoubleScore">

            <div className="grill">
                <p>Player 1 :{score.scoreP1}</p>
                <button onClick={addForP1}>increment P1</button>
            </div>
            <div className="grill">
                <p> Player 2 :{score.scoreP2}</p>
                <button onClick={addForP2}>increment P2</button>
            </div>
        </div>
    )
}
export default DoubleScore