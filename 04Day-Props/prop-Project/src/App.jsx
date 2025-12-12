// JSX component

import Header from "./component/Header.jsx"
import MainComponect from "./component/MainContent.jsx"

const APP = () => {

  const obj = {
    name:"Abhishek gupta",
    img:"pika.jpg",
    logo:"pixabay"
  }
  return (
    <div>
      <Header obj={obj}/>
      <MainComponect />
    </div>
  )
}

export default APP