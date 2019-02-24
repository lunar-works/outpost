import React, { PureComponent } from 'react'

import NavItems from '../../configs'
import Nav from '../../components/Nav'
import { AuthContext } from '../../components/providers/auth'

class DashboardView extends PureComponent {
  static contextType = AuthContext

  
  render() {
    
    return( 
      <div>
        <h2>Dashboard</h2>
      </div>
    )
  }
}

export default DashboardView
