import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MainNavigator } from './navigator/index'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
