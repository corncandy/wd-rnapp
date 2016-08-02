import React from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Swiper from 'react-native-swiper'

// Styles
import styles from './Styles/ProductDetailScreenStyle'

// I18n
import I18n from '../I18n/I18n.js'

class ProductDetailScreen extends React.Component {
  componentDidMount() {
    this.props.requestProduct(this.props.id)
  }

  render () {
    console.log(this.props);
    return (
      <ScrollView style={styles.container}>
        <Swiper
          width={Metrics.screenWidth}
          height={Metrics.scale(350)}
          style={styles.wrapper}
          showsButtons={false}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.products.current
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestProduct: (id) => dispatch(Actions.requestProduct(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailScreen)
