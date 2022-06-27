import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './routes/HomePage'
import ErrorPage from './routes/ErrorPage'
import Menu from './routes/Menu'
import { useOpenFood } from './Hooks/useOpenFood'
import './App.css'

export default function App() {

  const openFood = useOpenFood()
  
  return (
    <div className='container'>
      <Navbar />

      <Routes>
        <Route path='/' element={ <HomePage /> }>
          <Route path='/*' element={ <ErrorPage /> } />
        </Route>
        <Route path='/menu' element={ 
          <Menu { ...openFood } /> 
        } />
      </Routes>
      
    </div>
  )
}