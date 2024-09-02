import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Footer, Header, Menu } from './components'
import { Home } from './pages'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu/>
    <Header/>
    <Home/>
    <Footer/>
  </StrictMode>,
)
