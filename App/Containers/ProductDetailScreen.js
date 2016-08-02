import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

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
        <KeyboardAvoidingView behavior='position'>
          <Text>{this.props.id}</Text>
          <Text>{this.props.product.name}</Text>
        </KeyboardAvoidingView>
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
