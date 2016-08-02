import React, { PropTypes } from 'react'
import {
  ScrollView,
  Text,
  Image,
  View,
  ListView,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Metrics, Images } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/ProductScreenStyle'

// I18n
import I18n from '../I18n/I18n.js'

class ProductScreen extends React.Component {
  static propTypes = {
    requestProducts: PropTypes.func
  }

  constructor (props) {
    super(props)
    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = this.props.products

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    }
  }

  /* ***********************************************************
  * STEP 3
  * `_renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  _renderRow (rowData) {
    return (
      <View style={{height: 115, flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: '#bfbfbf'}}>
        <View style={{flex: 2, padding: 20}}>
          <Image source={{uri: rowData.picture}} style={{width: 130, height: 80}} resizeMode='stretch' />
        </View>
        <View style={{flex: 3, justifyContent: 'center'}}>
          <Text style={{fontSize: 15, color: '#454545', width: 156, height: 38}}>{rowData.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 13, color: '#999999', textDecorationLine: 'line-through', marginRight: 8}}>${rowData.price}</Text>
            <Text style={{fontSize: 13, fontWeight: 'bold', color: '#454545'}}>${rowData.current}</Text>
          </View>
        </View>
      </View>
    )
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  *************************************************************/
  componentWillReceiveProps (newProps) {
    if (this.props.categories.length === 0 && newProps.categories && newProps.categories.length) {
      this.setState({
        currentCategory: newProps.categories[0].id
      }, () => {
        this.props.requestProducts(this.state.currentCategory)
      })
    }
    if (newProps.products) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newProps.products)
      })
    }
  }

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  _noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  componentDidMount() {
    this.props.requestCategories(this.props.category)
  }

  selectCategory(category) {
    this.setState({
      currentCategory: category.id
    }, () => {
      this.props.requestProducts(this.state.currentCategory)
    })
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.shopMenOutwear} style={styles.banner} />
        <ListView
          enableEmptySections={true}
          contentContainerStyle={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow} />
        <View style={styles.wrapper}>
          <ScrollView
            horizontal={true}
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categories}>
            {
              this.props.categories.map(category => (
                <TouchableOpacity
                  key={category.id}
                  style={{alignSelf: 'center'}}
                  onPress={this.selectCategory.bind(this, category)}>
                  <Text
                    style={[
                      styles.category,
                      (category.id === this.state.currentCategory) ? styles.categoryActive : ''
                    ]}>
                    {category.name}
                  </Text>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.list,
    categories: state.categories.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestProducts: (category) => dispatch(Actions.requestProducts(category)),
    requestCategories: (category) => dispatch(Actions.requestCategories(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen)
