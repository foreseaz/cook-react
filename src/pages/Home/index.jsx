import * as React from 'react'
import Logo from '~/assets/icons/logo.svg'

import { connect } from 'react-redux'
import * as UserAction from '~/actions/User'

import Localization from '~/utils/locales'

import Menu from '~/components/Menu'

import styles from './Home.css'
import '~/styles/global/global.css'

class Home extends React.Component {
  componentDidMount () {
    this.props.getUser('foreseaz')
  }

  render () {
    return (
      <main>
        <div className={styles.container}>
          <Menu
            list={
              [{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }]
            }
          />
          <Logo />
          <h2>{Localization.title}</h2>
        </div>
        <p className='global-without-hash'>This is text with global css</p>
        <pre>
          {JSON.stringify(this.props.user, null, 2)}
        </pre>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})
const mapDispatchToProps = {
  ...UserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
