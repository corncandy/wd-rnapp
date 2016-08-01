import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    marginBottom: Metrics.tabBarHeight
  },
  map: {
    height: Metrics.scale(172),
    width: null
  },
  header: {
    marginTop: Metrics.scale(40),
    height: Metrics.scale(60),
    width: null
  }
})
