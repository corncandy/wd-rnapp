import {Colors} from '../../Themes/'

export default {
  container: {
    flex: 1
  },
  navBar: {
    backgroundColor: Colors.navBar,
    height: 65,
    borderBottomWidth: 0
  },
  tabBar: {
    borderTopWidth: 0.5,
    borderTopColor: Colors.tabBar
  },
  title: {
    alignSelf: 'center',
    resizeMode: 'stretch',
    width: 51,
    height: 28,
    marginTop: 26
  },
  leftButton: {
    tintColor: Colors.snow
  },
  rightButton: {
    color: Colors.snow
  },
  tabIcon: {
    width: 50,
    height: 50,
    resizeMode: 'stretch'
  },
  bigIcon: {
    position: 'absolute',
    top: -25,
    width: 75,
    height: 75,
    resizeMode: 'stretch'
  }
}
