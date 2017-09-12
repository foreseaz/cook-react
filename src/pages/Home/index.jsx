import * as React from 'react'
import Logo from '~/styles/icons/logo.svg'

import Localization from '~/utils/locales'

import Menu from '~/components/Menu'

import styles from './Home.css'

class Home extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Menu list={['foo', 'bar', 'baz']} />
        <Logo />
        <h2>{Localization.title}</h2>
      </div>
    )
  }
}

export default Home
