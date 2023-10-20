import { useState } from "react"
import CountDisplay from "./CountDisplay";

function Counter(){

    const [Counter, SetCounter] = useState(0);
    return(
    <div className="text-center m-5">
        <CountDisplay count={Counter} />

        {Counter < 0 ? SetCounter(Counter + 1) : ''}

        <button className="btn btn-secondary me-3 fs-1 w-25 fw-bold" onClick={

        () => SetCounter(Counter + 1)

        }>+</button>

        <button className="btn btn-secondary fs-1 w-25 fw-bold" onClick={

        () => SetCounter(Counter - 1)

        }>-</button>
    </div>
    )

    }
    
export default Counter