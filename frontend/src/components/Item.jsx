import React from 'react'
import styled from 'styled-components'
import Media from 'react-media'

import dumpimg from '../img/dumpImg.png'

import Button from './Button'

const Wrapper = styled.div`
  width: ${props => props.width};
  /* max-width: 50rem; */
  min-height: 40rem;
  margin-top: 1rem;
  margin-left: ${props => props.pad};
  margin-right: ${props => props.pad};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: ${props => props.theme.secondaryBG};
  :last-child {
    margin-bottom: 2rem;
  }
`

const Image = styled.img`
  max-width: 100%;
  max-height: 20rem;
  margin: 0 auto;
`
const Label = styled.h2`
  margin-top: 1rem;
  font-size: ${props => props.theme.accentFZ};
  font-weight: 600;
`

const Price = styled.p`
  margin-top: 1rem;
  font-size: ${props => props.theme.mainFZ};
  color: ${props => props.theme.lightBG};
`
const Description = styled(Price)`
  margin-bottom: 1rem;
  color: ${props => props.theme.secondaryBG};
`
const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.secondaryPad};
  border: 1px solid ${props => props.theme.lightBG};
`
const TextArea = styled.textarea`
  width: 100%;
  height: 12rem;
  padding: ${props => props.theme.secondaryPad};
  resize: none;
  border: 1px solid ${props => props.theme.lightBG};
`

const Item = ({
  element, isEdit, onButtonClick, fnChange,
}) => (
  <Media
    queries={{
      mobile: '(max-width: 900px)',
    }}
  >
    {({
      mobile,
    }) => (
      <Wrapper
        width={mobile ? '90%' : '31.33%'}
        pad={mobile ? 'unset' : '1%'}
      >
        <Image
          src={element.img || dumpimg}
          alt={element.city || 'unknown'}
        />
        {isEdit === element.id ? (
          <>
            <Input
              type="text"
              name="img"
              value={element.img || ''}
              onChange={e => fnChange(e, element.id)}
            />
            <Input
              type="text"
              name="label"
              value={element.city || ''}
              onChange={e => fnChange(e, element.id)}
            />
            <Input
              type="text"
              name="price"
              value={element.price || ''}
              onChange={e => fnChange(e, element.id)}
            />
            <TextArea
              type="text"
              name="description"
              value={element.description || ''}
              onChange={e => fnChange(e, element.id)}
            />
          </>
        ) : (
          <>
            <Label>{element.city || 'unknown'}</Label>
            <Price>{`${element.price || '-'} $`}</Price>
            <Description>{element.description || 'unknown'}</Description>
          </>
        )}
        {isEdit === element.id && (
        <Button
          dark
          label="delete"
          fnClick={() => onButtonClick(element.id, 'delete')}
        />
        )}
        <Button
          label={isEdit === element.id ? 'save' : 'edit'}
          fnClick={() => onButtonClick(
            element.id,
            isEdit === element.id ? 'save' : 'startEdit'
          )}
        />
      </Wrapper>
    )}
  </Media>
)

export default Item
