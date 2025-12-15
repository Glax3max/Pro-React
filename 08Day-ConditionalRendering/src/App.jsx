import Header from "./components/Header"
import "./App.css"
import {React,Component} from 'react'
import Button from "./components/Button"
import StatusLoggedIn from "./components/StatusLoggedIn"
import StatusLoggedOut from "./components/StatusLoggedOut"


const   buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: '3px auto',
  cursor: 'pointer',
  fontSize: 22,
  color: 'white',
}

class App extends Component {
  state = {
    loggedIn: false,
  }

  handleLogin = () => {
    this.setState({
      loggedIn:!this.state.loggedIn
    })
  }


  render() {
    const data = {
       welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 9, 2020',
    }

    // let status = this.state.loggedIn ? (<h3>Welcome to 30 Days Of React</h3>) : ( <h3>Please Login</h3>)

    return (
      <div className='app'>
        <Header data={data} />
        {(this.state.loggedIn)?
        (<StatusLoggedIn/>):
        (<StatusLoggedOut/>)  
      }
        <Button toggleBtn={this.handleLogin} style={buttonStyles}/>
      </div>
    )
  }
}

export default App;