import React, { useEffect, useState } from "react";
import './main.css'
import { Timer } from "../../Helper/Timer"
import { Control } from "../controls/Control"

export function Main() {

   const [timeSecond, setTimeSecond] = useState<number>(0)
   const [timeArray, setTimeArray] = useState<Array<number | string>>([])

   useEffect(() => {
      let timeArray: Array<number | string> = Timer
         (timeSecond)
      setTimeArray(timeArray)
   }, [timeSecond])

   return (
      <>
         <section className="time-container">
            <p className="timer-text">{timeArray[0]}</p>
            <span>:</span>
            <p className="timer-text">{timeArray[1]}</p>
            <span>:</span>
            <p className="timer-text">{timeArray[2]}</p>
         </section>
         <Control setTimeSecond={setTimeSecond} />
      </>
   )
}