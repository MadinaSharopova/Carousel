export function Timer(timeInSecond:number):Array<number | string>{
  let hours:number = Math.floor(timeInSecond/3600);
  let minuts:number = Math.floor(timeInSecond-(hours * 3600) / 60);
  let seconds:number = timeInSecond - (hours * 3600) - (minuts * 60);

  let hoursFormat = hours< 10 ?`0 ${hours}` : hours
  let minutFormat = minuts< 10 ?` 0 ${minuts}` : minuts
  let secondFormat = seconds< 10 ?` 0 ${seconds}` : seconds

    return[hoursFormat,minutFormat,secondFormat]

}