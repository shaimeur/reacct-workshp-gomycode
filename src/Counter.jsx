import { useState } from "react"
const Counter = () =>{
    const [counter,setCounter] = useState(0);
    const [counter3,setCounter3] = useState(0);

    const increment = ()=>{
         setCounter(counter + 1)
    }

    const incrementByThree = ()=>{
        setCounter3(prev => prev + 3)


    }

    return (
        <div>
            {counter}
            <button onClick={increment}>+1</button>

            {counter3}
            <button onClick={incrementByThree}>+3</button>
        </div>
    )
}

export default Counter