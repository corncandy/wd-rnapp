import React, { Component } from 'react'
import { Text } from 'react-native'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import AllComponentsScreen from '../Containers/AllComponentsScreen'
import UsageExamplesScreen from '../Containers/UsageExamplesScreen'
import LoginScreen from '../Containers/LoginScreen'
import ListviewExample from '../Containers/ListviewExample'
import ListviewGridExample from '../Containers/ListviewGridExample'
import MapviewExample from '../Containers/MapviewExample'
import APITestingScreen from '../Containers/APITestingScreen'
import ThemeScreen from '../Containers/ThemeScreen'
import DeviceInfoScreen from '../Containers/DeviceInfoScreen'

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
  render(){
    return (
      <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
    );
  }
}

const backup =
  <Router>
    <Scene key='drawer' component={NavigationDrawer}>
      <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
        <Scene key='presentationScreen' component={PresentationScreen} title='Ignite' initial />
        <Scene key='componentExamples' component={AllComponentsScreen} title='Components' />
        <Scene key='usageExamples' component={UsageExamplesScreen} title='Usage' rightTitle='Example' onRight={()=>window.alert('Example Pressed')} />
        <Scene key='login' component={LoginScreen} title='Login' hideNavBar />
        <Scene key='listviewExample' component={ListviewExample} title='Listview Example' />
        <Scene key='listviewGridExample' component={ListviewGridExample} title='Listview Grid' />
        <Scene key='mapviewExample' component={MapviewExample} title='Mapview Example' />
        <Scene key='apiTesting' component={APITestingScreen} title='API Testing' />
        <Scene key='theme' component={ThemeScreen} title='Theme' />
        <Scene key='deviceInfo' component={DeviceInfoScreen} title='Device Info' />
      </Scene>
    </Scene>
  </Router>

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene key='tabbar' tabs={true} initial>
              <Scene key='shopScreen' component={ShopScreen} icon={TabIcon} title='Shop' rightTitle='Login' onRight={() => {}} />
              <Scene key='inspirationScreen' component={InspirationScreen} icon={TabIcon} title='Inspiration' rightTitle='Example' onRight={()=>window.alert('Example Pressed')} />
              <Scene key='bagScreen' component={BagScreen} icon={TabIcon} title='Bag' />
              <Scene key='storeScreen' component={StoreScreen} icon={TabIcon} title='Stores' />
              <Scene key='moreScreen' component={MoreScreen} icon={TabIcon} title='More' />
            </Scene>
            <Scene key='accountScreen' component={AccountScreen} title='AccountScreen' />
            <Scene key='supportScreen' component={SupportScreen} title='SupportScreen' />
          </Scene>
        </Scene>
      </Router>

    )
  }
}

export default NavigationRouter
