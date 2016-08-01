import React from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView, Image } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Metrics, Images } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/StoreScreenStyle'

// I18n
import I18n from '../I18n/I18n.js'

class StoreScreen extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Image source={Images.storesMap} style={styles.map} />
        <Image source={Images.storesHeader} style={styles.header} />
        <ScrollView style={styles.container}>
        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(StoreScreen)
