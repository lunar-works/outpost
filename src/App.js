import React, { Component, PureComponent } from 'react'

import styled, {ThemeProvider} from 'styled-components'
import GlobalStyle, {theme} from './style'

import LoginView from './views/Login'
import DashboardView from './views/Dashboard'
import BrowseView from './views/Browse'
import UpsertView from './views/Upsert'

import config from './configs'

import { BrowserRouter as Router, Route } from "react-router-dom"

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
  <ThemeProvider  theme={theme}>
    <>
      <GlobalStyle />
      <Router>
          <>
            <Route path="/" exact component={LoginView} />
            <Route path="/dashboard" exact component={DashboardView} />
            <Route path="/about" exact component={About} />
            <Route path="/users" exact component={Users} />
            <Route path="/browse/:model" exact component={BrowseView} />
            
            <Route path="/edit/:model/:id" exact component={UpsertView} />
          </>
      </Router>
    </>
  </ThemeProvider>
)

export default AppRouter
