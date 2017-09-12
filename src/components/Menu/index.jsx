import * as React from 'react'
import PropTypes from 'prop-types'

import styles from './Menu.css'

const Menu = ({ list }) => (
  <div className={styles.menu}>
    <ul>
      {
        list.map(elem => (
          <li>
            <a href='#'>{elem}</a>
          </li>
        ))
      }
    </ul>
  </div>
)

Menu.propTypes = {
  list: PropTypes.array.isRequired
}

export default Menu
