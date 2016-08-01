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
import styles from './Styles/MoreScreenStyle'

// I18n
import I18n from '../I18n/I18n.js'

class MoreScreen extends React.Component {

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.orders}>
          <View style={styles.inProgress}>
            <Image source={Images.accountOrderRefresh} style={styles.orderRefresh} />
            <Text style={styles.orderCount}>1 Order in Progress</Text>
          </View>
          <View style={styles.orderInfo}>
            <Text style={styles.orderText}>Last Order: 30.12.2014</Text>
            <Text style={styles.orderText}>ID: c945387433</Text>
          </View>
        </View>
        <View style={styles.header}>
          <Image source={Images.accountHeader} style={styles.headerIcon} />
        </View>
        <View style={styles.listView}>
          <View style={styles.listItem}>
            <Image source={Images.accountPaymentIcon} style={styles.itemIcon} resizeMode='stretch'/>
            <Text style={styles.itemText}>Payment Information</Text>
            <Image source={Images.accountNextIcon} style={styles.nextIcon} />
          </View>
          <View style={styles.listItem}>
            <Image source={Images.accountSettingsIcon} style={styles.itemIcon} resizeMode='stretch' />
            <Text style={styles.itemText}>Settings</Text>
            <Image source={Images.accountNextIcon} style={styles.nextIcon} />
          </View>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(MoreScreen)
