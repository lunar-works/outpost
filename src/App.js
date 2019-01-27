import React, { Component, PureComponent } from 'react'

import LoginView from './views/Login'
import DashboardView from './views/Dashboard'
import BrowseView from './views/Browse'
import UpsertView from './views/Upsert'

import NavItems from './configs'
import Header from './components/Nav/Wrap'

import { BrowserRouter as Router, Route } from "react-router-dom"

import styled from 'styled-components'

const AppWrapper = styled.div`
  background: #f6f8fb;
  color: #4e535f;
  min-height: 100vh;
  display: flex;
`
const Content = styled.div`
  padding: 3em 3em;
`

const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>

const AppRouter = () => (
  <Router>
    <AppWrapper>
      <Header name={ 'Outpost' } tagline={ 'For all your outy posty needs'} src={ '' } items={ NavItems } />
      <Content>
        <Route path="/" exact component={LoginView} />
        <Route path="/dashboard" exact component={DashboardView} />
        <Route path="/about" exact component={About} />
        <Route path="/users" exact component={Users} />
        <Route path="/browse/:model" exact component={BrowseView} />
        <Route path="/edit/:model/:id" exact component={UpsertView} />
      </Content>
    </AppWrapper>
  </Router>
)

export default AppRouter
