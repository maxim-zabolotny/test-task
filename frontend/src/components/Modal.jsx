import React, {
  useEffect, useRef,
} from 'react'
import styled from 'styled-components'
import {
  useDispatch,
} from 'react-redux'

const Wrapper = styled.div`
    z-index:1000;
    position:fixed;
    width:100%;
    min-width:100vw;
    height:100%;
    min-height:100vh;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.5);
    display:flex;
    justify-content:center;
    align-items: center;
  `

const CloseModal = styled.span`
    position:absolute;
    top:1.4rem;
    right:2.4rem;
    border:none;
    background:none;
    font-size:${props => props.theme.titleFZ};
    padding:${props => props.theme.mainPad};
    color:${props => props.theme.mainBG};
    cursor:pointer;
  `

const Children = styled.div`
    max-width:95%;
  `

const Modal = ({
  children = null,
}) => {
  const dispatch = useDispatch()
  const backDropRef = useRef(null)
  const childrenRef = useRef(null)

  const handleClose = () => {
    dispatch({
      type: 'CLOSE_MODAL',
    })
  }

  const handleMouseClick = (e) => {
    if (e.target === backDropRef.current && e.target !== childrenRef.current) {
      handleClose()
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleMouseClick)
    return () => window.removeEventListener('click', handleMouseClick)
  })

  return (
    <Wrapper
      ref={backDropRef}
    >
      <CloseModal onClick={handleClose}>
        &#10006;
      </CloseModal>
      <Children
        ref={childrenRef}
      >
        {children}
      </Children>
    </Wrapper>
  )
}

export default Modal
