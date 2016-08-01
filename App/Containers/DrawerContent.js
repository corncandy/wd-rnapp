import React, { Component } from 'react'
import { View, ScrollView, Image, TouchableOpacity } from 'react-native'
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
    NavigationActions.moreScreen()
  }

  handlePressSupport = () => {
    this.toggleDrawer()
    NavigationActions.supportScreen()
  }

  handlePressLogout = () => {
    this.toggleDrawer()
    // Need logout action here!
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.drawerNavBg} style={{height: 267, width: null}} resizeMode='stretch'>
          <View style={styles.drawerNav}>
            <TouchableOpacity style={styles.navIcon} onPress={this.handlePressShop}>
              <Image source={Images.shopDrawerIcon} style={{height: 50, width: 31}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navIcon} onPress={this.handlePressBag}>
              <Image source={Images.bagDrawerIcon} style={{height: 51, width: 25}} />
            </TouchableOpacity>
          </View>
          <View style={styles.drawerNav}>
            <TouchableOpacity style={styles.navIcon} onPress={this.handlePressInspiration}>
              <Image source={Images.inspirationDrawerIcon} style={{height: 48, width: 64}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navIcon} onPress={this.handlePressStore}>
              <Image source={Images.storesDrawerIcon} style={{height: 48, width: 38}} />
            </TouchableOpacity>
          </View>
        </Image>
        <DrawerButton text='My Account' onPress={this.handlePressAccount} />
        <DrawerButton text='Customer Support' onPress={this.handlePressSupport} />
        <DrawerButton text='Log Out' textStyle={styles.warningText} onPress={this.handlePressLogout} />
        <Image source={Images.drawerFollowUs} style={styles.followUs} />
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
