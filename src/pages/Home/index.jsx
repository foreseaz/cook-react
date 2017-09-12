import React, { Component } from 'react'
import Logo from '~/icons/logo.svg'

import Localization from '~/utils/locales'

import styles from './Home.css'

class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Logo />
        <h2>{Localization.title}</h2>
      </div>
    )
  }
}

export default Home
