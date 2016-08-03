import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginTop: Metrics.navBarHeight,
    flex: 1,
  },
  wrapper: {
    marginBottom: 44
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  description: {
    height: 80,
    margin: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#F2F2F2',
    color: '#454545',
    fontSize: 15
  },
  toolBar: {
    position: 'absolute',
    bottom: 0,
    width: Metrics.screenWidth,
    height: 44,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.15)',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF'
  },
  customize: {
    width: 88,
    backgroundColor: 'rgba(173, 173, 173, 0.08)',
    borderRightWidth: 0.5,
    borderRightColor: '#CCCCCC',
    alignItems: 'center',
  },
  customizeIcon: {
    marginTop: 8
  },
  customizeText: {
    marginTop: 6,
    color: '#454545',
    fontSize: 12
  },
  info: {
    flex: 1,
    flexDirection: 'row',
  },
  price: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10
  },
  value: {
    marginTop: 4,
    fontSize: 13,
    color: '#999999',
    textDecorationLine: 'line-through'
  },
  current: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#454545'
  },
  button: {
    width: 120,
    backgroundColor: '#f3b453',
    height: 30,
    marginTop: 7,
    marginRight: 6,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cart: {
    color: '#FFFFFF',
  },
  customPanel: {
    position: 'absolute',
    bottom: 44,
    transform: [{translateY: 216}],
    width: Metrics.screenWidth,
    height: 216,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(0, 0, 0, 0.15)',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  customLabel: {
    flex: 1,
    fontSize: 15,
    color: '#454545',
    paddingTop: 18
  },
  customSelection: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center'
  }
})
