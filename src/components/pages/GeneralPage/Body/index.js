import React from 'react'
import {
  /* BrowserRouter as Router, */
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Contacts from './Contacts'
import TypesOfWork from './TypesOfWork'
import Portfolio from './Portfolio'
import Certificates from './Certificates'
import { Card } from '../../../_common'
import { Container } from './styled'

const Body = () => {
  return (
    <Card>
      <Container>
        <Switch>
          <Redirect exact from="/" to="/typesOfWork" />
          <Route path="/typesOfWork" component={TypesOfWork} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/certificates" component={Certificates} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Container>
    </Card>
  )
}

export default Body
