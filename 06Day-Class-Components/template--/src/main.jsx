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

  render() {
    return (
      <div>
        <div>This is the main folder</div>
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
