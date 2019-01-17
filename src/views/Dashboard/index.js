import React, { Component, PureComponent } from 'react'
import Form from '../../components/Form'
import Field from '../../components/Form/Field'
import NavItems from '../../configs'

import Nav from '../../components/Nav'
import { NavLink } from "react-router-dom"

const Dashboard = () => 
  <div>
    <h2>Dashboard</h2>
    <Nav>
      { NavItems.map(item => {
        return (
          <NavLink to={ "browse/" + item.alias}>{item.title}</NavLink>
        )
      } )}
    </Nav>
  </div>
export default Dashboard
