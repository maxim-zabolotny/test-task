import React from 'react'
import styled from 'styled-components'
import {
  useDispatch,
} from 'react-redux'

import Button from './Button'

const Wrapper = styled.header`
  z-index: 5;
  position: fixed;
  top: 2rem;
  width: 100vw;
  height: 6rem;
  padding: 1rem 2rem;
  box-shadow: ${props => props.theme.HeaderSHDW};
  background-color: ${props => props.theme.mainBG};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Header = () => {
  const dispatch = useDispatch()

  const createNew = () => {
    dispatch({
      type: 'OPEN_MODAL',
    })
    console.log('OPEN_MODAL')
  }

  return (
    <Wrapper>
      <Button
        width="10rem"
        logo
        fnClick={() => alert("go to about brand")} //eslint-disable-line
      />
      <Button
        width="10rem"
        dark
        label="add New"
        fnClick={createNew}
      />
    </Wrapper>
  )
}
export default Header
