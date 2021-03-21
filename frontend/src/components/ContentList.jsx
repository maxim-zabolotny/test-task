import React, {
    useEffect, useState,
} from 'react'
import styled from 'styled-components'
import {
    useSelector, useDispatch,
} from 'react-redux'
import Media from 'react-media'

import {
    API,
} from '../lib/api'

import Item from './Item'

const Wrapper = styled.div`
  width: ${props => props.width};
  min-height: 75vh;
  margin: 0 auto;
  padding: ${props => props.theme.sidePad};
  box-shadow: ${props => props.theme.HeaderSHDW};
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.position};
  align-items: flex-start;
`

const ContentList = () => {
    const [updateProduct, setUpdateProduct] = useState({})
    // const [id, setId] = useState(null)

    const data = useSelector(store => store.hotDog.data)
    const isEdit = useSelector(store => store.hotDog.isEdit)
    const isUpdate = useSelector(store => store.hotDog.isUpdate)
    const dispatch = useDispatch()

    const onButtonClick = (id, type) => {
        switch (type) {
            case 'startEdit':
                dispatch({
                    type: 'EDIT_ID',
                    id,
                    bool: false,
                })
                break
            case 'save':
                dispatch({
                    type: 'EDIT_ID',
                    id: null,
                    bool: true,
                })
                dispatch({
                    type: 'SEND_UPDATE',
                    updateProduct,
                    id,
                    isUpdate: true
                })
                break
            case 'delete':
                dispatch({
                    type: 'DELETE',
                    id,
                })
                //eslint-disable-line
                break
            default:
        }
    }

    const onChangeInput = (e, id) => {
        const findEl = data.find(obj => id === obj.id)
        const newObj = {
            ...findEl,
            [e.target.name]: e.target.value,
        }
        dispatch({
            type: 'EDIT',
            id,
            newObj,
        })
        setUpdateProduct(newObj);
    }

    useEffect(() => {
        if (isUpdate) {
            const updateData = async () => {
                try {
                    // API
                    const {data, status} = await API.get("/api/products"); //eslint-disable-line
                    if (status === 200) {
                        dispatch({
                            type: 'GET_DATA',
                            payload: data,
                        })
                    }
                } catch (err) {
                }
            }
            updateData()
        }
    }, [isUpdate])

    useEffect(() => {
        // this async wrapper for Api request
        const asyncFunction = async () => {
            try {
                // API
                const {data, status} = await API.get("/api/products"); //eslint-disable-line
                if (status === 200) {
                    dispatch({
                        type: 'GET_DATA',
                        payload: data,
                    })
                }
            } catch (err) {
            }
        }
        asyncFunction()
    }, []); //eslint-disable-line

    useEffect(() => {
        // update server data
        if (isUpdate) {
            dispatch({
                type: 'STOP_UPDATE_DATA',
            })
        }
    }, [isUpdate]); //eslint-disable-line

    return (
        <Media
            queries={{
                mobile: '(max-width: 900px)',
            }}
        >
            {({
                  mobile,
              }) => (
                <Wrapper
                    width={mobile ? '100%' : '80%'}
                    position={mobile ? 'space-around' : 'flex-start'}
                >
                    {data
                    && data.map(obj => (
                        <Item
                            key={obj.id}
                            element={obj}
                            isEdit={isEdit}
                            onButtonClick={onButtonClick}
                            fnChange={onChangeInput}
                        />
                    ))}
                </Wrapper>
            )}
        </Media>
    )
}

export default ContentList
