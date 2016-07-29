import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import { Images } from '../Themes'

// screens identified by the router
import ShopScreen from '../Containers/ShopScreen'
import BagScreen from '../Containers/BagScreen'
import InspirationScreen from '../Containers/InspirationScreen'
import StoreScreen from '../Containers/StoreScreen'
import MoreScreen from '../Containers/MoreScreen'
import AccountScreen from '../Containers/AccountScreen'
import SupportScreen from '../Containers/SupportScreen'

/***************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class TabIcon extends React.Component {
  render() {
    let iconName = this.props.title.toLowerCase() + 'Icon'
    let width = 50
    let height = 50

    if (this.props.selected) {
      iconName += 'Active'
    }

    if (this.props.title === 'Bag') {
      width = 75
      height = 75
      return (
        <Image
          source={Images[iconName]}
          style={{position: 'absolute', top: -25, width: width, height: height, resizeMode: 'stretch'}} />
      )
    } else {
      return (
        <Image
          source={Images[iconName]}
          style={{width: width, height: height, resizeMode: 'stretch'}} />
      )
    }
  }
}

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene
          key='drawer'
          component={NavigationDrawer}>
          <Scene
            key='drawerChildrenWrapper'
            navigationBarStyle={Styles.navBar}
            titleStyle={Styles.title}
            leftButtonIconStyle={Styles.leftButton}
            rightButtonTextStyle={Styles.rightButton}>
            <Scene
              key='tabbar'
              tabBarStyle={{borderTopWidth: 0.5, borderTopColor: '#c4c4c4'}}
              tabs={true}>
              <Scene
                navigationBarStyle={{backgroundColor: '#F2F2F2', height: 65, borderBottomWidth: 0}}
                renderTitle={() => <Image source={Images.brand} style={{alignSelf: 'center', resizeMode: 'stretch', width: 51, height: 28, marginTop: 26}}/>}
                drawerImage={Images.drawer}
                key='shopScreen'
                component={ShopScreen}
                icon={TabIcon}
                title='Shop' />
              <Scene
                navigationBarStyle={{backgroundColor: '#F2F2F2', height: 65, borderBottomWidth: 0}}
                renderTitle={() => <Image source={Images.brand} style={{alignSelf: 'center', resizeMode: 'stretch', width: 51, height: 28, marginTop: 26}}/>}
                drawerImage={Images.drawer}
                key='inspirationScreen'
                component={InspirationScreen}
                icon={TabIcon}
                title='Inspiration' />
              <Scene
                navigationBarStyle={{backgroundColor: '#F2F2F2', height: 65, borderBottomWidth: 0}}
                renderTitle={() => <Image source={Images.brand} style={{alignSelf: 'center', resizeMode: 'stretch', width: 51, height: 28, marginTop: 26}}/>}
                drawerImage={Images.drawer}
                key='bagScreen'
                component={BagScreen}
                icon={TabIcon}
                title='Bag' initial />
              <Scene
                navigationBarStyle={{backgroundColor: '#F2F2F2', height: 65, borderBottomWidth: 0}}
                renderTitle={() => <Image source={Images.brand} style={{alignSelf: 'center', resizeMode: 'stretch', width: 51, height: 28, marginTop: 26}}/>}
                drawerImage={Images.drawer}
                key='storeScreen'
                component={StoreScreen}
                icon={TabIcon}
                title='Stores' />
              <Scene
                navigationBarStyle={{backgroundColor: '#F2F2F2', height: 65, borderBottomWidth: 0}}
                renderTitle={() => <Image source={Images.brand} style={{alignSelf: 'center', resizeMode: 'stretch', width: 51, height: 28, marginTop: 26}}/>}
                drawerImage={Images.drawer}
                key='moreScreen'
                component={MoreScreen}
                icon={TabIcon}
                title='More' />
            </Scene>
            <Scene
              key='accountScreen'
              component={AccountScreen}
              title='AccountScreen' />
            <Scene
              key='supportScreen'
              component={SupportScreen}
              title='SupportScreen' />
          </Scene>
        </Scene>
      </Router>

    )
  }
}

export default NavigationRouter
