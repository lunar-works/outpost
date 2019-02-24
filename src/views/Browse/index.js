import React, { Component, PureComponent } from 'react'
import NavItems from '../../configs'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../components/providers/auth'
import Layout from '../../layouts/dashLayout'
import moment from 'moment'
import styled from 'styled-components'
import { GridContainer, PositionContainer } from '../../components/generics/containers';


const Browse = styled.div`
  h2 {
    text-transform: capitalize;
    padding-bottom: 2em;
  }

`

const Table = styled.table`
  color: #3e4556;
  border-collapse: collapse;
  border-radius: 4px;
  td{
    border-top: 1px solid #f1f1f1;
    padding: 0.5rem;
    text-transform: capitalize;
    border-radius: 4px;
  }
  tr {
    a, a:link {
      display: block;
      padding: 0.6em 1.2em 0.6em 1em;
      text-decoration: none;
      color: #3e4556;
      &:active {

      }
    }
  }
  th {
    padding: 1.4rem;
    opacity:0.5;
    text-transform: capitalize;
    font-weight: normal;
  }
  tbody {
    background: #fff;
    box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
    border-radius: 4px;
    tr{
      &:first-child{
        border-radius:4px 4px 0px 0px;
      }
      &:last-child{
        border-radius:0 0 4px 4px;
      }
    }
    
  }
  thead {
    font-size: 1em;
    text-align:center;
    
  }
`

class BrowseView extends PureComponent {
  static contextType = AuthContext

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
    //console.
    this.setState({
      loading: true
    }) 
    try {
      const request = await fetch('https://outpost.lunarworks.io/posts.json')
      const response = await request.json()
      this.setState({
        loading: false,
        data: response
      })
    } catch (error) {
      console.error(error)
    }
  }

  renderHead() {
    const data = this.state.data
    if(data.length > 0) {
      return (
        <tr>
          { Object.keys(data[0]).map( (value) => <th>{ value.replace('_', ' ') }</th> ) }
        </tr>
      )
    } else {
      return false
    }
  }

  renderBody() {
    const data = this.state.data
    if(this.state.loading) {
      return (
        <tr><td>Loading.</td></tr>
      )
    } else if (data.length > 0) {
      return data.map( (item) => this.renderRow(item))
    } else {
      return (
        <div>There's no content. sorry.</div>
      )
    }
  }

  renderRow(item) {
    return (
      <tr>
        { Object.values(item).map( (value) => <td><NavLink to={ "/edit/" + this.state.model.alias + '/' + item.id}>{ value }</NavLink></td> ) }
      </tr>
    )
  }

  renderFoot() {
    return null
  }

  render() {
    
    return(
      <Layout>
          <h2>{ this.state.model.title } - List View</h2>
          <p></p>
          <div style={{padding:'1rem', width:"100%",height: "100%", overflowX: "auto"}}> 
            <Table>
              <thead>
                { this.renderHead() }
              </thead>
              <tbody>
                { this.renderBody() }
              </tbody>
              <tfoot>
                { this.renderFoot() }
              </tfoot>
            </Table>
          </div>
      </Layout>
    )
  }

}
export default BrowseView
