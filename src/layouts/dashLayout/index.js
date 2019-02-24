import React, { Component, PureComponent } from 'react'
import {Content, GridContainer, ColumnContainer} from '../../components/generics/containers'
import Mast from '../../components/generics/mast'
import PrimaryNav from '../../components/generics/navigation/primary'
import NavItems from '../../configs'
import { NavLink } from 'react-router-dom'

const items = NavItems.map(item => {
    return {
        alias: item.title,
        component: <NavLink to={`/browse/${item.alias}`}><a>{item.title}</a></NavLink>
    }
})

const Layout = (props) => 
    <GridContainer>
        <Mast>
            {/*<Logo name={name} tagline={tagline} src={src} />*/}
            <PrimaryNav items={[
                {
                    alias: 'Dashboard', 
                    component: <NavLink to={`/dashboard`}><a>Dashboard</a></NavLink>
                },
                ...items
            ]} />
        </Mast>
        <Content>
            {props.children}
        </Content>
    </GridContainer>

export default React.memo(Layout)