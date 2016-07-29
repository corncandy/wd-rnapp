import React, { Component } from 'react'
import { ScrollView, Image } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressShop = () => {
    this.toggleDrawer()
    NavigationActions.shopScreen()
  }

  handlePressBag = () => {
    this.toggleDrawer()
    NavigationActions.bagScreen()
  }

  handlePressAPI = () => {
    this.toggleDrawer()
    NavigationActions.apiTesting()
  }

  handlePressTheme = () => {
    this.toggleDrawer()
    NavigationActions.theme()
  }

  handlePressDevice = () => {
    this.toggleDrawer()
    NavigationActions.deviceInfo()
  }

  handlePressSupport = () => {
    this.toggleDrawer()
    NavigationActions.supportScreen()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <DrawerButton text='Shop' onPress={this.handlePressShop} />
        <DrawerButton text='Bag' onPress={this.handlePressBag} />
        <DrawerButton text='Inspiration' onPress={this.handlePressAPI} />
        <DrawerButton text='Stores' onPress={this.handlePressTheme} />
        <DrawerButton text='My Account' onPress={this.handlePressDevice} />
        <DrawerButton text='Customer Support' onPress={this.handlePressSupport} />
        <DrawerButton text='Log Out' onPress={this.handlePressDevice} />
      </ScrollView>
    )
  }

}

DrawerContent.propTypes = {
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
