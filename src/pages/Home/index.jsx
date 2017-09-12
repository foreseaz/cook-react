import * as React from 'react'
import Logo from '~/styles/icons/logo.svg'

import Localization from '~/utils/locales'

import Menu from '~/components/Menu'

import styles from './Home.css'
import '~/styles/global/global.css'

class Home extends React.Component {
  render() {
    return (
      <main>
        <div className={styles.container}>
          <Menu list={['foo', 'bar', 'baz']} />
          <Logo />
          <h2>{Localization.title}</h2>
        </div>
        <p className='global-without-hash'>This is text with global css</p>
      </main>
    )
  }
}

export default Home
