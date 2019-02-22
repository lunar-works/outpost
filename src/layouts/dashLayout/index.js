import React, { Component, PureComponent } from 'react'
import {Content, GridContainer} from '../../components/generics/containers'
import NavItems from '../../configs'
import Header from '../../components/Nav/Wrap'

const Layout = (props) => 
    <GridContainer>
        <Header name={ 'Outpost' } tagline={ 'For all your outy posty needs'} src={ '' } items={ NavItems } />
        <Content>
            {props.children}
        </Content>
    </GridContainer>

export default React.memo(Layout)