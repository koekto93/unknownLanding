import styled from 'styled-components'
import { contentWidth } from '../../../constants'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const MenuBarWrapper = styled.div`
  margin-bottom: 30px;
  flex: 0 0 auto;
`

export const Content = styled.div`
  flex: 1 0 auto; /* Относится к расширению самого блока, а не дочерних элементов */
  width: 100%;
  max-width: ${contentWidth}px;
  display: flex;
  margin: 0 auto;

  & > div:first-child {
    margin-right: 30px;
  }

  & > div:last-child {
    flex: 1 0 auto;
  }
`

export const FooterWrapper = styled.div`
  flex: 0 0 auto;
  margin-top: 30px;
`
