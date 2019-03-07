import React from 'react'

import { HeadlineBlock, HeadlineLabel } from '../../../../_common'
import UnitOfWork from './UnitOfWork'
import { Container } from './styled'

const TypesOfWork = () => {
  return (
    <Container>
      <HeadlineBlock>
        <HeadlineLabel value="Виды работ" />
      </HeadlineBlock>
      <UnitOfWork />
    </Container>
  )
}

export default TypesOfWork
