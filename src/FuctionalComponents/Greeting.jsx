import React from "react";

const Greeting = (props) => {
    // console.log(props.name)
    return(
        <div>
            <h4>data coming from parent to Greeting</h4>
            <h1>{props.name}</h1>
        </div>
    )
}
export default Greeting