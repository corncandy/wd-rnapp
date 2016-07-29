import React, { Component, PropTypes } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './Styles/DrawerButtonStyles'

class DrawerButton extends Component {
  render () {
    return (
      <TouchableOpacity style={{height: 50, borderBottomWidth: 1, borderBottomColor: '#585858', justifyContent: 'center'}} onPress={this.props.onPress}>
        <Text style={[{fontSize: 15, color: '#FFFFFF', opacity: 0.69, textAlign: 'center'}, this.props.textStyle]}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

DrawerButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default DrawerButton
