//@flow
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import GeneralPage from './GeneralPage'

import { Container } from './styled'

const Pages = (props: {}) => {
  return (
    <Router>
      <Container>
        <Switch>
          <Redirect exact from="/" to="/generalPage" />
          <Route path="/generalPage" component={GeneralPage} />
        </Switch>
      </Container>
    </Router>
  )
}

export default Pages
