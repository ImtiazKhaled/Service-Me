import React, { Component } from 'react'
import { View, SafeAreaView } from 'react-native'
import Message from './message'
import { styles } from '../styles/styles'

export default class Messages extends Component {
  
  render() {
    return (
      <SafeAreaView>
        <View style={styles.topPad}>
          <Message />
        </View>
      </SafeAreaView>
    )
  }
}
