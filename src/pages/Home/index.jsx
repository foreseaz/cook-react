import React, { Component } from 'react'
import Logo from '~/icons/logo.svg'

import styles from './Home.css'

class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className="App-header">
          <h2>Welcome to React</h2>
          <Logo />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default Home
