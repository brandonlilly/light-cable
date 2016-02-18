import React from 'react'
import { connect } from 'react-redux'

const TopBar = ({ name, uuid }) => {
  return (
    <div className="topBar">
      <ul>
        <li>WASD: move</li>
        <li>Q|E: roll</li>
        <li>←|→: yaw</li>
        <li>↑|↓: pitch</li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(TopBar)
