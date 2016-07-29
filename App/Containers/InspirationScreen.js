import React from 'react'
import { View, Text, KeyboardAvoidingView, Image } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Metrics, Images } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/InspirationScreenStyle'

// I18n
import I18n from '../I18n/I18n.js'

import Dimensions from 'Dimensions'

class InspirationScreen extends React.Component {

  render () {
    const {height, width} = Dimensions.get('window')
    const imageWidth = width / 3
    const imageHeight = height - 65 - 50
    return (
      <View style={{flexDirection: 'row', paddingTop: 65, paddingBottom: 50}}>
        <Image source={Images.inspirationLife} resizeMode='stretch' style={{width: imageWidth, height: imageHeight}} />
        <Image source={Images.inspirationFasion} resizeMode='stretch' style={{width: imageWidth, height: imageHeight}} />
        <Image source={Images.inspirationVideos} resizeMode='stretch' style={{width: imageWidth, height: imageHeight}} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InspirationScreen)
