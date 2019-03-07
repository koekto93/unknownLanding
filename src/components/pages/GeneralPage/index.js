import React from 'react'
//import { Route, Switch, Redirect } from 'react-router-dom'

import { MenuBar } from '../../_common/index'
import Footer from './Footer'
import Navigation from './Navigation'
import Body from './Body'

import { Container, MenuBarWrapper, FooterWrapper, Content } from './styled'

const GeneralPage = () => {
  return (
    <Container>
      <MenuBarWrapper>
        <MenuBar />
      </MenuBarWrapper>
      <Content>
        <Navigation />

        <Body />

        {/* <Switch>
        <Redirect exact from="/" to="/generalPage" />
        <Route path="/generalPage" component={GeneralPage} />
      </Switch> */}
      </Content>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  )
}

export default GeneralPage
