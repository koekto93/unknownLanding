import React from 'react'

import { Container, Header, Body } from './styled'

import { typesOfWork } from '../../../../../../constants'

const UnitOfWork = () => {
  const body = { __html: typesOfWork.body }
  return (
    <Container>
      <Header>{typesOfWork.header}</Header>
      <Body dangerouslySetInnerHTML={body} />
    </Container>
  )
}

export default UnitOfWork
