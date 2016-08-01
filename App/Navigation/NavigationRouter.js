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
import SupportScreen from '../Containers/SupportScreen'

/***************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

const TabIcon = (props) => {
  let iconName = props.title.toLowerCase() + 'Icon'

  if (props.selected) {
    iconName += 'Active'
  }

  if (props.title === 'Bag') {
    return <Image source={Images[iconName]} style={Styles.bigIcon} />
  } else {
    return <Image source={Images[iconName]} style={Styles.tabIcon} />
  }
}

const BrandIcon = (props) => (
  <Image source={Images.brand} style={Styles.title} />
)

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar}>
            <Scene key='tabbar' tabBarStyle={Styles.tabBar} tabs={true}>
              <Scene
                key='shopScreen'
                renderTitle={BrandIcon}
                drawerImage={Images.drawer}
                component={ShopScreen}
                icon={TabIcon}
                title='Shop' />
              <Scene
                key='inspirationScreen'
                renderTitle={BrandIcon}
                drawerImage={Images.drawer}
                component={InspirationScreen}
                icon={TabIcon}
                title='Inspiration' />
              <Scene
                key='bagScreen'
                renderTitle={BrandIcon}
                drawerImage={Images.drawer}
                component={BagScreen}
                icon={TabIcon}
                title='Bag' />
              <Scene
                key='storeScreen'
                renderTitle={BrandIcon}
                drawerImage={Images.drawer}
                component={StoreScreen}
                icon={TabIcon}
                title='Stores' />
              <Scene
                key='moreScreen'
                renderTitle={BrandIcon}
                drawerImage={Images.drawer}
                component={MoreScreen}
                icon={TabIcon}
                title='More' initial />
            </Scene>
            <Scene
              renderTitle={BrandIcon}
              backButtonImage={Images.back}
              key='supportScreen'
              component={SupportScreen}
              title='Customer Support' />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
