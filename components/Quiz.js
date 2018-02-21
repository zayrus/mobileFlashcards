import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { green, red, white, purple } from '../utils/colors'
import { connect } from 'react-redux'

class Quiz extends Component {

  state = {
    currentIndex: 0,
    right: 0,
    showAnswer: false
  }

  render() {
    const questions = navigation.state.params.questions
    const { currentIndex, showAnswer } = this.state

    return (
			
      <View style={{flex:1, backgroundColor:white}}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center'
  }
})


export default connect()(Quiz)