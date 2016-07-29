import React from 'react'
import { View, ScrollView, Text, Image, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Metrics, Images } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/ShopScreenStyle'

// I18n
import I18n from '../I18n/I18n.js'

class ShopScreen extends React.Component {

  render () {
    return (
      <ScrollView style={{marginTop: 70, marginBottom: 50}}>
        <Image source={Images.shopTopBanner} style={{height: 40, width: null}}/>
        <Image source={Images.shopMenOutwear} style={{height: 80, width: null}} />
        <Image source={Images.shopWomenOutwear} style={{height: 80, width: null}} />
        <Image source={Images.shopOffer} style={{height: 277, width: null}}/>
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopScreen)
