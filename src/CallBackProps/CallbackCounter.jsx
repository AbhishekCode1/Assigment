import React, { useState } from "react";


const CallbackCounter= ({handleNewChange}) => {
    const[count,setCount]=useState(0)

    const handleIncreament = () => {
        const newCounter = count+1
        setCount(newCounter)
        handleNewChange(newCounter)
    }

    const handleDecreament = () => {
        const newCounter = count-1
        setCount(newCounter)
        handleNewChange(newCounter)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncreament}>Increament</button>
            <button onClick={handleDecreament}>Decreament</button>

        </div>
    )
}

export default CallbackCounter