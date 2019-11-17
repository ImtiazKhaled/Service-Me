import React, { Component } from 'react'
import { View, SafeAreaView } from 'react-native'
import Message from './message'
import { connect } from 'react-redux'
import { styles } from '../styles/styles'

class Messages extends Component {
  openMessage = (Messagee) => {

    this.props.navigation.navigate('Chat', Messagee)
  }
  render() {
    const {messagers} = this.props
    return (
      <SafeAreaView>
        <View style={styles.topPad}>
          {
            messagers.map(
                (message) => {
                  return <Message 
                  key={message.UserId} 
                  message={message} 
                  openMessage={this.openMessage}/>
                }
            )
          }
        </View>
      </SafeAreaView>
    )
  }
}


const mapStateToProps = (state) => {
  return {
      messagers: state.user.messagers
  }
}

export default connect(mapStateToProps)(Messages)