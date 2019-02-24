import React, { PureComponent } from 'react'
import Layout from '../../layouts/dashLayout'
import NavItems from '../../configs'
import Nav from '../../components/Nav'
import { AuthContext } from '../../components/providers/auth'

class DashboardView extends PureComponent {
  static contextType = AuthContext

  
  render() {
    
    return( 
      <Layout>
        <h2>Dashboard</h2>
      </Layout>
    )
  }
}

export default DashboardView
