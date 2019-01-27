import React, { Component, PureComponent } from 'react'
import Form from './components/Form'
import Field from './components/Form/Field'
import NavItems from './configs'

import LoginView from './views/Login'
import DashboardView from './views/Dashboard'
import BrowseView from './views/Browse'
import UpsertView from './views/Upsert'

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>

const AppRouter = () => (
  <Router>

    <div>
      <Route path="/" exact component={LoginView} />
      <Route path="/dashboard" exact component={DashboardView} />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
      <Route path="/browse/:model" exact component={BrowseView} />
      <Route path="/edit/:model/:id" exact component={UpsertView} />
    </div>
  </Router>
);

export default AppRouter
