import React from 'react'
import { Link } from 'react-router-dom'

import history from '../../../../history'
import { navigation } from '../../../../constants'
import { Card } from '../../../_common'
import { Container } from './styled'

const Navigation = props => {
  const links = navigation.map((item, i) => (
    <Link
      key={i}
      to={item.path}
      className={
        history.location.pathname === item.path ? 'navigation__link_active' : ''
      }
    >
      {item.text}
    </Link>
  ))
  return (
    <Card>
      <Container>{links}</Container>
    </Card>
  )
}

export default Navigation
