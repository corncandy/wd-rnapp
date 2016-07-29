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

  handlePressInspiration = () => {
    this.toggleDrawer()
    NavigationActions.inspirationScreen()
  }

  handlePressStore = () => {
    this.toggleDrawer()
    NavigationActions.storeScreen()
  }

  handlePressAccount = () => {
    this.toggleDrawer()
    NavigationActions.accountScreen()
  }

  handlePressSupport = () => {
    this.toggleDrawer()
    NavigationActions.supportScreen()
  }

  handlePressLogout = () => {
    this.toggleDrawer()
    // Need logout action here!
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <DrawerButton text='Shop' onPress={this.handlePressShop} />
        <DrawerButton text='Bag' onPress={this.handlePressBag} />
        <DrawerButton text='Inspiration' onPress={this.handlePressInspiration} />
        <DrawerButton text='Stores' onPress={this.handlePressStore} />
        <DrawerButton text='My Account' onPress={this.handlePressAccount} />
        <DrawerButton text='Customer Support' onPress={this.handlePressSupport} />
        <DrawerButton text='Log Out' onPress={this.handlePressLogout} />
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
