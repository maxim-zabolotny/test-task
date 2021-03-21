import React from 'react'
import styled from 'styled-components'

import ContentList from './ContentList'

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: ${props => props.theme.mainPad};
  background-color: ${props => props.theme.mainBG};
`

const Title = styled.h1`
  margin-top: 9rem;
  margin-left: 9%;
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: ${props => props.theme.titleFZ};
`

const Content = ({
  title = 'Hot-Dog Sales',
}) => (
  <Wrapper>
    <Title>{title}</Title>
    <ContentList />
  </Wrapper>
)

export default Content
