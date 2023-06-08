import React from 'react'
import TopNav from './TopNav'
import Application from './Application'

function Main() {
  document.title = 'Weather App'
  return (
    <>
    <TopNav/>
    <Application/>
    </>
  )
}

export default Main