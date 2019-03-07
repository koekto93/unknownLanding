import styled from 'styled-components'
import { navigationWidth } from '../../../../constants'

export const Container = styled.div`
  width: ${navigationWidth}px;
  display: flex;
  flex-direction: column;
  font-size: 20px;

  & > a {
    text-decoration: none;
    color: #aaaaaa;
    padding: 10px 20px 10px 5px;
    /* border-bottom: 1px solid #aaa; */
  }

  & > a:visited {
    color: #aaaaaa;
  }

  & > a:hover {
    color: #000;
  }

  a:active {
    color: #000;
  }
`
