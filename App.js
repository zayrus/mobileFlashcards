import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import {createStore, applyMiddleware} from 'redux'
import { Constants } from 'expo'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { MainNavigator } from './navigator/index'
import { black } from './utils/colors'

export default class App extends React.Component {
  render() {
    const store = createStore(reducer, {}, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={{ backgroundColor:black, height: Constants.statusBarHeight }}>
            <StatusBar  translucent  barStyle='light-content' />
          </View>
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
