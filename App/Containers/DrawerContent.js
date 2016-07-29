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

  render() {
    return (
      <ScrollView>
        <Image source={Images.drawerNavBg} style={{height: 266, width: null}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={this.handlePressShop}>
              <Image source={Images.shopDrawerIcon} style={{height: 50, width: 31}} />
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={this.handlePressBag}>
              <Image source={Images.bagDrawerIcon} style={{height: 51, width: 25}} />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={this.handlePressInspiration}>
              <Image source={Images.inspirationDrawerIcon} style={{height: 48, width: 64}} />
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={this.handlePressStore}>
              <Image source={Images.storesDrawerIcon} style={{height: 48, width: 38}} />
            </TouchableOpacity>
          </View>
        </Image>
        <DrawerButton text='My Account' onPress={this.handlePressAccount} />
        <DrawerButton text='Customer Support' onPress={this.handlePressSupport} />
        <DrawerButton text='Log Out' textStyle={{color: '#f3b453'}} onPress={this.handlePressLogout} />
        <Image source={Images.drawerFollowUs} style={{width: 216, height: 85, alignSelf: 'center', marginTop: 33}} />
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
