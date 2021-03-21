import React, {
  useState,
} from 'react'
import styled from 'styled-components'
import {
  useDispatch, useSelector,
} from 'react-redux'

import Button from './Button'

const Wrapper = styled.form`
  width: 30rem;
  min-height: 30rem;
  padding: ${props => props.theme.mainPad};
  background-color: ${props => props.theme.mainBG};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h3`
  font-size: ${props => props.theme.accentFZ};
  font-weight: 600;
`

const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Input = styled.input`
  max-width: 90%;
  padding: ${props => props.theme.secondaryPad};
  border: 1px solid ${props => props.theme.lightBG};
`
const CreateNew = () => {
  const [newObj, setNewObj] = useState({
    city: '',
    price: '',
    description: '',
    img: '',
  })

  const dispatch = useDispatch()
  const data = useSelector(store => store.hotDog.data)

  const onChangeInput = (e) => {
    setNewObj({
      ...newObj,
      [e.target.name]: e.target.value,
    })
  }

  const onCancel = () => {
    dispatch({
      type: 'CLOSE_MODAL',
    })
    console.log("close modal"); //eslint-disable-line
  }

  const onSave = async () => {
    const isHaveName = await data.find(({
                                          city,
    }) => city === newObj.city)
    const isHaveData = newObj.city.length < 3
    if (isHaveName) {
      alert("this name is used, please change name"); //eslint-disable-line
      setNewObj({
        ...newObj,
        city: '',
      })
    } else if (isHaveData) {
      alert("name must be a longer that 3 symbols"); //eslint-disable-line
      setNewObj({
        ...newObj,
        city: '',
      })
    } else {
      dispatch({
        type: 'CREATE',
        newObj,
      })
      console.log("create new"); //eslint-disable-line
      onCancel()
    }
  }

  return (
    <Wrapper>
      <Title>add new Position</Title>
      {Object.keys(newObj).map((str) => {
        if (str === 'id') {
          return null
        }
        return (
          <Input
            key={str}
            type="text"
            name={str}
            value={newObj[str]}
            onChange={e => onChangeInput(e)}
            placeholder={str}
          />
        )
      })}
      <BtnWrap>
        <Button
          width="45%"
          label="cancel"
          dark
          fnClick={onCancel}
        />
        <Button
          width="45%"
          label="save"
          dark
          fnClick={onSave}
        />
      </BtnWrap>
    </Wrapper>
  )
}
export default CreateNew
