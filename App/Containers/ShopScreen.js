import React from 'react'
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
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
  showProduct(category) {
    NavigationActions.productScreen({category})
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.shopTopBanner} style={styles.topBanner} />
        <TouchableOpacity onPress={this.showProduct.bind(this, 'men-outwear')}>
          <Image source={Images.shopMenOutwear} style={styles.menOutwear} />
        </TouchableOpacity>
        <Image source={Images.shopWomenOutwear} style={styles.womenOutwear} />
        <Image source={Images.shopOffer} style={styles.offer} />
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
