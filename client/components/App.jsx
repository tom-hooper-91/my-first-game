import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Game from './Game'

import { fetchFruits } from '../actions'

function App (props) {
  useEffect(() => {
    props.dispatch(fetchFruits())
  }, [])

  return (
    <>
      <div className='app'>
        <h1>React Game</h1>
        <Game />
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
