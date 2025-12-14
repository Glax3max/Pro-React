// JSX components

const App = () => {
  
  const arr = [1,2,3,4,5,6]
  const color = ['red','green','blue','orange','purple']

  const value = arr.map((a)=> <li key={a} style={{color:color[Math.floor(Math.random()*6)]}}>{a}</li>)
  return (
    <div>
      <h1>Numbers List</h1>
      <ul>
        {value}
      </ul>
    </div>
  )
}


export default App