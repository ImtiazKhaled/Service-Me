import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Card } from 'react-native-elements'
import { CardThree } from 'react-native-card-ui'
import { connect } from 'react-redux'

class Chat extends Component {
    render() {
        const {chat} = this.props
        console.log(chat)
        return (
            <View>
                {
                    chat.map((msg) => 
                        <Card title={msg.Message}>
                            <Text>
                                {msg.Sender}
                            </Text>
                        </Card>
                    )
                }
            </View>
        )
    }
}


const mapStateToProps = (state, currProps) => {
    console.log(currProps)
    return {
        chat: state.user.chat
    }
}

export default connect(mapStateToProps)(Chat)