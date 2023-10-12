/* eslint-disable react/prop-types */
import { useState } from "react"
const Toggler = () =>{
    const [face,setFace] = useState(true);
const changeFace = ()=>{
    setFace(!face )
}
        return (
            <>
                <div>
                        {face ? "😁":"😈"}
                </div>
                <button onClick={changeFace}>Switch mood</button>
            </>
        )
}
export default Toggler