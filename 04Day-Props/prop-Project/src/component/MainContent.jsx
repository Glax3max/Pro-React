// jsx components
import { useState } from "react";
const showDate = () =>{
  const newDate = new Date();
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
  ]

  const month = months[newDate.getMonth()];
  const date = newDate.getDate();
  const year = newDate.getFullYear();
  const time = newDate.getSeconds();
  return `${month} ${date},${year}  - ${time}`
}
const container = {
    display:"flex",
    width:"100vw",
    height:"50vh",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    margin:"auto 0"
}
const MainComponect = () => {
    const [time,setTime] = useState(showDate());
    const d = () => {
        setTime(showDate());
    }
    return (
        <div style={container}>
            <div>{time}</div>
            <button onClick={d}>Get Current Time</button>
        </div>
    )
}

export default MainComponect;