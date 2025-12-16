import { useReducer } from 'react'
import './App.css'

const initialState = {
  firstName:"",
  lastName:"",
  country:"",
  title:""
}


const formReducer = (state,action) => {
  switch(action.type) {
    case "UPDATE_FIELD":
      return{
        ...state,
        [action.field]:action.value
      }
      
      case "RESET_FORM":
        return initialState
        
        default :
        return state
      }
    }
    function App() {
    const [formData,dispatch] = useReducer(formReducer,initialState);


    const handleChange = (e) => {
      const {name,value} = e.target
    
    dispatch({
      type:"UPDATE_FIELD",
      field:name,
      value:value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)

    dispatch({type:"RESET_FORM"})
  }

  return (
    <>
      <div className='App'>
          <h3>Add Students</h3>
          <form onSubmit={handleSubmit}>
              <div>
                <input 
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
               <div>
                <input 
                  type='text'
                  name='lastName'
                  placeholder='Last Name'
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
               <div>
                <input 
                  type='text'
                  name='country'
                  placeholder='Country'
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
               <div>
                <input 
                  type='text'
                  name='title'
                  placeholder='Title'
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <button>Submit</button>
          </form>

      </div>
    </>
  )
}

export default App
