import { StrictMode , React,Component} from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header>
        <div className='header-wrapper'>
            <h1>Welcome to 30 days of React</h1>
            <h2>Getting started with react class based components</h2>
            <h3>Javascript library</h3>
        </div>
      </header>
    )
  }
}

class TechList extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    const techs = ['HTML','CSS','JAVASCRIPT']
    const techFormatted = techs.map((t)=> <li key={t}>{t}</li>)
    return techFormatted
  }
}

class BainTain extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    count: 0,
  }
  render() {

    const count = this.state.count
    return (
      <div>
        <div>This is the main {count}</div>
        <button onClick={()=> this.setState({count:this.state.count+1})}>Add One</button>
        <button onClick={()=> this.setState({count:this.state.count-1})}>Minus one</button>
        <Header />
        <TechList />
      </div>
    )
  }
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BainTain />
  </StrictMode>,
)
