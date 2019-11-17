import React, { Component } from 'react'
import { ScrollView, View, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { Card, Input, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { Col, Grid } from 'react-native-easy-grid'
import {styles} from '../styles/styles'
import Icon from 'react-native-vector-icons/FontAwesome'

class Chat extends Component {
    _handleFocus(event, refName) {
        let node = React.findNodeHandle(this.refs[refName]);
        let extraHeight = 100;
        this.refs.keyboardAwareScrollView.scrollToFocusedInput(event, node, extraHeight);
    }
    render() {
        const {chat} = this.props
        console.log(chat)
        return (
            <KeyboardAvoidingView
                behavior="padding"
            >
                  {
                        chat.map((msg) => 
                            <Card key={msg.MessageId} title={msg.Message}>
                                <Text>
                                    {msg.Sender}
                                </Text>
                            </Card>
                        )
                    }
                    <View style={{padding: 50}} />
                    <Grid>
                        <Col size={79}>
                        <TextInput placeholder='enter message...'/>
                        </Col>
                        <Col size={17}>
                            <Button
                                buttonStyle = {styles.messageButton}
                                icon = {<Icon
                                    name='arrow-right'
                                    size={15}
                                    color='blue'
                                />}
                            />
                        </Col>
                    </Grid>
                </KeyboardAvoidingView>
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