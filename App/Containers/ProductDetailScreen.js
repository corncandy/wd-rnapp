import React from 'react'
import { TouchableOpacity, View, ScrollView, Text, KeyboardAvoidingView, Image } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Metrics, Images } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import * as Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Swiper from 'react-native-swiper'

// Styles
import styles from './Styles/ProductDetailScreenStyle'

// I18n
import I18n from '../I18n/I18n.js'

class ProductDetailScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCustom: false
    }
  }
  componentDidMount() {
    this.props.requestProduct(this.props.id)
  }

  togglePanel() {
    if (this.state.showCustom) {
     this.setState({
      showCustom: false
     }, () => {
       this.refs.panel.slideOutDown(500)
     })
    } else {
     this.setState({
      showCustom: true
     }, () => {
       this.refs.panel.slideInUp(500)
     })
   }
  }

  render () {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <ScrollView style={styles.wrapper}>
          <Swiper
            width={Metrics.screenWidth}
            height={Metrics.scale(350)}
            dot={<View style={{backgroundColor:'#D8D8D8', width: 10, height: 10, transform: [{rotate: '45deg'}], marginLeft: 4, marginRight: 4, marginTop: 4, marginBottom: 4}} />}
            activeDot={<View style={{backgroundColor: '#EFB961', width: 10, height: 10, transform: [{rotate: '45deg'}], marginLeft: 4, marginRight: 4, marginTop: 4, marginBottom: 4}} />}
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
          <Text style={styles.description}>
            This down jacket is incredibly lightweight and warm. The simple design looks great on everyone.
          </Text>
        </ScrollView>
        <Animatable.View style={styles.customPanel} ref='panel'>
          <Text style={styles.customLabel}>SIZE</Text>
          <View style={styles.customSelection}>
            <Image source={Images.sizeXS} style={{width: 34, height: 38, marginRight: 9}} />
            <Image source={Images.sizeS} style={{width: 34, height: 38, marginRight: 9}} />
            <Image source={Images.sizeM} style={{width: 34, height: 38, marginRight: 9}} />
            <Image source={Images.sizeL} style={{width: 34, height: 38, marginRight: 9}} />
            <Image source={Images.sizeXL} style={{width: 34, height: 38, marginRight: 9}} />
            <Image source={Images.sizeXXL} style={{width: 34, height: 38, marginRight: 9}} />
          </View>
          <Text style={styles.customLabel}>COLOR</Text>
          <View style={styles.customSelection}>
            <Image source={Images.colorBlack} style={{width: 34, height: 38, marginRight: 9}} />
            <Image source={Images.colorRed} style={{width: 34, height: 38, marginRight: 9}} />
            <Image source={Images.colorBlue} style={{width: 34, height: 38, marginRight: 9}} />
            <Image source={Images.colorGreen} style={{width: 34, height: 38, marginRight: 9}} />
            <Image source={Images.colorPurple} style={{width: 34, height: 38, marginRight: 9}} />
          </View>
        </Animatable.View>
        <View style={styles.toolBar}>
          <TouchableOpacity onPress={this.togglePanel.bind(this)} style={styles.customize}>
          {
            this.state.showCustom ?
              <Icon style={styles.customizeIcon} name="chevron-down" size={8} color="#777777" /> :
              <Icon style={styles.customizeIcon} name="chevron-up" size={8} color="#777777" />
          }
            <Text style={styles.customizeText}>CUSTOMIZE</Text>
          </TouchableOpacity>
          <View style={styles.info}>
            <View style={styles.price}>
              <Text style={styles.value}>$120.00</Text>
              <Text style={styles.current}>$110.50</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.cart}>
                ADD TO CART
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
