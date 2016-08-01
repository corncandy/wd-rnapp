import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrics.navBarHeight,
    marginBottom: Metrics.tabBarHeight
  },
  noItem: {
    width: Metrics.scale(276),
    height: Metrics.scale(147)
  }
})
