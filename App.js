import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { MainNavigator } from './navigator/index'

export default class App extends React.Component {
  render() {
    const store = createStore(reducer, {}, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <View style={styles.container}>
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
