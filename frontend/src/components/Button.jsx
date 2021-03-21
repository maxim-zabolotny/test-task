import React from 'react'
import styled from 'styled-components'

import imgLogo from '../img/hotdogLogo.png'

const Wrapper = styled.button`
    width:${props => props.width};
    padding:${props => props.theme.mainPad};
    background-color:${props => (props.dark ? props.theme.secondaryBG : props.theme.lightBG)};
    color:${props => props.theme.mainBG};
    cursor: pointer;
    transition:0.2s ease;
    :active{
        transform:scale(0.97);
    }
`
const WrapWithImg = styled(Wrapper)`
    background-color:unset;
    padding:unset;
`

const Image = styled.img`
    max-height:3rem;
`

const Button = ({
  width = '100%', dark = false, type = 'button', label = 'default', logo = false,
  fnClick = () => { },
}) => (
  logo
    ? (
      <WrapWithImg
        width={width}
        dark={dark}
        type={type}
        onClick={fnClick}
      >
        <Image src={imgLogo} />
      </WrapWithImg>
    )

    : (
      <Wrapper
        width={width}
        dark={dark}
        type={type}
        onClick={fnClick}
      >
        {label}
      </Wrapper>
    )
)

export default Button
