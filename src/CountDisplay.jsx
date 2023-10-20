function CountDisplay(counter){

return(

    <>
        {counter.count >= 5 ?
        <p style={{fontSize:32, textAlign:"center", marginTop:225}} className="text-success fw-bold">COUNTER</p>
        :
        <p style={{fontSize:32, textAlign:"center", marginTop:225}} className="fw-bold">COUNTER</p>}

        <p style={{fontSize:64, textAlign:"center"}} className="fw-bold">{counter.count}</p>
    </>

)
}

export default CountDisplay