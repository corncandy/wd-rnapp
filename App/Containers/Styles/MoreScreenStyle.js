import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    marginBottom: Metrics.tabBarHeight,
    backgroundColor: '#F2F2F2'
  },
  header: {
    position: 'absolute',
    top: 0,
    width: Metrics.screenWidth,
    height: Metrics.scale(65),
    backgroundColor: '#FFFFFF'
  },
  headerIcon: {
    marginTop: Metrics.scale(34),
    height: Metrics.scale(36),
    width: Metrics.screenWidth
  },
  orders: {
    marginTop: Metrics.scale(65),
    backgroundColor: '#F2F2F2',
    height: 120
  },
  inProgress: {
    alignSelf: 'center',
    marginTop: 20,
    width: Metrics.scale(290),
    height: 50,
    backgroundColor: '#454545',
    borderRadius: 4
  },
  orderRefresh: {
    alignSelf: 'center',
    width: 13,
    height: 13,
    marginTop: 9,
    marginBottom: 2
  },
  orderCount: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'center'
  },
  orderInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 14,
    width: Metrics.scale(290),
    alignSelf: 'center'
  },
  orderText: {
    color: '#999999',
    fontSize: 12
  },
  listView: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0.5,
    borderTopColor: '#BFBFBF'
  },
  listItem: {
    height: 79,
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 26,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#BFBFBF'
  },
  itemIcon: {
    width: 16,
    height: 16,
    marginRight: 14
  },
  itemText: {
    flex: 1,
    color: '#454545',
    fontSize: 15
  },
  nextIcon: {
    width: 9,
    height: 15
  }
})
