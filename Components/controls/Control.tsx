
import React, { useState } from "react";

 type Props = {
    setTimeSecond:Function
 }


export function Control(props:Props){

    const {setTimeSecond} = props
    const [intervalid, setIntervalid] = useState<number>(0)

    function handlePlay(){
    let interval:any = setInterval(() => {
            setTimeSecond( (p:number) => 
            p + 1)
        },1000)

      setIntervalid(interval)

    }

    function handleStop(){
    clearInterval(intervalid)
    }

    function handleReset(){
    clearInterval(intervalid)
        setTimeSecond(0)
    }

   return(
    <div>
        <button onClick = {handlePlay}>Play</button> 
        <button onClick = {handleStop}>Stop</button>
        <button onClick = {handleReset}>Reset</button>
    </div>
   )
}
 