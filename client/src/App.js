import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import icons from 'font-awesome/css/font-awesome.css'

class App extends Component {
  state = {
    form: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/fields').then(resp => {
      this.setState({
        form: resp.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Sign up for My Web App</h1>
        <form>
          {this.state.form.map(n => {
            if(n.type === "text"){
              return <div className="formdiv"><i className={"fa " + n.icon}></i><input type={n.type} name={n.id} placeholder={n.label}/></div>
            } else if (n.type ==="email"){
              return <div className="formdiv"><i className={"fa " + n.icon}></i><input type={n.type} name={n.id} placeholder={n.label}/></div> 
            } else if (n.type ==="select"){
              return  <div className="formdiv"><select>{n.options.map(o =>{return <option placeholder ={o.value}>{o.label}</option>
              })} </select></div> 
            } else if (n.type === "textarea"){
              return <div className="formdiv" id="textbox"><i className={"fa " + n.icon}></i><textarea placeholder={n.label}></textarea></div>
            } else if (n.type === "tel") {
              return <div className="formdiv"><i className ={"fa " + n.icon}></i><input type={n.type} name={n.id} placeholder={n.label}/></div>
            } 
          })}
        </form>
        <div id="submit"><button type="button">Submit Form</button></div>
      </div>
    )
  }
}

export default App;
 