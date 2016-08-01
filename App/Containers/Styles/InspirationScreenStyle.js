import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flexDirection: 'row',
    paddingTop: 65,
    paddingBottom: 50
  },
  column: {
    width: Metrics.screenWidth / 3,
    height: Metrics.screenHeight - Metrics.navBarHeight - Metrics.tabBarHeight
  }
})
