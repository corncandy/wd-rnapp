import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginTop: 65,
    marginBottom: 50
  },
  topBanner: {
    height: Metrics.scale(40),
    width: null
  },
  menOutwear: {
    height: Metrics.scale(81),
    width: null
  },
  womenOutwear: {
    height: Metrics.scale(81),
    width: null
  },
  offer: {
    height: Metrics.scale(277),
    width: null
  }
})
