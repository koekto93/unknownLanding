import React from 'react'

import logoImg from '../../../images/logo.png'
import { Card, Image } from '../index'
import {
  Container,
  ImageWrapper,
  InfoBlocks,
  Block,
  BlockText,
  MailImage,
  PhoneImage,
  ContentWrapper,
} from './styled'

const MenuBar = () => {
  return (
    <Card>
      <Container>
        <ContentWrapper>
          <ImageWrapper>
            <Image src={logoImg} width="114px" height="62px" alt="logo" />
          </ImageWrapper>
          <InfoBlocks>
            <Block>
              <MailImage />
              <BlockText>frffrrr@mail.ru</BlockText>
            </Block>
            <Block>
              <PhoneImage />
              <BlockText>8 (945) 000-00-00</BlockText>
            </Block>
          </InfoBlocks>
        </ContentWrapper>
      </Container>
    </Card>
  )
}

export default MenuBar
