import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight
  },
  banner: {
    height: Metrics.scale(81),
    width: null
  },
  wrapper: {
    position: 'absolute',
    top: Metrics.scale(81),
    height: 46,
    width: Metrics.screenWidth,
    shadowColor: '#000000',
  },
  categories: {
    height: 45,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1.5
  },
  category: {
    fontSize: 14,
    color: '#454545',
    marginRight: 19,
    alignSelf: 'center'
  },
  listView: {
    paddingTop: 46
  },
  row: {
    height: 115,
    flexDirection: 'row',
    alignItems: 'center'
  }
})
