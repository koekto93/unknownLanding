import React from 'react'
import Gallery from 'react-photo-gallery'

import { HeadlineBlock, HeadlineLabel } from '../../../../_common'
import { images } from '../../../../../constants'
//import { Container } from './styled'

const Portfolio = () => {
  return (
    <div>
      <HeadlineBlock>
        <HeadlineLabel value="Портфолио" />
      </HeadlineBlock>
      <Gallery photos={images} />
    </div>
  )
}

export default Portfolio
