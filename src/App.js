import React, { Component, PureComponent } from 'react'
import Form from './components/Form'
import Field from './components/Form/Field'
import NavItems from './configs'

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const fields = [
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    required: true
  },{
    name: 'name',
    label: 'Full Name',
    required: true
  },{
    name: 'password',
    label: 'Password',
    type: 'password',
    required: true
  }
]


class Login extends Component {

  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
  }

  validate() {

  } 

  async login(data) {
    try {
      const request = await fetch('https://outpost.lunarworks.io/data.json')
      const response = await request.json()
      this.props.history.push('/dashboard')
    } catch (error) {
      console.error(error)
    }
    
  }

  render() {
    return (
      <div className="App">
        <Form
          onSubmit={ this.login }>
          { fields.map( ({type,label,name,required}) =>
            <Field 
              key={'input_' + name}
              type={type} 
              label={label} 
              name={name}
              required={required}
               />
              
          )}
        </Form> 
      </div>
    );
  }
}

const Dashboard = () => 
  <div>
    <h2>Dashboard</h2>
    <Nav>
      { NavItems.map(item => {
        console.log(item)
        return (
          <NavLink to={item.alias}>{item.title}</NavLink>
        )
      } )}
    </Nav>
  </div>
const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>
class BrowseView extends PureComponent {

  constructor(props) {
    super(props)

    
  }

  state = {
    //model: this.props.match.params.model,
    model: NavItems.find(item => item.alias === this.props.match.params.model),
    loading: false,
    data: []
  }

  async componentDidMount() {
    console.log(this.props.match.params.model)
    console.log(NavItems.find(item => item.alias === this.state.model))
    //console.
    this.setState({
      loading: true
    }) 
    try {
      const request = await fetch('https://outpost.lunarworks.io/posts.json')
      const response = await request.json()
      console.log(response)
      this.setState({
        loading: false,
        data: response
      })
    } catch (error) {
      console.error(error)
    }
  }

  render() {

    const {title, description, alias, fields} = this.state.model

    return(
      <div>
        <h2>{ title } View</h2>
        <p>{ description }</p>


        <Form
          onSubmit={ () => {} }>
          { fields.map( ({type,label,name,required}) =>
            <Field 
              key={'input_' + name}
              type={type} 
              label={label} 
              name={name}
              required={required}
               />
              
          )}
        </Form> 


      </div>
    )
  }


}
const UpsertView = () => <h2>Upsert View</h2>

class Nav extends PureComponent {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <nav>
        { this.props.children }
      </nav>
    )
  }

} 


const AppRouter = () => (
  <Router>

    <div>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
      <Route path="/:model" component={BrowseView} />
      <Route path="/:model/:id" component={UpsertView} />
    </div>
  </Router>
);

export default AppRouter
