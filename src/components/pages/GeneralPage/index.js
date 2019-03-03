import React from 'react'
//import { Route, Switch, Redirect } from 'react-router-dom'

import { MenuBar } from '../../_common/index'
import { Container, MenuBarWrapper } from './styled'

const GeneralPage = () => {
  return (
    <Container>
      <MenuBarWrapper>
        <MenuBar />
      </MenuBarWrapper>
      {/* <Switch>
        <Redirect exact from="/" to="/generalPage" />
        <Route path="/generalPage" component={GeneralPage} />
      </Switch> */}
    </Container>
  )
}

export default GeneralPage
