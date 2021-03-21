import React, {
  useState,
} from 'react'
import {
  useSelector,
} from 'react-redux'
import {
  createGlobalStyle, ThemeProvider,
} from 'styled-components'

import themes from './lib/themes'
import HotDogPage from './pages/HotDogPage'
import Modal from './components/Modal'
import CreateNew from './components/CreateNew'
import {BrowserRouter as Router, Redirect} from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    ::-webkit-scrollbar {
    width: 4px;
    background: grey;
    border-radius: 2.5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2.5px;
    background-color: black;
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
  }

  *:after, *:before {
    box-sizing: inherit;
  }

  p, ul, li, h1, h2, h3, h4 ,h5 ,h6, html, body{
    margin: 0;
    padding: 0;
  }
  li{
    list-style-type: none;
  }
  h1, h2, h3, h4,h5, h6{
    font-weight: normal;
  }
  
  input, textarea, button{
    outline: none;
    border:none;
    background:none;
  }
  html{
    font-size: 62.5%;  /* 1rem = 10px */
  }

  body{
    font-family: 'Helvetica', sans-serif;
    font-size:1.4rem;
    color: #000000;
    font-weight: 400;
    min-width: 320px;
    overflow-x: hidden;
    background: #ffffff;
    line-height: normal;
  }

  @media (min-width: 1921px) {
  body {
    font-size: 1.6rem;
  }
}
`

const App = () => {
  const [currentTheme] = useState('base')
  const isModal = useSelector(store => store.modal.isOpen)
  return (
      <Router>
          <Redirect to="/products" />
          <ThemeProvider theme={themes[currentTheme]}>
              <GlobalStyle/>
              <HotDogPage />
              {isModal && (
                  <Modal>
                      <CreateNew/>
                  </Modal>
              )}
          </ThemeProvider>
      </Router>

  )
}

export default App
